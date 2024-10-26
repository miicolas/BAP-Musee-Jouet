import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useInactivityRedirect(timeoutDuration = 120000) {
  const [isInactive, setIsInactive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    const resetInactivityTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsInactive(true), timeoutDuration);
    };

    const handleUserActivity = () => resetInactivityTimeout();

    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("click", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);

    resetInactivityTimeout();

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
    };
  }, [timeoutDuration]);

  useEffect(() => {
    if (isInactive) {
      navigate("/");
    }
  }, [isInactive, navigate]);

  return isInactive;
}