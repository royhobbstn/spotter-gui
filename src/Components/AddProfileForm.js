import React from 'react';
import { Button, Divider, Form, Grid } from 'semantic-ui-react';

export const AddProfileForm = ({
  image_list,
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
  f1_profile_location,
  f1_profile_name_valid,
  isF1FormValid
}) => {
  const image_options = Object.keys(image_list).map(key => {
    return { key, text: key, value: key };
  });

  const type_options = [
    { key: 'git', text: 'Git Repo', value: 'git' },
    { key: 'docker', text: 'Docker Container', value: 'docker' },
    { key: 'script', text: 'Script File', value: 'script' }
  ];

  return (
    <Form name="f1">
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Form.Input
              label="Profile Name"
              onChange={changeF1ProfileName}
              value={f1_profile_name}
              error={!f1_profile_name_valid}
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
      <Button type="submit" onClick={addF1FormProfile} disabled={!isF1FormValid}>
        Add Profile
      </Button>
      <Button type="button" onClick={cancelF1Form}>
        Cancel
      </Button>
    </Form>
  );
};
