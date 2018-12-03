//

import { Icon, Popup, Table } from 'semantic-ui-react';
import React from 'react';

export function ProfilesTable({ launch_profiles, deleteProfile, delete_profile_in_progress }) {
  const profiles = launch_profiles.profiles || [];

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>MinCpu</Table.HeaderCell>
          <Table.HeaderCell>MinRAM</Table.HeaderCell>
          <Table.HeaderCell>MinGPU</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>LocalPaths</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {profiles.map(p => {
          return (
            <Table.Row key={p.profileLabel}>
              <Table.Cell>
                <Popup
                  trigger={
                    <Icon
                      onClick={() => {
                        deleteProfile(p.profileLabel);
                      }}
                      name={
                        delete_profile_in_progress === p.profileLabel ? 'spinner' : 'minus circle'
                      }
                      loading={delete_profile_in_progress === p.profileLabel}
                      color="red"
                    />
                  }
                  content="Delete Profile"
                />
              </Table.Cell>
              <Table.Cell>{p.profileLabel}</Table.Cell>
              <Table.Cell>{p.imageName}</Table.Cell>
              <Table.Cell>{p.minCpu}</Table.Cell>
              <Table.Cell>{p.minRam}</Table.Cell>
              <Table.Cell>{p.minGpu}</Table.Cell>
              <Table.Cell>{p.type}</Table.Cell>
              <Table.Cell>{p.location}</Table.Cell>
              <Table.Cell>{p.copyLocalFiles.join(', ')}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
