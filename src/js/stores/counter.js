
import { extendObservable, action } from 'mobx';

function counterStoreBuilder() {
  extendObservable(this, {
    counter: 0,
    list: [],

    inc: action((arg) => {
      console.log(arg);
      this.counter++
    }),

    dec: action(() => {
      this.counter--
    }),

    addList: action(() => {
      this.list.push({ text: 'Added List' })
    }),

    removeList: action(() => {
      this.list.splice(this.list.length - 1, 1)
    }),

  })
}

const counterStore = new counterStoreBuilder()

export default counterStore
