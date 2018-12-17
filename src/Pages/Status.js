import React from 'react';
import { Button, Popup, Table } from 'semantic-ui-react';

export const Status = ({ instance_data }) => {
  return (
    <React.Fragment>
      {!(
        instance_data.Reservations &&
        instance_data.Reservations[0] &&
        instance_data.Reservations[0].Instances &&
        instance_data.Reservations[0].Instances.length
      ) ? (
        <React.Fragment>
          <br />
          <p>No Active Instances</p>
          <br />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <br />
          <Table celled columns={16}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>InstanceId</Table.HeaderCell>
                <Table.HeaderCell>InstanceType</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {instance_data.Reservations[0].Instances.map(instance => {
                return (
                  <Table.Row key={instance.InstanceId}>
                    <Table.Cell>{instance.InstanceId}</Table.Cell>
                    <Table.Cell>{instance.InstanceType}</Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </React.Fragment>
      )}
      <Popup
        trigger={
          <Button
            circular
            icon="plus"
            color="green"
            inverted={true}
            onClick={() => {
              // showAddProfileDialog();
            }}
          />
        }
        content="Launch New Instance"
      />
    </React.Fragment>
  );
};
