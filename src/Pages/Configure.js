import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export const Configure = ({ image_list, saved_profiles }) => {
  const profiles = saved_profiles.profiles || [];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>MinCpu</th>
            <th>MinRAM</th>
            <th>MinGPU</th>
            <th>Type</th>
            <th>Location</th>
            <th>LocalPaths</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(p => {
            return (
              <tr key={p.profileLabel}>
                <td>{p.profileLabel}</td>
                <td>{p.imageName}</td>
                <td>{p.minCpu}</td>
                <td>{p.minRam}</td>
                <td>{p.minGpu}</td>
                <td>{p.type}</td>
                <td>{p.location}</td>
                <td>{p.copyLocalFiles.join(', ')}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/*<button>New Profile</button>*/}
      {/*<Dropdown key={key} defaultValue={selected_profiles[key]} selection options={image_list} />*/}
    </div>
  );
};
