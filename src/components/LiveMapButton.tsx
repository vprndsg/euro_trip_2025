import React from 'react';
export type LiveMapButtonProps = React.ComponentProps<'button'> & {
  className?: string;
};

export default function LiveMapButton({ className = '', ...props }: LiveMapButtonProps) {
  return (
    <button
      {...props}
      className={
        `rounded-sheet ring-1 ring-slate-800/40 px-4 py-2 bg-blue-500 text-white ` +
        className
      }
    />
  );
}
