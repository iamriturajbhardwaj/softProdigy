import React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './src/utils/reducers';
import Navigation from './src/components/navigation';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default App =()=> {
  
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  
}
