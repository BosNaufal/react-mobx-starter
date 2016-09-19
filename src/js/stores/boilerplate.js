import { extendObservable, action } from 'mobx';

function someStoreBuilder() {
  extendObservable(this, {
    someState: "",

    someAction: action((arg) => {
      // Do Something Here
    }),
  })
}

const someStore = new someStoreBuilder()

export default someStore
