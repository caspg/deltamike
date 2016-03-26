import React from 'react';
import { render } from 'react-dom';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory } from 'history';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = useRouterHistory(createHashHistory)({ queryKey: false });
const syncedHistory = syncHistoryWithStore(history, store);

render(
  <Root store={store} history={syncedHistory} />,
  document.getElementById('editor')
);
