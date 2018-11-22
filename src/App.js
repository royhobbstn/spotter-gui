import React from 'react';
import {TopMenuContainer} from './Components/TopMenuContainer';
import {LaunchContainer} from './Pages/LaunchContainer';
import {SetupContainer} from './Pages/SetupContainer';
import {ConfigureContainer} from './Pages/ConfigureContainer';
import {StatusContainer} from './Pages/StatusContainer';

import {Error} from './Components/Error';

export function App({active_menu_item}) {
    return (
      <div>
        <TopMenuContainer />
        {getPage(active_menu_item)}
      </div>
    );
}

function getPage(active_menu_item) {
  console.log(active_menu_item);
  switch(active_menu_item) {
    case 'Launch':
      return <LaunchContainer />;
    case 'Setup':
      return <SetupContainer />;
    case 'Configure':
      return <ConfigureContainer />;
    case 'Status':
      return <StatusContainer />;
    default:
      return <Error />;
  }
}