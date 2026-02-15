export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-mafad-navy text-white hover:bg-mafad-navy/90",
    secondary: "bg-mafad-cyan text-mafad-navy hover:bg-mafad-cyan/90",
    outline:
      "border-2 border-current text-current hover:bg-white hover:text-mafad-navy",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
