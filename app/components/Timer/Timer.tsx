"use client";

import { useEffect, useRef, useState } from "react";

const formatTime = (time: number) => {
  let min = Math.floor(time / 60);
  let secs = Math.floor(time - min * 60);

  if (min <= 10) min = Number("0" + min);
  if (secs <= 10) secs = Number("0" + secs);

  return min + ":" + secs;
};

type timerProps = {
  seconds: number;
};

const Timer = ({ seconds }: timerProps) => {
  const [countdown, setCountdown] = useState(seconds);
  let timerId = useRef(0);

  useEffect(() => {
    timerId.current = window.setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      alert("end");
    }
  }, [countdown]);

  return <div>{formatTime(countdown)}</div>;
};

export default Timer;
