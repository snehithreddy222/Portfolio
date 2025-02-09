"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // Icons
import { motion, AnimatePresence } from "framer-motion"; // Animations

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [animateIcon, setAnimateIcon] = useState(false);

  // Load dark mode preference from local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Show popup & animate icon every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setAnimateIcon(true);

      setTimeout(() => {
        setShowPopup(false);
        setAnimateIcon(false);
      }, 2000); // Hide popup & stop animation after 2 sec
    }, 5000); // Repeat every 5 sec

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="relative">
      {/* Dark Mode Toggle Button with Animation */}
      <motion.button
        onClick={toggleDarkMode}
        animate={animateIcon ? { scale: [1, 1.3, 1] } : { scale: 1 }}
        transition={{ duration: 0.5 }}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? (
          <Sun className="w-8 h-8 text-yellow-500" />
        ) : (
          <Moon className="w-8 h-8 text-gray-900" />
        )}
      </motion.button>

      {/* Popup Message (Appears Every 5 Sec) */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-12 px-4 py-2 bg-gray-900 text-white text-sm rounded-md shadow-lg"
          >
            {darkMode ? "Dark mode is ON 🌙" : "Light mode is ON ☀️"}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
