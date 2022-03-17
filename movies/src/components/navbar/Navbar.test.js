import {shallow} from 'enzyme';
import {Navbar} from './Navbar';


test('render navbar',()=>{
const result = shallow(<Navbar />);
const navbarComponent = result.find("[data-test='navbar-component']");
expect(navbarComponent.length).toBe(1);
});

test('renders favorites link', () => {
    const result = shallow(<Navbar />);
    const favoritesComponent = result.find("[data-test='favorites-component']");
    expect(favoritesComponent.length).toBe(1);
});

test('renders actors link', () => {
    const result = shallow(<Navbar />);
    const actorsLinkComponent= result.find("[data-test='actors-link-component']");
    expect(actorsLinkComponent.length).toBe(1);
});

test('renders now-playing link', () => {
    const result = shallow(<Navbar />);
    const nowPlayingComponent= result.find("[data-test='now-playing-component']");
    expect(nowPlayingComponent.length).toBe(1);
});