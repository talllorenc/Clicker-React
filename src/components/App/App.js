import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);
  
  const handleClick = () => {
    if (timer === null) {
      setTimer(8);
    }

    if (timer > 0) {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    let interval;

    if (timer !== null && timer > 0) {
      interval = setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="wrapper">
      <h1 className="clicker_label">Clicker</h1>
      <div className="clicker_field" onClick={handleClick}>
        <span className="clicker_count">
          {timer !== null ? count : (<>Click<br/>to<br/>Start</>)}
        </span>
      </div>
      <div className="clicker_timer">
        <span>Time</span>
        <span className="clicker_timer_time">{timer !== null ? timer : 8} </span>
      </div>
      <button className="clicker_btn_refresh" onClick={handleReset}>
        Refresh
      </button>
    </div>
  );
};

export default App;
