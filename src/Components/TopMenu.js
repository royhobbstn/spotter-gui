import React from 'react';
import { Menu } from 'semantic-ui-react';

export const TopMenu = ({
  active_menu_item,
  clickSetupPage,
  clickConfigurePage,
  clickLaunchPage,
  clickStatusPage
}) => {
  return (
    <div style={{ width: '100%', borderRadius: '0' }}>
      <Menu>
        <Menu.Item
          name="Status"
          active={active_menu_item === 'Status'}
          onClick={() => {
            clickStatusPage();
          }}
        />
        <Menu.Item
          name="Launch"
          active={active_menu_item === 'Launch'}
          onClick={() => {
            clickLaunchPage();
          }}
        />
        <Menu.Item
          name="Configure"
          active={active_menu_item === 'Configure'}
          onClick={() => {
            clickConfigurePage();
          }}
        />
        <Menu.Item
          name="Setup"
          active={active_menu_item === 'Setup'}
          onClick={() => {
            clickSetupPage();
          }}
        />
      </Menu>
    </div>
  );
};
