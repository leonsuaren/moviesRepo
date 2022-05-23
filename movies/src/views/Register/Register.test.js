import { shallow } from 'enzyme';
import { Register } from './Register';

test('renders Now Playing component', () => {
    const wrapper = shallow(<Register />);
    const registerComponent = wrapper.find("[data-test='register-component']");
    expect(registerComponent.length).toBe(1);
});