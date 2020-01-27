import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders grocery list component', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/groceries/i);
  expect(linkElement).toBeInTheDocument();
});
