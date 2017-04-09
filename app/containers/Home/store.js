
import { observable, action } from 'mobx';
import remotedev from 'mobx-remotedev/lib/dev';

class HomeStore {
  @observable someState = null

  @action someAction(arg) {
    this.someState = arg
  }
}

const store = new HomeStore()

export default remotedev(store, {
  onlyActions: true,
  name: "HomeStore",
  global: true
})
