import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import CommunityBlock from '../../components/Shared/CommunityBlock/CommunityBlock';
import GraphicCommunities from '../../assets/bauhaus_communities.png';
import HausToken from '../../assets/haus__icon.png';

import IconA from '../../assets/ico-grants.png';
import IconB from '../../assets/ico-protocols.png';
import IconC from '../../assets/ico-guilds.png';
import IconD from '../../assets/ico-clubs.png';
import IconFA from '../../assets/ico__future--a.png';
import IconFB from '../../assets/ico__future--b.png';
import IconFC from '../../assets/ico__future--c.png';
import IconHA from '../../assets/ico__how--a.png';
import IconHB from '../../assets/ico__how--b.png';
import IconHC from '../../assets/ico__how--c.png';

import './Token.scss';

const Token = () => {
  return (
    <div className="Home">
      <div className="Block PrimaryDark">
        <div className="Block__Contents">
          <div className="Row">
            <div className="Column--50">
              <h1>The HAUS token aligns all DAOs on the platform</h1>
              <p className="BigP daoColor" style={{ maxWidth: '500px' }}>
                As we create more value together, that value flows back to the
                HAUS token, shared by all communities on the platform.
              </p>
              <div className="HeroButtonGroup">
                <a
                  href="https://medium.com/daohaus-club/haus-launch-bd781bbbf13a"
                  className="Button Big Secondary Outlined"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Read the Launch Article
                </a>
                {/* <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Button Big"
                >
                  FarmHaus
                </a> */}
              </div>
            </div>
            <div className="Column--50">
              <img src={HausToken} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="Block PrimaryBg">
        <div className="Block__Contents">
          <div className="Row">
            <div className="Column--50">
              <h2 style={{ textDecoration: 'strikethrough' }}>
                The HAUS CCO is complete!
              </h2>
              <p className="BigP">
                A CCO, or ???Community Contribution Opportunity???, is exactly that.
                An opportunity for the community to contribute in exchange for
                the community???s token (HAUS in our case).
              </p>
              <p>1.1M raised in 75 seconds.</p>
              <p className="yellowColor">
                <i>Claiming opens in a few days.</i>
              </p>
              <div className="HeroButtonGroup">
                <a
                  href="https://docs.daohaus.club/cco"
                  className="Button Secondary Outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What's a CCO?
                </a>
                {/* <a
                  href="https://app.daohaus.club/cco"
                  className="Button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'white' }}
                >
                  Claim
                </a> */}
              </div>
            </div>
            <div className="Column--50"></div>
          </div>
        </div>
      </div>
      <div className="Usecases Block">
        <div className="Block__Contents">
          <h3>What is HAUS used for?</h3>
          <p>
            How HAUS is used <span className="daoColor">TODAY</span>
          </p>
          <div className="Row">
            <div className="Column--50">
              <img src={IconA} alt="" width="80px" />
              <h5>Governance</h5>
              <p>
                Define, direct, and build the product for and with the
                community. Also supports sustainable governance over the HAUS
                token and its issuance.
              </p>
            </div>
            <div className="Column--50">
              <img src={IconB} alt="" width="80px" />
              <h5>Access</h5>
              <p>
                Get priority support and alpha access to new features on DAOhaus
              </p>
            </div>
            <div className="Column--50">
              <img src={IconC} alt="" width="80px" />
              <h5>Rewards</h5>
              <p>
                Earn rewards by providing liquidity to the community to build
                more value into the platform.
              </p>
            </div>
            <div className="Column--50">
              <img src={IconD} alt="" width="80px" />
              <h5>Discounts</h5>
              <p>
                Get discounts on advanced or custom features by paying with
                HAUS.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 75 }}>
            How HAUS will be used <span className="yellowColor">TOMORROW</span>
          </p>
          <div className="Row">
            <div className="Column--33">
              <div className="Row AlignCenter JustifyStart">
                <img
                  src={IconFA}
                  alt=""
                  width="40px"
                  style={{ marginRight: '10px' }}
                />
                <p>
                  Self-organized
                  <br />
                  <strong>User Union</strong>
                </p>
              </div>
            </div>
            <div className="Column--33">
              <div className="Row AlignCenter JustifyStart">
                <img
                  src={IconFB}
                  alt=""
                  width="40px"
                  style={{ marginRight: '10px' }}
                />
                <p>
                  Curated DAO
                  <br />
                  <strong>Index Fund</strong>
                </p>
              </div>
            </div>
            <div className="Column--33">
              <div className="Row AlignCenter JustifyStart">
                <img
                  src={IconFC}
                  alt=""
                  width="40px"
                  style={{ marginRight: '10px' }}
                />
                <p>
                  Seed Early
                  <br />
                  <strong>Communities</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Block">
        <div className="Block__Contents">
          <div className="Row">
            <div className="Column--50">
              <h5>Hello Meta Governance</h5>
              <h3>UberHaus</h3>
              <p className="BigP">
                UberHaus is the DAO that governs the DAOhaus product as well as
                the HAUS token. As DAOhaus is a platform for communities, there
                are no individual members, only the communities themselves. Any
                DAO can stake some HAUS and elect a delegate to represent them
                in UberHaus governance proposals.
              </p>
              <div className="ButtonGroup">
                <a
                  href="https://docs.daohaus.club/uberhaus-governance"
                  className="Button Outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More about UberHaus
                </a>
                {/* 
                <a
                  href="https://app.daohaus.club/explore"
                  className="Button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit UberHaus
                </a> */}
              </div>
            </div>
            <div className="Column--50">
              <img src={GraphicCommunities} alt="dao communities" />
            </div>
          </div>
        </div>
      </div>
      <div className="Block">
        <div className="Block__Contents">
          <h3>How HAUS governance works</h3>
          <p>Just the basics, more to come.</p>
          <div className="Row">
            <div className="Column--33" style={{ marginTop: 75 }}>
              <img src={IconHA} alt="" width="40px" />
              <h5>1. Discuss</h5>
              <p>
                Discuss new directions and features for the product or new
                use-cases and strategies for the HAUS token itself.
              </p>
              {/* <a
                className="Button Outlined"
                href="discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on Discord
              </a> */}
            </div>
            <div className="Column--33" style={{ marginTop: 75 }}>
              <img src={IconHB} alt="" width="40px" />
              <h5>2. Propose</h5>
              <p>
                Anyone can submit a proposal to the DAO. We can also collect
                signal from all tokenholders via Snapshot to help inform our
                path.
              </p>
              {/* <a
                className="Button Outlined"
                href="discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Propose on Discourse
              </a> */}
            </div>
            <div className="Column--33" style={{ marginTop: 75 }}>
              <img src={IconHC} alt="" width="40px" />
              <h5>3. Vote</h5>
              <p>
                The Member DAOs vote directly on these proposals, governing the
                platform themselves.
              </p>
              {/* <a
                className="Button Outlined"
                href="discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vote in the DAO
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <CommunityBlock />
      <Footer />
    </div>
  );
};

export default Token;
