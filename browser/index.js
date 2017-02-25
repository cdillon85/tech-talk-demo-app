'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDoListContainer from './ToDoListContainer';
import AddToDoContainer from './AddToDoContainer';
import ControlPanelContainer from './ControlPanelContainer';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
	  <div>
		  <ToDoListContainer />
		  <AddToDoContainer />
		  <ControlPanelContainer />
	  </div>
  </Provider>,
  document.getElementById('app')
);