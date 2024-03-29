//

import React from 'react';
import { Table, Icon, Button, Popup } from 'semantic-ui-react';

export const Images = ({ image_list }) => {
  console.log({ image_list });
  return (
    <React.Fragment>
      <br />
      <Table celled columns={16}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Label</Table.HeaderCell>
            <Table.HeaderCell>Provider(s) Supported</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.keys(image_list).map(key => {
            return (
              <Table.Row key={key}>
                <Table.Cell width={1}>
                  <Popup
                    trigger={<Icon name="edit" color="grey" circular link />}
                    content="Edit Image"
                  />
                </Table.Cell>
                <Table.Cell width={5}>{key}</Table.Cell>
                <Table.Cell width={9}>
                  {image_list[key].map(i => {
                    switch (i.provider) {
                      case 'aws':
                        return <Icon key={i.provider} name="aws" />;
                      case 'gcp':
                        return <Icon key={i.provider} name="google" />;
                      case 'azure':
                        return <Icon key={i.provider} name="microsoft" />;
                      default:
                        return 'oth';
                    }
                  })}
                </Table.Cell>
                <Table.Cell width={1}>
                  <Popup
                    trigger={<Icon name="delete" color="red" circular link />}
                    content="Delete Image"
                  />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Popup
        trigger={<Button circular icon="plus" color="green" inverted={true} />}
        content="Add New Image"
      />
    </React.Fragment>
  );
};
