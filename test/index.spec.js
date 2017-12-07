import Vue from 'vue';
const ParcelApp = require('../index.js');

function getComponent(Component, propsData) {
  const Ctor = Vue.extend(Component);
  return new Ctor({ propsData }).$mount();
}

const exampleData = {
  msg: 'hello in ze test!',
};

describe('VueParcelApp', function() {
  it('has correct DOM structure', function() {
    const vm = getComponent(ParcelApp, {
      data: exampleData,
    });

    expect(vm.$el.nodeName).toBe('#comment');
    // expect(vm.data.msg).toBe('hello in ze test!');
  });
});
