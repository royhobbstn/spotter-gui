import { Dropdown } from 'semantic-ui-react';
import React from 'react';

export function LaunchButton({ clickLaunchButton, launch_profiles }) {
  return (
    <Dropdown
      text="Launch New Instance"
      labeled
      button
      style={{ backgroundColor: '#2185d0', color: 'white', textShadow: 'none' }}
      className="icon"
      options={launch_profiles}
      onChange={(evt, data) => {
        clickLaunchButton(data.value);
      }}
    />
  );
}
