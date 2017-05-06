
import { observable, action } from 'mobx';
import { exportStore } from 'utils/storeUtils.js'

class AppStore {
  @observable someState = null

  @action someAction(arg) {
    this.someState = arg
  }
}

const store = new AppStore()
export default exportStore(store, "AppStore", true, true)
