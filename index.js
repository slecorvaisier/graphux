import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware}  from 'redux';
import { Provider }                     from 'react-redux';
import { queryReducer }                 from './app/reducers/reducers';
import thunkMiddleware                  from 'redux-thunk';
import QueryContainer                   from './app/components/Query';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

class Main extends React.Component {
  render () {
    return (
      <div>
        <QueryContainer />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(queryReducer)} >
    <Main />
  </Provider>,
  document.getElementById('example')
);
