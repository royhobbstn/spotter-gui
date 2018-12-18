//
import { Button, Icon, Popup, Table } from 'semantic-ui-react';

import React from 'react';
import { AddCredentialsFormContainer } from '../Components/AddCredentialsFormContainer';

export const Credentials = ({
  credentials,
  show_add_credentials_dialog,
  showAddCredentialsForm,
  editCredentials
}) => {
  return (
    <React.Fragment>
      <br />
      <Table celled columns={16}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Profile Name</Table.HeaderCell>
            <Table.HeaderCell>Service</Table.HeaderCell>
            <Table.HeaderCell>Service Default</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {credentials.map(c => {
            console.log(c);
            return (
              <Table.Row key={c.credentialLabel}>
                <Table.Cell width={1}>
                  <Popup
                    trigger={
                      <Icon
                        onClick={() => {
                          editCredentials(c);
                        }}
                        name="edit"
                        color="grey"
                        circular
                        link
                      />
                    }
                    content="Edit Profile"
                  />
                </Table.Cell>
                <Table.Cell width={7}>{c.credentialLabel}</Table.Cell>
                <Table.Cell width={3}>{c.service}</Table.Cell>
                <Table.Cell width={1}>{c.isDefault ? <Icon name="check" /> : <span />}</Table.Cell>
                <Table.Cell width={3}>Details</Table.Cell>
                <Table.Cell width={1}>
                  <Popup
                    trigger={
                      <Icon
                        onClick={() => {
                          // editProfile(p.profileLabel);
                        }}
                        name="delete"
                        color="red"
                        circular
                        link
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
      {show_add_credentials_dialog ? (
        <AddCredentialsFormContainer />
      ) : (
        <Popup
          trigger={
            <Button
              circular
              icon="plus"
              color="green"
              inverted={true}
              onClick={() => {
                showAddCredentialsForm();
              }}
            />
          }
          content="Add Credentials"
        />
      )}
    </React.Fragment>
  );
};
