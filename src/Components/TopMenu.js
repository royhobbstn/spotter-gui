import React from 'react';
import { Menu } from 'semantic-ui-react';

export const TopMenu = ({
  active_menu_item,
  clickSetupPage,
  clickConfigurePage,
  clickStatusPage
}) => {
  return (
    <div style={{ width: '100%', borderRadius: '0', paddingBottom: '20px' }}>
      <Menu>
        <Menu.Item
          name="Status"
          active={active_menu_item === 'Status'}
          onClick={() => {
            clickStatusPage();
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
