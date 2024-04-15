
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { Router } from './src/navigation';
import CustomErrorBoundary from './src/ErrorBoundary';

const App = () => {

  return (
    <CustomErrorBoundary>
      <Provider store={store}>
        <Router />
      </Provider>
    </CustomErrorBoundary>
  );
};

export default App;