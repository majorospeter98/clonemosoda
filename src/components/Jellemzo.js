function Jellemzo() {
  return (
    <>
    <section>
      <div className="container">
        <h1 className="gap text">JELLEMZŐINK</h1>
        <div id="jellemzok">
          <div className="jellemzoimg">
            <img
              src={require("../assets//tisztit.png")}
              alt="Jellemző első kép"
            />
          </div>
          <div className="jellemzotext">
            <div className="kep1">
              <div>
                <img
                  src={require("../assets/jel2.png")}
                  alt="Jellemző második kép"
                />
              </div>
              <div>
                <h3>Alapítás</h3>
                <span>2009-óta a tiszta textilek szolgálatában</span>
              </div>
            </div>
            <div className="kep1">
              <div>
                <img
                  src={require("../assets/jel2.png")}
                  alt="Jellemző harmadik kép"
                />
              </div>
              <div>
                <h3>Alapítás</h3>
                <span>2009-óta a tiszta textilek szolgálatában</span>
              </div>
            </div>
            <div className="kep1">
              <div>
                <img
                  src={require("../assets/jel3.png")}
                  alt="Jellemző negyedik kép"
                />
              </div>
              <div>
                <h3>Alapítás</h3>
                <span>2009-óta a tiszta textilek szolgálatában</span>
              </div>
            </div>
            <div className="kep1">
              <div>
                <img
                  src={require("../assets/jel4.png")}
                  alt="Jellemző ötödik kép"
                />
              </div>
              <div>
                <h3>Alapítás</h3>
                <span>2009-óta a tiszta textilek szolgálatában</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
export default Jellemzo;
