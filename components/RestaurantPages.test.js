import 'react-native';
import React from 'react';
import RestaurantPage1 from './RestaurantPage1';
import RestaurantPage2 from './RestaurantPage2';
import RestaurantPage3 from './RestaurantPage3';
import RestaurantPage4 from './RestaurantPage4';

import renderer from 'react-test-renderer';

beforeEach(() => {
    Platform = {}
    Platform.OS = jest.fn().mockImplementationOnce(() => 'android');
});

describe('first Restaurant page', () => {
    it('renders correctly', () => {
        renderer.create(<RestaurantPage1 />);
    });
});

describe('second Restaurant page', () => {
    it('renders correctly', () => {
        renderer.create(<RestaurantPage2 />);
    });
});

describe('third Restaurant page', () => {
    it('renders correctly', () => {
        renderer.create(<RestaurantPage3 />);
    });
});

describe('fourth Restaurant page', () => {
    it('renders correctly', () => {
        renderer.create(<RestaurantPage4 />);
    });
});