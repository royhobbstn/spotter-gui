//

import { Icon, Popup, Table } from 'semantic-ui-react';
import React from 'react';

export function ProfilesTable({
  launch_profiles,
  deleteProfile,
  delete_profile_in_progress,
  editProfile
}) {
  const profiles = launch_profiles.profiles || [];

  return (
    <Table celled columns={16}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Profile Name</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>CPU</Table.HeaderCell>
          <Table.HeaderCell>RAM</Table.HeaderCell>
          <Table.HeaderCell>GPU</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
          <Table.HeaderCell>Location</Table.HeaderCell>
          <Table.HeaderCell>Copy Paths</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {profiles.map(p => {
          return (
            <Table.Row key={p.profileLabel}>
              <Table.Cell width={1}>
                <Popup
                  trigger={
                    <Icon
                      onClick={() => {
                        editProfile(p.profileLabel);
                      }}
                      name="edit"
                      color="grey"
                    />
                  }
                  content="Delete Profile"
                />
              </Table.Cell>
              <Table.Cell width={5}>{p.profileLabel}</Table.Cell>
              <Table.Cell width={3}>{p.imageName}</Table.Cell>
              <Table.Cell width={1}>{p.minCpu}</Table.Cell>
              <Table.Cell width={1}>{p.minRam}</Table.Cell>
              <Table.Cell width={1}>{p.minGpu}</Table.Cell>
              <Table.Cell width={1}>{p.type}</Table.Cell>
              <Table.Cell width={1}>{p.location}</Table.Cell>
              <Table.Cell width={1}>{p.copyLocalFiles.join(', ')}</Table.Cell>
              <Table.Cell width={1}>
                <Popup
                  trigger={
                    <Icon
                      circular
                      link
                      onClick={() => {
                        deleteProfile(p.profileLabel);
                      }}
                      name={delete_profile_in_progress === p.profileLabel ? 'spinner' : 'delete'}
                      loading={delete_profile_in_progress === p.profileLabel}
                      color="red"
                    />
                  }
                  content="Delete"
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
