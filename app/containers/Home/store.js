
import { observable, action } from 'mobx';
import { exportStore } from 'utils/storeUtils.js'

class HomeStore {
  @observable someState = null

  @action someAction(arg) {
    this.someState = arg
  }
}

const store = new HomeStore()
export default exportStore(store, "HomeStore")
