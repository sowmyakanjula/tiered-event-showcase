import { render, screen } from '@testing-library/react';
import Spinner from '../components/Spinner';

describe('Spinner', () => {
  it('renders with status role', () => {
    render(<Spinner />);
    const spinner = screen.getByRole('status', { name: /loading/i });
    expect(spinner).toBeInTheDocument();
  });
});
