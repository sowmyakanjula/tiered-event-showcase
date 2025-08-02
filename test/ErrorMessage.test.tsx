import { render, screen, fireEvent } from '@testing-library/react';
import ErrorMessage from '../components/ErrorMessage';

describe('ErrorMessage', () => {
  it('shows message and triggers retry', () => {
    const onRetry = jest.fn();
    render(<ErrorMessage message="Custom error" onRetry={onRetry} />);

    expect(screen.getByText('Custom error')).toBeInTheDocument();
    const button = screen.getByRole('button', { name: /try again/i });
    fireEvent.click(button);
    expect(onRetry).toHaveBeenCalled();
  });

  it('renders without retry button when none provided', () => {
    render(<ErrorMessage />);
    expect(
      screen.getByText('Something went wrong.')
    ).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeNull();
  });
});
