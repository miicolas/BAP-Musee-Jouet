export default function Layout({ children, className, style }) {
    return (
      <div
        className={`min-h-screen mx-auto overflow-hidden sm:overflow-visible bg-background-color z-0 ${className}`}
        style={style}
      >
        {children}
      </div>
    );
  }