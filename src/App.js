import React from 'react';
import { TopMenuContainer } from './Components/TopMenuContainer';
import { CredentialsContainer } from './Pages/CredentialsContainer';
import { ProfileContainer } from './Pages/ProfileContainer';
import { StatusContainer } from './Pages/StatusContainer';
import { ImagesContainer } from './Pages/ImagesContainer';

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
    case 'Credentials':
      return <CredentialsContainer />;
    case 'Profile':
      return <ProfileContainer />;
    case 'Status':
      return <StatusContainer />;
    case 'Images':
      return <ImagesContainer />;
    default:
      return <Error />;
  }
}
