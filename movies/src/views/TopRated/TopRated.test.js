import { shallow } from 'enzyme';
import { TopRated } from './TopRated';

test('renders Now Playing component', () => {
    const wrapper = shallow(<TopRated />);
    const favoritesComponent = wrapper.find("[data-test='top-rated-component']");
    expect(favoritesComponent.length).toBe(1);
});