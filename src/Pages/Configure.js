import React from 'react';
import { Icon, Button, Popup } from 'semantic-ui-react';

export const Configure = ({
  image_list,
  saved_profiles,
  deleteProfile,
  addProfile,
  cancelProfile,
  saveProfile,
  delete_profile_in_progress
}) => {
  const profiles = saved_profiles.profiles || [];
  return (
    <div>
      {delete_profile_in_progress ? (
        <div style={{ color: 'red' }}>DELETING PROFILE INFORMATION</div>
      ) : (
        <span />
      )}
      <table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Image</th>
            <th>MinCpu</th>
            <th>MinRAM</th>
            <th>MinGPU</th>
            <th>Type</th>
            <th>Location</th>
            <th>LocalPaths</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(p => {
            return (
              <tr key={p.profileLabel}>
                <td>
                  <Popup
                    trigger={
                      <Button
                        icon
                        onClick={() => {
                          deleteProfile(p.profileLabel);
                        }}
                      >
                        <Icon name="minus circle" color="red" size="large" />
                      </Button>
                    }
                    content="Delete Profile"
                  />
                </td>
                <td>{p.profileLabel}</td>
                <td>{p.imageName}</td>
                <td>{p.minCpu}</td>
                <td>{p.minRam}</td>
                <td>{p.minGpu}</td>
                <td>{p.type}</td>
                <td>{p.location}</td>
                <td>{p.copyLocalFiles.join(', ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <Button icon>
        <Icon name="plus circle" color="green" size="large" />
      </Button>
    </div>
  );
};
