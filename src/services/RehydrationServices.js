import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';
import ReduxPersist from '../config/ReduxPersist';

const updateReducers = (store, onComplete) => {
  const { reducerVersion } = ReduxPersist;
  const config = ReduxPersist.storeConfig;

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // Purge store
        persistStore(store, config, onComplete).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, config, onComplete);
      }
    })
    .catch(() => {
      // console.log(err);
      persistStore(store, config, onComplete);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
