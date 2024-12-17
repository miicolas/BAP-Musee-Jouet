import { cn } from "../lib/utils";

const styles = {
  primary: `w-fit px-10 py-5 h-auto text-2xl font-medium flex items-center justify-center rounded-full shadow-btnshadow mx-auto transition-colors duration-300`,
};

export function Button({
  children,
  styleType,
  type,
  className,
  onClick,
  disabled,
}) {
  return (
    <button
      className={cn(
        styles[styleType],
        className,
        disabled && "opacity-50 pointer-events-none",
      )}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
