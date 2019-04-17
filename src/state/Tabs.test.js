import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Tabs from './Tabs';
import { shallow } from 'enzyme'

describe(`Tabs Component`, () => {

    const tabsProp = [
        { name: '1st tab',
          content: <p>People</p> },
        { name: '2nd tab',
          content: <p>Order</p> },
        { name: '3rd tab',
          content: <p>Our</p> },
        { name: '4th tab',
          content: <p>Potatoes</p> }
      ];

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the first tab by default', () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    })
})

