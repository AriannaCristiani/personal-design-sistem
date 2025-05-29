import "./GreenButton.css";

export type GreenButtonProps = {
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  size?: "small" | "medium" | "large";
};

export function GreenButton({
  label,
  disabled = false,
  onClick,
  ariaLabel,
  size = "medium",
}: GreenButtonProps) {
  return (
    <button
      className={`green-button green-button--${size}`}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel || label}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
}
