
import { useStrict } from 'mobx';

import AppStore from 'containers/App/store';
import HomeStore from 'containers/Home/store';
import ExampleStore from 'containers/Example/store';

// Make the Stores become immutable
useStrict(true)

export default {
  AppStore,
  HomeStore,
  ExampleStore
};
