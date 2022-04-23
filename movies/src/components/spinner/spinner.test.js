import { shallow } from 'enzyme';
import { Spinner } from './Spinner';

test('renders without errors', () => {
  const wrapper = shallow(<Spinner />);
  const spinnerComponent = wrapper.find("[data-test='spinner-component']");
  expect(spinnerComponent.length).toBe(1);
});