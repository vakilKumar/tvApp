
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { Router } from './src/navigation';
import CustomErrorBoundary from './src/ErrorBoundary';
import { TabBarNavigation } from './src/navigation/tab-bar-navigation';

const App = () => {

  return (
    <CustomErrorBoundary>
      <Provider store={store}>
        {/* <Router /> */}
        <TabBarNavigation />
      </Provider>
    </CustomErrorBoundary>
  );
};

export default App;