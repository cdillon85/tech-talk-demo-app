'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ToDoListContainer from './ToDoListContainer';
import AddToDoContainer from './AddToDoContainer';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
	  <div> 
	  	  <ToDoListContainer />	
		  <AddToDoContainer />
	  </div>
  </Provider>,
  document.getElementById('app')
);