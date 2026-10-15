import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';

test('renders the home page title and play link', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );

  expect(screen.getByText(/colour matching game/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /play game/i })).toBeInTheDocument();
});
