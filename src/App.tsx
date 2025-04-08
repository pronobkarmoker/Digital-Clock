import React, { useState, useEffect } from 'react';
import { Moon, Sun, Clock } from 'lucide-react';

function App() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    if (is24Hour) {
      return time.toLocaleTimeString('en-US', { hour12: false });
    }
    return time.toLocaleTimeString('en-US', { hour12: true });
  };

  const formatDate = () => {
    return time.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      <div className={`p-8 rounded-2xl shadow-2xl backdrop-blur-sm ${
        isDarkMode ? 'bg-gray-800/50 text-white' : 'bg-white/50 text-gray-800'
      }`}>
        <div className="flex justify-between items-center mb-6">
          <Clock className={`w-8 h-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          <div className="flex gap-4">
            <button
              onClick={() => setIs24Hour(!is24Hour)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {is24Hour ? '12H' : '24H'}
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="font-mono text-6xl font-bold tracking-wider mb-4">
            {formatTime()}
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {formatDate()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;