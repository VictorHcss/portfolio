import Link from "next/link";

type Variant = "primary" | "ghost";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  download?: string;
  className?: string;
  "aria-label"?: string;
}

const base =
  "group/btn relative isolate inline-flex min-h-12 items-center justify-center gap-2.5 overflow-hidden rounded-md px-6 text-sm font-medium tracking-tight transition-[transform,background-color,border-color,box-shadow] duration-300 ease-out-expo active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-button hover:bg-primary-strong",
  ghost: "border border-line-strong bg-surface/60 text-text backdrop-blur-sm hover:border-secondary/50 hover:bg-surface-2",
};

/** Link com aparência de botão. */
export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  external,
  download,
  className = "",
  ...rest
}: ButtonLinkProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
    </>
  );

  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...(download && { download })}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
};
