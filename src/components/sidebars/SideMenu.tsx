import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTv,
  faSignOutAlt,
  faTable,
  faCog,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { uniqueId } from 'lodash';

const routesList = (role) => {
  return [
    {
      path: 'monitor',
      name: 'Monitor',
      icon: faTv,
      enabled: role === 'admin',
    },
    {
      path: 'data',
      name: 'Data',
      icon: faTable,
      enabled: role === 'admin',
    },
    {
      path: 'account',
      name: 'Account',
      icon: faUserCircle,
      enabled: ['admin', 'user'].includes(role),
    },
    {
      path: 'settings',
      name: 'Settings',
      icon: faCog,
      enabled: ['admin', 'user'].includes(role),
    },
  ];
};

export default function SideMenu(props) {
  const { role, collapse, match } = props;
  const { url: basePath } = match;

  let routes = routesList(role).filter((i) => i.enabled);
  return (
    <>
      <section className="flex flex-col justify-center h-12">
        <figure className="m-auto">
          <img
            className="h-8 w-8"
            src={
              'https://camo.githubusercontent.com/bc93494c1f9faf29cae5064245e03f086a2cb1b5/68747470733a2f2f67772e616c697061796f626a656374732e636f6d2f7a6f732f726d73706f7274616c2f4b4470677667754d704766716148506a6963524b2e737667'
            }
            alt="Ant Design Logo"
          />
        </figure>
      </section>
      <section>
        <div className="w-full">
          <ul className="w-full list-none text-white pl-0">
            {routes.map(({ path, name, icon }) => (
              <li key={uniqueId('menuItem__')} className="hover:bg-gray-800">
                <Link
                  className={`block text-white text-left py-2 px-4 rounded ${
                    collapse ? 'text-center' : 'text-left'
                  }`}
                  to={`${basePath}/${path}`}
                >
                  <FontAwesomeIcon icon={icon} />
                  {collapse ? null : ' ' + name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute text-center w-full" style={{ bottom: 2 }}>
          <Link
            to="/"
            className={`block text-white py-2 px-4 hover:bg-gray-800 ${
              collapse ? 'text-center' : 'text-left'
            }`}
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
            {collapse ? null : ' Logout'}
          </Link>
        </div>
      </section>
    </>
  );
}
