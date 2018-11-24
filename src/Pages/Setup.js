import React from 'react';

export const Setup = ({ setup_page_credentials, setup_page_status }) => {
  if (setup_page_status === 'content' && setup_page_credentials.profile) {
    return <div style={{ padding: '40px' }}>Found profile: {setup_page_credentials.profile}</div>;
  } else if (setup_page_status === 'loading') {
    return <div style={{ padding: '40px' }}>Loading...</div>;
  } else {
    console.log(setup_page_credentials);
    return <div style={{ padding: '40px' }}>There was an error retrieving credentials</div>;
  }
};
