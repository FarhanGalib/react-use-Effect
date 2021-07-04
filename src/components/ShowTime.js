import React from "react";
import { useEffect, useState } from "react";

const ShowTime = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  const tick = () => {
    console.log("tick");
    setTime(new Date());
  };

  useEffect(() => {
    console.log("clicked");
    document.title = `${count}`;
    
  }, [count]);

  useEffect(() => {
    console.log("time");
    const interval = setInterval(tick, 1000);

    return () => {
      console.log("componentWillUnmount");
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      {time.toLocaleTimeString()}
      <br />
      <button type="button" onClick={handleClick}>
        click
      </button>
    </div>
  );
};

export default ShowTime;
