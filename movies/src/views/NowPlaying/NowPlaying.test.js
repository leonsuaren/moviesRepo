import { shallow } from 'enzyme';
import { NowPlaying } from './NowPlaying';

test('renders Now Playing component', () => {
    const wrapper = shallow(<NowPlaying />);
    const favoritesComponent = wrapper.find("[data-test='favorites-component']");
    expect(favoritesComponent.length).toBe(1);
});