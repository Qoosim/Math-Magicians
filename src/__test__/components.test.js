import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quotes from '../components/Quote';

describe('Tests for components', () => {
  test('renders Home snapshot', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  test('Calculator snapshot', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  test('Quotes snapshot', () => {
    const tree = render(<Quotes />);
    expect(tree).toMatchSnapshot();
  });
});
