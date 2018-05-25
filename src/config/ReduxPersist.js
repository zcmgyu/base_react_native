import { AsyncStorage } from 'react-native';
import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform';

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '2',
  storeConfig: {
    storage: AsyncStorage,
    whitelist: ['user'],
    transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
