import React, { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const mechineReadable = time.toISOString();
  const humanReadalbe = time.toLocaleTimeString();

  return (
    <footer>
      <time dateTime={mechineReadable}>{humanReadalbe}</time>
    </footer>
  );
};

export default Footer;
