import React from 'react';

const table_styles = {
  textAlign: 'left'
};
const header_cell_style = {
  padding: '5px'
};
const cell_style = {
  padding: '5px'
};

export const Status = ({ instance_data }) => {
  console.log(instance_data);
  if (
    !(
      instance_data.Reservations &&
      instance_data.Reservations[0] &&
      instance_data.Reservations[0].Instances &&
      instance_data.Reservations[0].Instances.length
    )
  ) {
    return <div>No Active Instances</div>;
  }

  return (
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
            <tr key={instance.ImageId}>
              <td style={cell_style}>{instance.ImageId}</td>
              <td style={cell_style}>{instance.InstanceType}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
