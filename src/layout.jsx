import LOGO from './assets/images/logo.png';

export default function Layout({ children, className, style }) {
  return (
    <div>
      <div
        className={`min-h-screen mx-auto overflow-hidden sm:overflow-visible bg-background-color z-0 ${className}`}
        style={style}
      >
        {children}
      </div>
      <div className="absolute bottom-0 left-0 z-10 p-4">
        <img src={LOGO} alt="logo" className="w-20 h-20" />
          
        
          
      </div>
    </div>
  );
}
