import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Typography } from './Typography';
import style from './Typography.module.css';

describe('Typography', () => {
  baselineComponent(Typography);

  it('should have specific className when color not send', () => {
    render(<Typography data-testid="text">Text</Typography>);
    expect(screen.getByTestId('text')).not.toHaveClass(style['Typography--color-primary']);
  });

  it('should have specific className when color="primary"', () => {
    render(
      <Typography data-testid="text" colorType="primary">
        Text
      </Typography>,
    );
    expect(screen.getByTestId('text')).toHaveClass(style['Typography--color-primary']);
  });
});
