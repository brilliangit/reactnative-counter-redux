import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { Counter, ShowCounter } from './src/components';

import { store, persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ShowCounter />
        <Counter />
      </PersistGate>
    </Provider>
  );
};

export default App;