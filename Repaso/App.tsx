import React from 'react';
import { SafeAreaView } from 'react-native';

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from './src/store/reducers';
import TodosContainer from './src/components/AlbumContainer';

const store = createStore(
  combineReducers(reducers),
  compose(applyMiddleware(thunk)),
);

const App = () => {
  return (
    // High Order Component o HOC
    <Provider store={store}>
      <SafeAreaView>
        <TodosContainer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
