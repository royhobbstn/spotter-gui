import React from 'react';
import { Icon, Checkbox, Button, Dropdown } from 'semantic-ui-react';

export const Launch = ({
  available_services,
  launch_selected_services,
  toggleServiceCheckbox,
  saved_profiles,
  selected_launch_profile,
  clickLaunchButton,
  changeSelectedLaunchProfile
}) => {
  const profiles = saved_profiles.profiles || [];

  const options = profiles.map(p => {
    return { text: p.profileLabel, value: p.profileLabel };
  });
  options.unshift({ text: 'None', value: 'None' });

  return (
    <div style={{ margin: 'auto' }}>
      <br />
      <br />
      <p>
        Choose cloud providers:
        <br />
        <sub>
          (Only the cheapest checked option that meets your profile specifications will be used.)
        </sub>
      </p>
      {available_services.map(service => {
        return (
          <div style={{ height: '40px', width: '80px', display: 'inline-block' }} key={service}>
            <div style={{ top: '0px', position: 'relative', display: 'inline-block' }}>
              <Icon name={service} size="large" />
            </div>
            <div style={{ position: 'relative', top: '4px', display: 'inline-block' }}>
              <Checkbox
                name="checkboxRadioGroup"
                value={service}
                checked={launch_selected_services.includes(service)}
                onClick={() => {
                  toggleServiceCheckbox(service);
                }}
              />
            </div>
          </div>
        );
      })}
      <br />
      <br />
      <p>Select a Launch Profile:</p>
      <Dropdown
        defaultValue={selected_launch_profile}
        selection
        options={options}
        onChange={(evt, data) => {
          changeSelectedLaunchProfile(data.value);
        }}
      />
      <br />
      <br />
      <br />
      <Button primary onClick={clickLaunchButton}>
        Launch
      </Button>
    </div>
  );
};
