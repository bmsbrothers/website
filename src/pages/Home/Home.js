import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const eventTime = new Date("2024-06-02T02:00:00+07:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventTime - currentTime;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const handleOrderButtonClick = () => {
    window.open("https://loket.com", "_blank");
  };

  return (
    <div className="home">
      <div className="hero-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/hero.png`}
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-content">
          <button className="order-button" onClick={handleOrderButtonClick}>
            Order Ticket
          </button>
        </div>
      </div>
      <div className="welcome-message">
        <p>
          Selamat datang di BMS E - Tickets Nonton Bareng Final Liga Champions
          2024.
        </p>
        <p className="paragrafstyle">Segera Dapatkan Tiketnya :</p>
        <ul>
          <li>
            <button className="order-button" onClick={handleOrderButtonClick}>
              Order Ticket
            </button>
          </li>

          <li>
            <p> Official PRMI Jakarta (Khusus Member PRMI Seluruh Indnesia)</p>
          </li>
          <li>
            <p> On The Spot Ticket (Sebelum Open Gate)</p>
          </li>
        </ul>
        <div className="logo-container-countdown">
          <div className="countdown-timer">
            <p>
              {timeLeft.days} Hari : {timeLeft.hours} Jam : {timeLeft.minutes}{" "}
              Menit : {timeLeft.seconds} Detik
            </p>
            <p>Nobar Final Liga Champions Lapangan Aquatic, Senayan, GBK</p>
          </div>
        </div>
      </div>
      <h2 className="guest-star-heading">Special Performance</h2>
      <div className="guest-star">
        <div className="guest-star-container full-width">
          <img
            src={`${process.env.PUBLIC_URL}/images/pmr_band.jpg`}
            alt="Guest Star"
            className="guest-star-image"
          />
          <div className="guest-star-overlay"></div>
          <div className="guest-star-text">
            <p>OM PMR Band</p>
          </div>
        </div>
      </div>
      <div className="guest-star">
        <div className="guest-star-container full-width">
          <img
            src={`${process.env.PUBLIC_URL}/images/guest_star.jpg`}
            alt="Guest Star"
            className="guest-star-image"
          />
          <div className="guest-star-overlay"></div>
          <div className="guest-star-text">
            <p>The Beatles Indonesia</p>
          </div>
        </div>
      </div>
      <h2 className="guest-star-heading-media">Media Partner</h2>
      <div className="logo-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/vidio.png`}
          alt="Logo 1"
          className="logo-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/sctv.png`}
          alt="Logo 2"
          className="logo-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/prmi_indonesia.png`}
          alt="Logo 3"
          className="logo-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/prmi_jakarta.png`}
          alt="Logo 4"
          className="logo-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/images/bms.png`}
          alt="Logo 5"
          className="logo-image"
        />
      </div>
    </div>
  );
}

export default Home;
