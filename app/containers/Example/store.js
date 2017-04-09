
import { observable, action } from 'mobx';
import remotedev from 'mobx-remotedev/lib/dev';

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

export default remotedev(store, {
  onlyActions: true,
  name: "ExampleStore",
  global: true
})
