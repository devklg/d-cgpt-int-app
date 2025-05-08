import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-04-30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <section className="bg-navy text-white py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Countdown to Official Launch</h2>
      <div className="flex justify-center space-x-8 text-gold text-2xl">
        <div><span>{timeLeft.days}</span><div className="text-sm text-white">Days</div></div>
        <div><span>{timeLeft.hours}</span><div className="text-sm text-white">Hours</div></div>
        <div><span>{timeLeft.minutes}</span><div className="text-sm text-white">Minutes</div></div>
        <div><span>{timeLeft.seconds}</span><div className="text-sm text-white">Seconds</div></div>
      </div>
    </section>
  );
};

export default Countdown;
