import { render, screen } from '@testing-library/react';
import GamePage from '../pages/GamePage';

test('Renders the game page and heading', () => {
  render(<GamePage />);

  expect(screen.getByText(/level 1/i)).toBeInTheDocument();
});
