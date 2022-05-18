import { shallow } from 'enzyme';
import { Login } from './Login'

test("Render without error", () => {
  const wrapper = shallow(<Login />);
  const loginComponent = wrapper.find("[data-test='login-component']");
  expect(loginComponent.length).toBe(1);
});