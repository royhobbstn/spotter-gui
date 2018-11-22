import React from 'react'
import { Menu } from 'semantic-ui-react';

export const TopMenu = ({ active_menu_item, updateActiveMenuItem }) => {

  return (
    <div style={{width: '100%', borderRadius: '0'}}>
      <Menu>
        <Menu.Item
          name='Status'
          active={active_menu_item === 'Status'}
          onClick={()=> {
            updateActiveMenuItem('Status');
          }}
        />
        <Menu.Item
          name='Launch'
          active={active_menu_item === 'Launch'}
          onClick={()=> {
          updateActiveMenuItem('Launch');
        }}
        />
        <Menu.Item
          name='Configure'
          active={active_menu_item === 'Configure'}
          onClick={()=> {
            updateActiveMenuItem('Configure');
          }}
        />
        <Menu.Item
          name='Setup'
          active={active_menu_item === 'Setup'}
          onClick={()=> {
            updateActiveMenuItem('Setup');
          }}
        />
      </Menu>
    </div>
  );
};

