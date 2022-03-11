import {shallow} from 'enzyme';
import {Navbar} from './Navbar';

test('render navbar',()=>{
const result = shallow(<Navbar />);
const navbarComponent = result.find("[data-test='navbar-component']");
expect(navbarComponent.length).toBe(1);
});