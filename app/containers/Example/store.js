
import { observable, action } from 'mobx';
import { exportStore } from 'utils/storeUtils.js'

class ExampleStore {
  @observable counter = 0
  @observable list = []

  @action inc(arg) {
    console.log(arg);
    this.counter++
  }

  @action dec() {
    this.counter--
  }

  @action addList() {
    this.list.push({ text: 'Added List' })
  }

  @action removeList() {
    this.list.splice(this.list.length - 1, 1)
  }
}

const store = new ExampleStore()
export default exportStore(store, "ExampleStore")
