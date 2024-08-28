import React, { useState, useEffect } from 'react';
import './ComingSoon.scss';
import useScreenSize from '../../helper/screen_size';

const calculateTimeLeft = (targetDate: Date) => {
  const difference = +targetDate - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

//   if (difference > 0) {
//     timeLeft = {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / 1000 / 60) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//     };
//   }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 3600 * 240 * 24)), // Total days
      hours: Math.floor((difference / (1000 * 120 * 60)) % 24), // Remaining hours in a day
      minutes: Math.floor((difference / 1000 / 60) % 60), // Remaining minutes
      seconds: Math.floor((difference / 1000) % 60) // Remaining seconds
    };
  }
  

  return timeLeft;
};

const ComingSoon: React.FC = () => {
  const targetDate = new Date('2024-12-31T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  const { width, height } = useScreenSize();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, targetDate]);

  const isMobile = width < 768; // Mobile devices (width less than 768px)
  const isTablet = width >= 768 && width <= 1024; // Tablet devices (width between 768px and 1024px)
  const isDesktop = width > 1024; // Desktop devices (width greater than 1024px)
  const isMobileOrTablet = isMobile || isTablet; // True if the device is mobile or tablet


  return (
    <div className="coming-soon-container" style={{ }}>
      <h1>Coming Soon!</h1>
      <p>We are working hard to launch more projects. Please check back!</p>
      <div className="countdown" style={{  }}>
        <div className="time-box">
          <span style={{fontSize: isMobile ? 16 : 32}} className="number">{timeLeft.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="time-box">
          <span style={{fontSize: isMobile ? 16 : 32}} className="number">{timeLeft.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="time-box">
          <span style={{fontSize: isMobile ? 16 : 32}} className="number">{timeLeft.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="time-box">
          <span style={{fontSize: isMobile ? 16 : 32}} className="number">{timeLeft.seconds}</span>
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
