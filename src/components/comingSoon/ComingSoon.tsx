import React, { useState, useEffect } from 'react';
import './ComingSoon.scss';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const ComingSoon: React.FC = () => {
  const targetDate = new Date('2024-12-31T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate]);

  return (
    <div className="coming-soon-container">
      <h1>Coming Soon!</h1>
      <p>We are working hard to launch more projects. Please check back!</p>
      <div className="countdown">
        <div className="time-box">
          <span className="number">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span className="number">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span className="number">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span className="number">{timeLeft.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
      <div className="subscribe">
        <p>Enter your email to get notified:</p>
        <input type="email" placeholder="Your email" />
        <button>Notify Me</button>
      </div>
    </div>
  );
};

export default ComingSoon;
