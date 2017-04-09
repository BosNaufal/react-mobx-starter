
import { observable, action } from 'mobx';
import remotedev from 'mobx-remotedev/lib/dev';

class AppStore {
  @observable someState = null

  @action someAction(arg) {
    this.someState = arg
  }
}

const store = new AppStore()

export default remotedev(store, {
  onlyActions: true,
  name: "AppStore",
  global: true
})
