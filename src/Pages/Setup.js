//

import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';

export const Setup = ({ selected_profiles, all_profiles, setup_page_status }) => {
  return (
    <div>
      {Object.keys(all_profiles).map(key => {
        const options = all_profiles[key].map((d, i) => {
          return { key: i + 1, text: d, value: d };
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
