import React from 'react';
import { Icon, Button, Popup, Divider, Form, Grid } from 'semantic-ui-react';

export const Configure = ({
  image_list,
  saved_profiles,
  deleteProfile,
  addProfile,
  cancelProfile,
  saveProfile,
  delete_profile_in_progress,
  show_add_profile_dialog,
  showAddProfileDialog,
  addF1FormProfile,
  cancelF1Form,
  changeF1ProfileName,
  changeF1AMIImage,
  changeF1MinCpu,
  changeF1MinRAM,
  changeF1MinGPU,
  changeF1ProfileType,
  changeF1ProfileLocation,
  f1_profile_name,
  f1_ami_image,
  f1_min_cpu,
  f1_min_ram,
  f1_min_gpu,
  f1_profile_type,
  f1_profile_location
}) => {
  const profiles = saved_profiles.profiles || [];

  const image_options = Object.keys(image_list).map(key => {
    return { key, text: key, value: key };
  });

  const type_options = [
    { key: 'git', text: 'Git Repo', value: 'git' },
    { key: 'docker', text: 'Docker Container', value: 'docker' },
    { key: 'script', text: 'Script File', value: 'script' }
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th />
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
                <td>
                  <Popup
                    trigger={
                      <Button
                        icon
                        onClick={() => {
                          deleteProfile(p.profileLabel);
                        }}
                      >
                        <Icon
                          name={delete_profile_in_progress ? 'spinner' : 'minus circle'}
                          loading={delete_profile_in_progress}
                          color="red"
                          size="large"
                        />
                      </Button>
                    }
                    content="Delete Profile"
                  />
                </td>
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
      <br />
      <br />
      <Divider />
      {show_add_profile_dialog ? (
        <Form name="f1">
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Form.Input
                  label="Profile Name"
                  onChange={changeF1ProfileName}
                  value={f1_profile_name}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Select
                  label="AMI Image"
                  options={image_options}
                  onChange={changeF1AMIImage}
                  value={f1_ami_image}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Form.Input label="MinCPU" onChange={changeF1MinCpu} value={f1_min_cpu} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input label="MinRAM" onChange={changeF1MinRAM} value={f1_min_ram} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input label="MinGPU" onChange={changeF1MinGPU} value={f1_min_gpu} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Form.Select
                  label="Type"
                  options={type_options}
                  onChange={changeF1ProfileType}
                  value={f1_profile_type}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  label="Location"
                  onChange={changeF1ProfileLocation}
                  value={f1_profile_location}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Button type="submit" onClick={addF1FormProfile}>
            Add Profile
          </Button>
          <Button onClick={cancelF1Form}>Cancel</Button>
        </Form>
      ) : (
        <Popup
          trigger={
            <Button
              icon
              onClick={() => {
                showAddProfileDialog();
              }}
            >
              <Icon name="plus circle" color="green" size="large" />
            </Button>
          }
          content="Add Profile"
        />
      )}
    </div>
  );
};
