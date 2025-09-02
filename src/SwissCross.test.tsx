import React from 'react';
import { render } from '@testing-library/react';
import { SwissCross } from './SwissCross';

describe('SwissCross', () => {
  it('renders without crashing', () => {
    const { container } = render(<SwissCross />);
    const crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<SwissCross className="test-class" />);
    const crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toHaveClass('test-class');
  });

  it('sets custom size as number', () => {
    const { container } = render(<SwissCross size={50} />);
    const crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toHaveStyle('width: 50px; height: 50px');
  });

  it('sets custom size as string', () => {
    const { container } = render(<SwissCross size="3rem" />);
    const crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toHaveStyle('width: 3rem; height: 3rem');
  });

  it('applies custom background color', () => {
    const { container } = render(<SwissCross backgroundColor="#CC0000" />);
    const crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toHaveStyle('background-color: rgb(204, 0, 0)');
  });

  it('applies border radius styles', () => {
    const { container, rerender } = render(<SwissCross borderRadius="none" />);
    let crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toHaveStyle('border-radius: 0');

    rerender(<SwissCross borderRadius="slight" />);
    crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toHaveStyle('border-radius: 2px');

    rerender(<SwissCross borderRadius="round" />);
    crossElement = container.firstChild as HTMLElement;
    expect(crossElement).toHaveStyle('border-radius: 50%');
  });

  it('has correct cross structure', () => {
    const { container } = render(<SwissCross />);
    const crossElement = container.firstChild as HTMLElement;
    expect(crossElement.children).toHaveLength(2);
  });
});