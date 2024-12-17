import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// After 2 minutes of inactivity, redirect the user to the home page
export default function useInactivityRedirect(timeoutDuration = 120000) {
  const [isInactive, setIsInactive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    // Reset the inactivity timeout
    const resetInactivityTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsInactive(true), timeoutDuration);
    };

    // Handle user activity
    const handleUserActivity = () => resetInactivityTimeout();

    // Add event listeners for user activity
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("click", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);

    // Start the inactivity timeout
    resetInactivityTimeout();

    // Clean up
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
