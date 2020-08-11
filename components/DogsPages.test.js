import 'react-native';
import React from 'react';
import DogsPage1 from './DogsPage1';
import DogsPage2 from './DogsPage2';
import DogsPage3 from './DogsPage3';
import DogsPage4 from './DogsPage4';
import DogsPage5 from './DogsPage5';

import renderer from 'react-test-renderer';


beforeEach(() => {
    Platform = {};
    Platform.OS = jest.fn().mockImplementationOnce(() => 'android');
});

describe('first Dogs page', () => {
    it('renders correctly', () => {
        renderer.create(<DogsPage1 />);
    });
});

describe('second Dogs page', () => {
    it('renders correctly', () => {
        renderer.create(<DogsPage2 />);
    });
});

describe('third Dogs page', () => {
    it('renders correctly', () => {
        renderer.create(<DogsPage3 />);
    });
});

describe('fourth Dogs page', () => {
    it('renders correctly', () => {
        renderer.create(<DogsPage4 />);
    });
});

describe('fifth Dogs page', () => {
    it('renders correctly', () => {
        renderer.create(<DogsPage5 />);
    });
});