import React, { useState, useEffect } from 'react';
import { getProfile } from '3box/lib/api';
import { useWeb3Context } from 'web3-react';

import { get } from '../../util/requests';
import { useQuery } from 'react-apollo';
import { GET_MEMBER_MOLOCHES } from '../../util/queries';
import UnregisteredList from '../../components/unregisteredList/unregisteredList';
import ProfileMemberList from '../../components/ProfileMemberList/ProfileMemberList';

import './Profile.scss';
import ProfileActivityFeed from '../../components/ActivityFeed/ProfileActivityFeed';

const Profile = props => {
  const context = useWeb3Context();
  const [memberDaos, setMemberDaos] = useState([]);

  const [unregisteredDaos, setUnregisteredDaos] = useState([]);

  const [profile, setProfile] = useState({});

  const { loading, error, data } = useQuery(GET_MEMBER_MOLOCHES, {
    variables: { memberAddress: props.match.params.account },
  });

  useEffect(() => {
    const setup = async () => {
      let profile;
      try {
        profile = await getProfile(props.match.params.account);
      } catch {
        profile = {};
      }
      setProfile(profile);
    };

    setup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      setMemberDaos(data.members.map(member => member.moloch));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    const fetchOrphans = async () => {
      if (context.account) {
        const orphans = await get(
          `moloch/orphans/${props.match.params.account}`,
        );

        console.log('orphans', orphans);
        setUnregisteredDaos(
          orphans.data.filter(orphan => {
            return orphan.summonerAddress === context.account.toLowerCase();
          }),
        );
      }
    };

    fetchOrphans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.account]);

  const renderUnregisteredList = () => {
    return unregisteredDaos.map((dao, i) => {
      return <UnregisteredList dao={dao} key={i} />;
    });
  };

  return (
    <>
      <div className="Profile__id">
        <div>
          {profile.image && profile.image[0] ? (
            <div
              className="ProfileImg"
              style={{
                backgroundImage: `url(${'https://ipfs.infura.io/ipfs/' +
                  profile.image[0].contentUrl['/']})`,
              }}
            >
              {''}
            </div>
          ) : null}

          {profile.name ? (
            <h2>
              {profile.name}{' '}
              {profile.emoji ? <span>{profile.emoji} </span> : null}
            </h2>
          ) : null}

          <p className="Data">{props.match.params.account}</p>

          {profile.description ? <p>{profile.description}</p> : null}

          {profile.website ? (
            <>
              {profile.website.indexOf('http') > 0 ? (
                <a
                  href={profile.website.match}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {profile.website}
                </a>
              ) : (
                <p>{profile.website}</p>
              )}
            </>
          ) : null}

          {context.account === props.match.params.account && (
            <a
              href="https://3box.io/hub"
              target="_blank"
              rel="noreferrer noopener"
            >
              Edit Profile on 3Box
            </a>
          )}
        </div>
        <div>
          <div className="Profile__balances">
            <p>Boosts</p>
            <p>$Haus</p>
            <p>Coming soon</p>
          </div>
        </div>
      </div>

      <div className="View">
        {loading ? <p>Loading</p> : null}
        {error ? <p>Error - are you on mainnet?</p> : null}

        {unregisteredDaos.length ? (
          <div className="Section">
            <h2>Unregistered Moloch V2 Daos</h2>
            {renderUnregisteredList()}
          </div>
        ) : null}

        {data && memberDaos.length ? (
          <div className="Section">
            <ProfileMemberList daos={memberDaos} />
            <ProfileActivityFeed daos={memberDaos} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
