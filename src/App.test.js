import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders grocery list component', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/groceries/i);
  expect(headingElement).toBeInTheDocument();
});
