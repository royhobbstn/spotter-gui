import React from 'react';
import { Icon, Popup, Divider } from 'semantic-ui-react';

import { ProfilesTableContainer } from '../Components/ProfilesTableContainer';
import { AddProfileFormContainer } from '../Components/AddProfileFormContainer';

export const Profile = ({ show_add_profile_dialog, showAddProfileDialog }) => {
  return (
    <div>
      <br />
      <ProfilesTableContainer />
      <br />
      <Divider />
      {show_add_profile_dialog ? (
        <AddProfileFormContainer />
      ) : (
        <Popup
          trigger={
            <Icon
              name="plus circle"
              color="green"
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
