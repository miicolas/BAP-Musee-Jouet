import { cn } from "../lib/utils";

const styles = {
    primary:
        `w-80 min-h-16 h-auto flex items-center justify-center rounded-full shadow-btnshadow mx-auto transition-colors duration-300`,
    secondary:
        `bg-gray-800 rounded-lg flex items-center justify-center h-12 hover:bg-gray-700 
        transition-colors`,
    destructive:
        `bg-rose-900/25 hover:bg-rose-900 active:bg-rose-900/50 text-rose-600 flex items-center justify-center
         h-12 rounded-md leading-6 font-sm transition-colors duration-200`,
};

export function Button({children, styleType, type, className, onClick, disabled }) {
    return (
        <button
            className={cn(
                styles[styleType],
                className,
                disabled && "opacity-50 pointer-events-none"
            )}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
