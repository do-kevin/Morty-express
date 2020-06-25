import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Result, Button } from 'antd';
import styled from 'styled-components';
import Home from 'screens/Home';

const StyledResult = styled(Result)`
  .ant-result-title,
  .ant-result-subtitle {
    color: white;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
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
