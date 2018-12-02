import React from 'react';
import { TopMenuContainer } from './Components/TopMenuContainer';
import { SetupContainer } from './Pages/SetupContainer';
import { ConfigureContainer } from './Pages/ConfigureContainer';
import { StatusContainer } from './Pages/StatusContainer';

import { Error } from './Components/Error';

export function App({ active_menu_item, app_loading }) {
  return (
    <div style={{ padding: '40px' }}>
      {app_loading ? (
        <div>Loading Application</div>
      ) : (
        <React.Fragment>
          <TopMenuContainer />
          {getPage(active_menu_item)}
        </React.Fragment>
      )}
    </div>
  );
}

function getPage(active_menu_item) {
  console.log(`Navigating to page: ${active_menu_item}`);
  switch (active_menu_item) {
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
