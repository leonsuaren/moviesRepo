import {shallow} from 'enzyme';
import {Navbar} from './Navbar';


test('render navbar',()=>{
const wrapper = shallow(<Navbar />);
const navbarComponent = wrapper.find("[data-test='navbar-component']");
expect(navbarComponent.length).toBe(1);
});

test('renders favorites link', () => {
    const wrapper = shallow(<Navbar />);
    const favoritesComponent = wrapper.find("[data-test='favorites-component']");
    expect(favoritesComponent.length).toBe(1);
});

test('renders actors link', () => {
    const wrapper = shallow(<Navbar />);
    const actorsLinkComponent= wrapper.find("[data-test='actors-link-component']");
    expect(actorsLinkComponent.length).toBe(1);
});

test('renders now-playing link', () => {
    const wrapper = shallow(<Navbar />);
    const nowPlayingComponent= wrapper.find("[data-test='now-playing-component']");
    expect(nowPlayingComponent.length).toBe(1);
});