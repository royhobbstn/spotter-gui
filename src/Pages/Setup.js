//

import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

export const Setup = ({ credentials }) => {
  console.log({ credentials });
  return (
    <div>
      <h1>Credentials</h1>
      {Object.keys(credentials).map(key => {
        const options = credentials[key].map((d, i) => {
          return { key: i + 1, text: d.profileName, value: d.profileName };
        });
        options.unshift({ key: 0, text: 'None', value: 'None' });

        return (
          <React.Fragment key={key}>
            <span style={{ width: '50px', display: 'inline-block' }}>
              <Icon name={key} size="large" />
            </span>
            <Dropdown key={key} selection options={options} />
            <br />
            <br />
          </React.Fragment>
        );
      })}
      <h1>Images</h1>
    </div>
  );
};
