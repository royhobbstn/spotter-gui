//

import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

export const Setup = ({ selected_profiles, credential_profiles, setup_page_status }) => {
  console.log({ selected_profiles });
  console.log({ credential_profiles });
  return (
    <div>
      {Object.keys(credential_profiles).map(key => {
        const options = credential_profiles[key].map((d, i) => {
          return { key: i + 1, text: d.profileName, value: d.profileName };
        });
        options.unshift({ key: 0, text: 'None', value: 'None' });

        return (
          <React.Fragment key={key}>
            <span style={{ width: '50px', display: 'inline-block' }}>
              <Icon name={key} size="large" />
            </span>
            <Dropdown key={key} defaultValue={selected_profiles[key]} selection options={options} />
            <br />
            <br />
          </React.Fragment>
        );
      })}
    </div>
  );
};
