import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import SideMenu from 'components/sidebars/SideMenu';

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

function Sidebar(props) {
  const { role, match, collapse } = props;

  return (
    <StyledSider trigger={null} collapsible collapsed={collapse}>
      <SideMenu role={role} match={match} collapse={collapse} />
    </StyledSider>
  );
}

export default Sidebar;
