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
  cancelForm
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
        <Form>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Form.Input label="Profile Name" required />
              </Grid.Column>
              <Grid.Column>
                <Form.Select label="AMI Image" options={image_options} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column>
                <Form.Input label="MinCPU" />
              </Grid.Column>
              <Grid.Column>
                <Form.Input label="MinRAM" />
              </Grid.Column>
              <Grid.Column>
                <Form.Input label="MinGPU" />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Form.Select label="Type" options={type_options} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input label="Location" required />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider />
          <Button type="submit">Add Profile</Button>
          <Button type="reset" onClick={cancelForm}>
            Cancel
          </Button>
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
