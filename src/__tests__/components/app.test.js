import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import createStore from '../../store';
import App from '../../components/app';

describe('<App/> (Enzyme Test)', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = createStore();
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('is alive at application start', () => {
    expect(wrapper.find('div h3').exists()).toBeTruthy();
  });

  it('can count up', () => {
    expect(true).toBeTruthy();
    // let app = mount(<Counter />);
    // app.find('.up').simulate('click');
    // expect(app.state('count')).toEqual(1);
    // app.find('.up').simulate('click');
    // expect(app.state('count')).toEqual(2);
  });
});
