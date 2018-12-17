import React from 'react';
import { Button, Divider, Form, Grid } from 'semantic-ui-react';

export const AddCredentialsForm = ({
  addCredentials,
  isCredentialsFormValid,
  cancelCredentialsForm,
  changeAddCredentialsFormLabel,
  add_credentials_form_label,
  add_credentials_form_label_valid,
  supported_providers,
  changeAddCredentialsFormCloudProvider,
  add_credentials_form_selected_provider,
  add_credentials_form_default_checked,
  changeAddCredentialsFormAccessKey,
  add_credentials_form_access_key,
  changeAddCredentialsFormSecretAccessKey,
  add_credentials_form_secret_access_key,
  toggleAddCredentialsFormDefaultProvider,
  isAddCredentialsFormValid
}) => {
  const provider_options = supported_providers.providers.map(p => {
    return {
      key: p.name,
      text: p.name,
      value: p.name
    };
  });
  return (
    <Form name="f2">
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Form.Input
              label="Label"
              onChange={changeAddCredentialsFormLabel}
              value={add_credentials_form_label}
              error={!add_credentials_form_label_valid}
            />
          </Grid.Column>
          <Grid.Column>
            <Form.Select
              label="Service"
              options={provider_options}
              onChange={changeAddCredentialsFormCloudProvider}
              value={add_credentials_form_selected_provider}
            />
          </Grid.Column>
          <Grid.Column>
            <Form.Checkbox
              style={{ marginTop: '32px', marginLeft: '18px', fontWeight: '600' }}
              label="Service Default"
              checked={add_credentials_form_default_checked}
              onChange={toggleAddCredentialsFormDefaultProvider}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {add_credentials_form_selected_provider === 'aws' ? (
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Form.Input
                label="AWS Access Key"
                onChange={changeAddCredentialsFormAccessKey}
                value={add_credentials_form_access_key}
              />
            </Grid.Column>
            <Grid.Column>
              <Form.Input
                label="AWS Secret Access Key"
                onChange={changeAddCredentialsFormSecretAccessKey}
                value={add_credentials_form_secret_access_key}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      ) : (
        <span />
      )}

      {/*TODO specific info for other cloud services*/}

      <Divider />
      <Button type="submit" onClick={addCredentials} disabled={!isAddCredentialsFormValid}>
        Add Credentials
      </Button>
      <Button type="button" onClick={cancelCredentialsForm}>
        Cancel
      </Button>
    </Form>
  );
};
