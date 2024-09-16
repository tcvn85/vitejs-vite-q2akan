import clsx from 'clsx';
import * as React from 'react';
import { styles } from './button.css';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, ...restProps }, forwardedRef) => {
  return (
    <button
      className={clsx(styles, className)}
      ref={forwardedRef}
      {...restProps}
    />
  );
});

Button.displayName = 'Button';
