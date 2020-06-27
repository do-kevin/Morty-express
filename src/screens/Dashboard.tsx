import React, { Component } from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { Layout, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndent, faOutdent } from '@fortawesome/free-solid-svg-icons';
import Sidebar from 'components/sidebars/Sidebar';
import SidebarAlt from 'components/sidebars/SidebarAlt';

const { Content } = Layout;

export default class Dashboard extends Component<RouteComponentProps> {
  state = {
    collapse: true,
  };

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { match, history } = this.props;
    const { url: basePath } = match;
    const { collapse } = this.state;

    return (
      <Layout className="flex h-full w-full">
        <Sidebar
          match={match}
          history={history}
          role="user"
          className="shadow-2xl"
          collapse={this.state.collapse}
        />
        <SidebarAlt
          match={match}
          history={history}
          role="user"
          className="shadow-2xl"
          collapse={this.state.collapse}
          onClose={this.toggleCollapse}
        />
        <Content>
          <div className="flex items-center bg-white h-12 px-6 shadow">
            <Button
              style={{ padding: 0 }}
              type="link"
              onClick={() => this.toggleCollapse()}
            >
              <FontAwesomeIcon
                className="text-black"
                icon={collapse ? faIndent : faOutdent}
              />
            </Button>
          </div>
          <main className="p-6">
            <Route
              path={`${basePath}/account`}
              component={() => <p>account</p>}
            />
            <Route path={`${basePath}/data`} component={() => <p>data</p>} />
            <Route
              path={`${basePath}/monitor`}
              component={() => <p>monitor</p>}
            />
            <Route
              path={`${basePath}/settings`}
              component={() => <p>settings</p>}
            />
          </main>
        </Content>
      </Layout>
    );
  }
}
