import React from 'react'

export function Card({ children, ...props }) {
  return <div className="rounded-lg border bg-card text-card-foreground shadow-sm" {...props}>{children}</div>
}

export function CardHeader({ children, ...props }) {
  return <div className="flex flex-col space-y-1.5 p-6" {...props}>{children}</div>
}

export function CardTitle({ children, ...props }) {
  return <h3 className="text-2xl font-semibold leading-none tracking-tight" {...props}>{children}</h3>
}

export function CardDescription({ children, ...props }) {
  return <p className="text-sm text-muted-foreground" {...props}>{children}</p>
}

export function CardContent({ children, ...props }) {
  return <div className="p-6 pt-0" {...props}>{children}</div>
}

export function CardFooter({ children, ...props }) {
  return <div className="flex items-center p-6 pt-0" {...props}>{children}</div>
}

