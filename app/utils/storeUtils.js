
import remotedev from 'mobx-remotedev/lib/dev';

const isDev = process.env.NODE_ENV !== 'production';

export function exportStore(store, storeName, onlyActions = true, globalStore = false) {
  if (isDev) {
    return remotedev(store, {
      onlyActions,
      name: storeName,
      global: globalStore
    })
  } else {
    return store
  }
}
