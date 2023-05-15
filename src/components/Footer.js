function Footer() {
  return (
    <footer>
    <div id="footer">
      <div className="teszt">
        <div className="footers">
          <div className="footerpre">
            <h2>Rólunk</h2>
            <p>
              Cégünk 2009-ben a célból jött létre, hogy bebizonyíthassuk a mai
              világban igenis létjogosultsága van az olyan mosodai
              szolgáltatásnak, ahol a minőségi tevékenység és a rugalmas
              szolgáltatói hozzáállás összekapcsolásával a szállodaiparban /
              vendéglátásban, közületeknél elsőrangú jelentőséggel bíró textilek
              higiéniája mindig standard és kiszámítható.
            </p>
            <div className="footerflex">
              <span> Kövess minket:</span>
              <a href="https://www.facebook.com/gyemantmosoda/" target="_blank">
                <img
                  src={require("../assets/facebook.png")}
                  alt="Gyémántmosoda logo"
                />
              </a>
            </div>
          </div>
          <div className="footerlinks">
            <h2>Linkek</h2>
            <ul>
              <li>
                <a href="#mosoda">Mosoda</a>
              </li>
              <li>
                <a href="#services">Szolgáltatásaink</a>
              </li>
              <li>
                <a href="#munkaruha">Munkaruha</a>
              </li>
              <li>
                <a href="#referenciak">Referencia</a>
              </li>
              <li>
                <a href="#rolunk">Rólunk</a>
              </li>
              <li>
                <a href="#job">Karrier</a>
              </li>
              <li>
                <a href="#arajanlat">Árajánlat</a>
              </li>
              <li>
                <a href="index.php">Kapcsolat</a>
              </li>
            </ul>
          </div>
          <div className="kapcsolat">
            <h2>Kapcsolat</h2>
            <p> Cím</p>
            <p>3245 Recsk.</p>
            <p>Vörösmarty Mihály út 21.</p>
            <p> Cím</p>
            <p>Zalabai-Pócs Krisztina</p>
            <p> Cím</p>
            <p>+36-70 / 701-0072</p>
            <p> Cím</p>
            <p>+36-70 / 701-0072</p>
          </div>
        </div>
        <hr width="100%" size="1" color="white" />
        <div id="copy">
          <p>2023 &copy; Majoros Péter </p>
        </div>
      </div>
    </div>
    </footer>
  );
}
export default Footer;
