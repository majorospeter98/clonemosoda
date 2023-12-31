function MunkaRuha() {
  return (
    <>
      <section id="munkaruha">
        <div className="munkaruhaintro">
          <div className="container">
            <h1 className="text gap pdtop">MUNKARUHA</h1>
            <hr width="100%" size="1" color="white" />
            <div className="munkaruhak">
              <div className="munkaruhafirst">
                <h2>Ipari Munkaruha, Bértextil mosás és tisztítás</h2>
                <p>
                  Szolgáltatásaink körét bővítettük munkaruha mosással, illetve
                  bérbeadással.
                </p>
                <p> Cége, üzeme igényei szerint alakítjuk portfóliónkat</p>
                <p>
                  Legyen szó egyszerű póló, kabát vagy munkavédelmi ruházatról.
                </p>
              </div>
              <div className="munkaruhasecond">
                <p>Kiemelt Munkaruha referenciáink:</p>
                <img src={require("../assets/nestle.jpg")} alt="Nestle képe" />
                <a
                  href="https://www.nestle.hu/"
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  <h2 style={{ color: "white" }}>NESTLÉ HUNGÁRIA KFT</h2>
                </a>
              </div>
            </div>
            <div className="pd text">
              <button className="button">
                <a href="#arajanlat"> Ajánlatot kérek</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MunkaRuha;
