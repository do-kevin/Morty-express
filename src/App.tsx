import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';
import { imported } from 'react-imported-component/macro';

const Home = imported(() => import('screens/Home'));
const Result = imported(() => import('antd/lib/result'));
const Dashboard = imported(() => import('screens/Dashboard'));

const StyledResult = styled(Result)`
  .ant-result-title,
  .ant-result-subtitle {
    color: white;
  }
`;

class App extends Component {
  render() {
    // Checks if homepage in package.json exists
    const basename = process.env.PUBLIC_URL || undefined;

    return (
      <Router basename={basename}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            component={() => (
              <StyledResult
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                  <Button className="rounded" size="small" type="primary">
                    <Link to="/">Return home</Link>
                  </Button>
                }
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
