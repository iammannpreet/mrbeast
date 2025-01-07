"use client";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        blue: "bg-blue-500 text-white hover:bg-blue-600",
        gray: "bg-gray-500 text-white hover:bg-gray-600",
        green: "bg-green-500 text-white hover:bg-green-600",
        outline:
          "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
        red: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        sm: "h-8 px-4 text-sm rounded-md",
        md: "h-10 px-6 text-base rounded-md",
        lg: "h-12 px-8 text-lg rounded-lg",
      },
      shape: {
        rounded: "rounded-md",
        pill: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "blue",
      size: "md",
      shape: "rounded",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blue" | "red" | "outline" | "green" | "gray";
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "pill" | "square";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, shape }), className)}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = "Button";
