import React from 'react';
import { Icon, Checkbox, Button } from 'semantic-ui-react';

export const Launch = ({
  available_services,
  launch_selected_services,
  toggleServiceCheckbox,
  saved_profiles
}) => {
  const profiles = saved_profiles.profiles || [];

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
      <p>Select a Launch Profile:</p>

      {profiles.map(p => {
        return (
          <div
            style={{ height: '40px', width: '80px', display: 'inline-block' }}
            key={p.profileLabel}
          />
        );
      })}
      <br />
      <Button primary>Launch</Button>
    </div>
  );
};
