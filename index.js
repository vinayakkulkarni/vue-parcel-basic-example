import vue from 'vue/dist/vue.js';

/* eslint-disable no-new */
let app = new vue({
  el: '#app',
  data: {
    message: 'Hello Parcel with Vue!',
  },
});

if (module.hot) {
  module.hot.accept();
}
