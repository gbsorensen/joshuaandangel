export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-rose-600 text-white hover:bg-rose-700",
    secondary:
      "border border-rose-600 text-rose-600 hover:bg-rose-50",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}