"use client"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"
import type * as React from "react"

import { Link } from "@/lib/navigation"
import { cn } from "@/lib/styles"

// ---------------------------------------------------------------------------
// MenuLink variants
// ---------------------------------------------------------------------------

const menuLinkVariants = cva(
  "group/menu-link relative flex cursor-pointer items-center gap-2 rounded-md text-sm outline-none transition-colors select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
        active:
          "bg-accent text-accent-foreground font-medium",
        destructive:
          "text-destructive hover:bg-destructive/10 focus-visible:bg-destructive/10",
        muted:
          "text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent",
      },
      size: {
        default: "px-3 py-2",
        sm: "px-2 py-1.5 text-xs",
        lg: "px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function MenuLinkIcon({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <span
      data-slot="menu-link-icon"
      className={cn(
        "text-muted-foreground flex shrink-0 items-center [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=active]/menu-link:text-accent-foreground",
        "group-data-[variant=destructive]/menu-link:text-destructive",
        className
      )}
    >
      {children}
    </span>
  )
}

function MenuLinkContent({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <span
      data-slot="menu-link-content"
      className={cn("flex min-w-0 flex-1 flex-col", className)}
    >
      {children}
    </span>
  )
}

function MenuLinkLabel({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <span
      data-slot="menu-link-label"
      className={cn("truncate", className)}
    >
      {children}
    </span>
  )
}

function MenuLinkDescription({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <span
      data-slot="menu-link-description"
      className={cn(
        "text-muted-foreground truncate text-xs font-normal",
        className
      )}
    >
      {children}
    </span>
  )
}

function MenuLinkBadge({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <span
      data-slot="menu-link-badge"
      className={cn(
        "bg-primary/10 text-primary ml-auto inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  )
}

function MenuLinkShortcut({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <kbd
      data-slot="menu-link-shortcut"
      className={cn(
        "text-muted-foreground ml-auto hidden shrink-0 text-xs tracking-widest lg:inline-flex",
        className
      )}
    >
      {children}
    </kbd>
  )
}

function MenuLinkTrailing({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <span
      data-slot="menu-link-trailing"
      className={cn("ml-auto flex shrink-0 items-center", className)}
    >
      {children}
    </span>
  )
}

function MenuLinkSeparator({ className }: { readonly className?: string }) {
  return (
    <div
      data-slot="menu-link-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      role="separator"
    />
  )
}

function MenuLinkGroupLabel({
  className,
  children,
}: {
  readonly className?: string
  readonly children: React.ReactNode
}) {
  return (
    <div
      data-slot="menu-link-group-label"
      className={cn(
        "text-muted-foreground px-3 py-2 text-xs font-semibold uppercase tracking-wider",
        className
      )}
    >
      {children}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main MenuLink component
// ---------------------------------------------------------------------------

export interface MenuLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children">,
    VariantProps<typeof menuLinkVariants> {
  readonly href?: string
  readonly external?: boolean
  readonly disabled?: boolean
  readonly hasSubmenu?: boolean
  readonly asChild?: boolean
  readonly children: React.ReactNode
}

function MenuLink({
  href,
  external = false,
  disabled = false,
  hasSubmenu = false,
  asChild = false,
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: MenuLinkProps) {
  const sharedProps = {
    "data-slot": "menu-link",
    "data-variant": variant,
    "data-disabled": disabled || undefined,
    className: cn(menuLinkVariants({ variant, size, className })),
    "aria-disabled": disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    ...props,
  } as const

  const inner = (
    <>
      {children}
      {hasSubmenu && (
        <ChevronRightIcon className="text-muted-foreground ml-auto size-4 shrink-0" />
      )}
      {external && !hasSubmenu && (
        <ExternalLinkIcon className="text-muted-foreground ml-auto size-3.5 shrink-0 opacity-60" />
      )}
    </>
  )

  if (asChild) {
    return <Slot {...sharedProps}>{children}</Slot>
  }

  if (!href || href === "#") {
    return (
      <button type="button" {...(sharedProps as React.ComponentProps<"button">)}>
        {inner}
      </button>
    )
  }

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...sharedProps}
      >
        {inner}
      </a>
    )
  }

  return (
    <Link href={href} {...sharedProps}>
      {inner}
    </Link>
  )
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  MenuLink,
  MenuLinkIcon,
  MenuLinkContent,
  MenuLinkLabel,
  MenuLinkDescription,
  MenuLinkBadge,
  MenuLinkShortcut,
  MenuLinkTrailing,
  MenuLinkSeparator,
  MenuLinkGroupLabel,
  menuLinkVariants,
}
