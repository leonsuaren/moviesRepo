import { shallow } from 'enzyme';
import { Favorites } from './Favorites';

test('renders favorites heading', () => {
    const wrapper = shallow(<Favorites />);
    const favoritesComponent = wrapper.find("[data-test='favorites-component']");
    expect(favoritesComponent.length).toBe(1);
});