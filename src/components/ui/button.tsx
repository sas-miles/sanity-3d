import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/80 transition-background transition-colors hover:shadow-md transition-shadow ease-in-out duration-250',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 ',
        outline: 'border border-input shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-black/90 text-white shadow-sm hover:bg-primary transition-background ease-in-out duration-150',
        icon: 'bg-primary hover:bg-transparent rounded-[10px] shadow-[0px_2px_2px_0px_hsl(var(--primary))]',
        ghost: 'text-primary hover:text-green-800',
        link: 'text-primary underline-offset-4 hover:underline',
        button21: 'button-21',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-sm px-3 text-xs',
        lg: 'h-10 rounded-md px-8 text-lg py-2 [&_svg]:w-5 [&_svg]:h-5',
        icon: 'h-9 w-9',
        xl: 'h-14 px-8 text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
