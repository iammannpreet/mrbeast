import React from "react";

function Footer() {
  return (
    <div className="p-2 items-center justify-center text-center ">
      <footer className="mt-auto text-white">
        <p>
          © {new Date().getFullYear()} MrBeast Games. All rights reserved.
          <br />
          This is a Beast Games fan site and is <b>NOT</b> affiliated with
          MrBeast or Beast Games.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
