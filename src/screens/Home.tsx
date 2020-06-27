import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Card } from 'antd';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import logo from 'logo.svg';
import libraries from 'libraries.json';

const { Content, Header } = Layout;
const { Meta } = Card;

const LinkButton = styled.a`
  background-color: rgb(24, 144, 255);
`;

const LibraryCard = styled.div`
  .libraryCard {
    height: 100%;
    min-width: 20rem;
    position: relative;
    left: 0;
    transition: 0.4s ease-out;
    margin-left: -50px;
    box-shadow: -0.05rem 0 3rem #000;
  }
  .libraryCard:hover,
  .libraryCard:active {
    margin-left: 0px;
    bottom: 20px;
    transition: 0.4s ease-out;
    z-index: 1;
  }
`;

const StyledLink = styled(Link)`
  right: 1rem;
`;

const StyledHeader = styled(Header)`
  height: auto;
`;

const SpinningLogo = styled.div`
  .reactLogo {
    bottom: 0.2rem;
  }
  @media (prefers-reduced-motion: no-preference) {
    .reactLogo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

class Home extends Component {
  render() {
    return (
      <Layout className="home">
        <StyledHeader className="home__header">
          <Row className="justify-between">
            <StyledLink
              to="/"
              className="home__homeLink flex flex-row items-center relative"
            >
              <SpinningLogo>
                <img
                  className="reactLogo h-12 w-12 relative"
                  src={logo}
                  alt="React logo"
                />
              </SpinningLogo>
              React Rescripts Ant Design Starter
            </StyledLink>
            <Link to="/dashboard">Dashboard</Link>
          </Row>
        </StyledHeader>
        <Content className="home__content text-white w-full bg-gray-900 px-12 py-4">
          <p className="text-4xl">
            A React &amp; Typescript starter that's opinionated
            <br /> and includes a minimal dashboard.
          </p>
          <div className="flex">
            <section className="h-auto bg-gray-800 rounded flex items-center">
              <span
                className="text-2xl block"
                style={{ transform: 'rotate(270deg)' }}
              >
                Libraries
              </span>
            </section>
            <section className="flex flex-row justify-even overflow-x-auto p-2">
              {libraries.map((l) => {
                return (
                  <LibraryCard key={uniqueId('libraryCard__')}>
                    <Card
                      className="libraryCard w-64"
                      cover={
                        l.image_src ? (
                          <img
                            className="h-64 object-contain"
                            src={l.image_src}
                            alt={l.name + 'image'}
                          />
                        ) : (
                          <img
                            className="h-64 object-contain bg-white"
                            src={
                              'https://github.githubassets.com/images/modules/open_graph/github-logo.png'
                            }
                            alt="github logo"
                          />
                        )
                      }
                    >
                      <div>
                        <Meta
                          title={l.name}
                          style={{ marginBottom: '0.5rem' }}
                        />
                        <LinkButton
                          className="hover:bg-blue-600 text-white hover:text-white font-bold py-2 px-4 rounded w-full block text-center"
                          href={l.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Link
                        </LinkButton>
                      </div>
                    </Card>
                  </LibraryCard>
                );
              })}
            </section>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default Home;
