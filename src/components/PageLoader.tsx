import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageLoader = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => {
      clearTimeout(timer);
      setIsLoading(false);
    };
  }, [location]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/60 backdrop-blur-sm">
      <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
};

export default PageLoader;
