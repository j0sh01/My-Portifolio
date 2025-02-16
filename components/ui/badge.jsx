import React from 'react'

export function Badge({ children, variant = 'default', ...props }) {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
  }

  return (
    <div className={`${baseStyles} ${variantStyles[variant]}`} {...props}>
      {children}
    </div>
  )
}

