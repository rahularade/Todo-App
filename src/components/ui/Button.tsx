import { cva, type VariantProps } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"

const button = cva("text-base border-0 rounded-sm cursor-pointer py-1", {
  variants: {
    variant: {
      primary: "bg-primary text-heading",
      secondary: "bg-secondary text-background",
      danger: "bg-danger text-heading"
    },
    size: {
      sm: "px-2.5",
      md: "px-4",
      lg: "px-5 font-medium"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {}

function Button({variant, size, onClick, children}: ButtonProps) {
  return (
    <button className={button({variant, size})} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button