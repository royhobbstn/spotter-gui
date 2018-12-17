import React from 'react';
import { Popup, Button } from 'semantic-ui-react';

import { ProfilesTableContainer } from '../Components/ProfilesTableContainer';
import { AddProfileFormContainer } from '../Components/AddProfileFormContainer';

export const Profile = ({ show_add_profile_dialog, showAddProfileDialog }) => {
  return (
    <div>
      <br />
      <ProfilesTableContainer />
      {show_add_profile_dialog ? (
        <AddProfileFormContainer />
      ) : (
        <Popup
          trigger={
            <Button
              circular
              icon="plus"
              color="green"
              inverted={true}
              onClick={() => {
                showAddProfileDialog();
              }}
            />
          }
          content="Add Profile"
        />
      )}
    </div>
  );
};
