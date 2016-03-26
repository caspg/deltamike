import React from 'react';
import { Route } from 'react-router';

import App from '../containers/App';
import UploadPage from '../containers/UploadPage';

const baseurl = '/deltamike/';

export default (
  <Route path={`${baseurl}`} component={App}>
    <Route path="/upload" component={UploadPage} />
  </Route>
);
