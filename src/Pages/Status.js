import React from 'react';
import { LaunchButton } from '../Components/LaunchButton';

const table_styles = {
  textAlign: 'left'
};
const header_cell_style = {
  padding: '5px'
};
const cell_style = {
  padding: '5px'
};

export const Status = ({ instance_data, launchInstance, launch_profiles }) => {
  const profiles = launch_profiles.profiles || [];

  const options = profiles.map(p => {
    return { text: p.profileLabel, value: p.profileLabel };
  });

  if (
    !(
      instance_data.Reservations &&
      instance_data.Reservations[0] &&
      instance_data.Reservations[0].Instances &&
      instance_data.Reservations[0].Instances.length
    )
  ) {
    return (
      <div>
        <br />
        <LaunchButton clickLaunchButton={launchInstance} launch_profiles={options} />
        <br />
        <br />
        No Active Instances
      </div>
    );
  }

  return (
    <React.Fragment>
      <br />
      <LaunchButton clickLaunchButton={launchInstance} launch_profiles={options} />
      <br />
      <br />
      <table style={table_styles}>
        <thead>
          <tr>
            <th style={header_cell_style}>InstanceId</th>
            <th style={header_cell_style}>InstanceType</th>
          </tr>
        </thead>
        <tbody>
          {instance_data.Reservations[0].Instances.map(instance => {
            return (
              <tr key={instance.InstanceId}>
                <td style={cell_style}>{instance.InstanceId}</td>
                <td style={cell_style}>{instance.InstanceType}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
