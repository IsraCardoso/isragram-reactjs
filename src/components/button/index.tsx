export default function Button({
  type = "button",
  text,
  onClick,
  disabled,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant}`}
    >
      {text}
    </button>
  );
}
