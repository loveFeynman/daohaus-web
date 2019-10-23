import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import _ from 'lodash';

import { GET_MOLOCHES_STATS } from '../../util/queries';
import { Web3Context } from '../../contexts/ContractContexts';
import { getPrices } from '../../util/prices';

// import '../node_modules/react-vis/dist/style.css';
import './Stats.scss';

const Stats = props => {
  const { loading, error, data } = useQuery(GET_MOLOCHES_STATS);
  const [web3Service] = useContext(Web3Context);
  const [prices, setPrices] = useState();

  console.log('data', data);

  useEffect(() => {
    const fetchPrices = async () => {
      const pricesRes = await getPrices();
      setPrices(pricesRes);
    };

    fetchPrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3Service]);

  const totalDaos = () => {
    return data.factories.length;
  };

  const totalGuildBank = () => {
    const value = data.factories.reduce(
      (sum, dao) => {
        sum[dao.approvedToken] += +web3Service.fromWei(dao.guildBankValue);
        return sum;
      },
      { Weth: 0, Dai: 0 },
    );

    return prices ? (
      <>
        <p className="Stat__value">
          {value.Weth} weth / {(value.Weth * prices.Weth).toFixed(2)} usd
        </p>
        <p className="Stat__value">
          {value.Dai} dai / {(value.Dai * prices.Dai).toFixed(2)} usd
        </p>
        <p className="Stat__value">
          {(value.Dai * prices.Dai + value.Weth * prices.Weth).toFixed(2)} Total
          usd
        </p>
      </>
    ) : (
      <>
        <p className="Stat__value">{value.Weth} Weth</p>
        <p className="Stat__value">{value.Dai} Dai</p>
      </>
    );
  };

  const totalShares = () => {
    return data.factories.reduce((sum, dao) => {
      return sum + +dao.totalShares;
    }, 0);
  };

  const totalDoaMemberships = () => {
    const counts = data.factories.reduce(
      (sum, dao) => {
        +dao.newContract
          ? (sum.new += dao.newContractMembers.length)
          : (sum.legacy += dao.apiData.legacyData.members.length);
        return sum;
      },
      { new: 0, legacy: 0 },
    );

    return counts.new + counts.legacy;
  };

  const uniqueDaoMembers = () => {
    const memberIDs = _.flatMap(data.factories, dao => {
      return +dao.newContract
        ? dao.newContractMembers
        : dao.apiData.legacyData.members;
    }).map(member => {
      return member.memberId ? member.memberId : member.id;
    });

    return _.uniq(memberIDs).length;
  };

  return (
    <div className="View">
      <h1>BIG DAOta</h1>
      {loading ? <p>Loading stats</p> : null}
      {error ? <p>Error - are you on mainnet?</p> : null}
      {data ? (
        <div>
          <p className="Stat__title">Daos summoned</p>
          <p className="Stat__value">{totalDaos()}</p>
          <p className="Stat__title">Total Shares Held</p>
          <p className="Stat__value">{totalShares()}</p>
          <p className="Stat__title">Totals of all Guild Banks</p>
          {totalGuildBank()}
          <p className="Stat__title">Total Dao Memberships</p>
          <p className="Stat__value">{totalDoaMemberships()}</p>
          <p className="Stat__title">Unique Dao Members</p>
          <p className="Stat__value">{uniqueDaoMembers()}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Stats;