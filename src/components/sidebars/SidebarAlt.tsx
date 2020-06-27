import React from 'react';
import { Drawer } from 'antd';
import styled from 'styled-components';
import SideMenu from 'components/sidebars/SideMenu';

const StyledDrawer = styled(Drawer)`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
  .ant-drawer-body {
    background: black;
    padding: 0;
  }
`;

function SidebarAlt(props) {
  const { role, match, collapse, onClose } = props;

  return (
    <StyledDrawer
      className="w-auto"
      visible={collapse}
      placement="left"
      onClose={onClose}
    >
      <SideMenu role={role} match={match} collapse={false} />
    </StyledDrawer>
  );
}

export default SidebarAlt;
