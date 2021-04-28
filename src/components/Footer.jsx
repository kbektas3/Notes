import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Designed by <a href="https://bektas.me/">Kenan Bektas</a></p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
