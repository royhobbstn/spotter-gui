import React from 'react';
import { Menu } from 'semantic-ui-react';

export const TopMenu = ({
  active_menu_item,
  clickCredentialsPage,
  clickProfilePage,
  clickStatusPage,
  clickImagesPage
}) => {
  return (
    <div style={{ width: '100%', borderRadius: '0', paddingBottom: '20px' }}>
      <Menu>
        <Menu.Item
          name="Instance Status"
          active={active_menu_item === 'Status'}
          onClick={() => {
            clickStatusPage();
          }}
        />
        <Menu.Item
          name="Launch Profiles"
          active={active_menu_item === 'Profile'}
          onClick={() => {
            clickProfilePage();
          }}
        />
        <Menu.Item
          name="Images"
          active={active_menu_item === 'Images'}
          onClick={() => {
            clickImagesPage();
          }}
        />
        <Menu.Item
          name="Credentials"
          active={active_menu_item === 'Credentials'}
          onClick={() => {
            clickCredentialsPage();
          }}
        />
      </Menu>
    </div>
  );
};
