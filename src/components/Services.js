function Services() {
  return (
    <section>
      <div className="container">
        <div id="services">
          <h1 className="gap text">SZOLGÁLTATÁS</h1>
          <div className="services">
            <div className="service">
              <div>
                <img
                  src={require("../assets/szol1.png")}
                  alt="szolgáltatás első képe"
                />
              </div>
              <div>
                <h3>Alapítás</h3>
                <p>
                  A beszállításra kerülő szennyezett textíliákat szétválagotjuk
                  fajtája és színei alapján
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <img
                  src={require("../assets/szol1.png")}
                  alt="szolgáltatás második képe"
                />
              </div>
              <div>
                <h3>Mosás és Tisztítás</h3>
                <p>
                  Környezet és textil kímélő tisztítási eljáráson esnek át a
                  textíliák, eltávolítva ezáltal minden szennyeződést.
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <img
                  src={require("../assets/szol1.png")}
                  alt="szolgáltatás harmadik képe"
                />
              </div>
              <div>
                <h3>Visszamosás</h3>
                <p>
                  A mosási folyamot követően újra átnézzük a már tisztított
                  textíliákat, hogy az erősebb szennyeződéseket kiszűrjük.
                  Amennyiben ilyen eset fordul elő azt "vissza"-mosási eljárás
                  alá vonjuk.
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <img
                  src={require("../assets/szol1.png")}
                  alt="szolgáltatás negyedik képe"
                />
              </div>
              <div>
                <h3>Szárítás</h3>
                <p>
                  A már kitisztított textílákat szárítógép parkunkba helyezzük
                  és minden nedvességet eltávolítunk.
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <img
                  src={require("../assets/szol1.png")}
                  alt="szolgáltatás ötödik képe"
                />
              </div>
              <div>
                <h3>Vasalás</h3>
                <p>
                  A már szírított textíliákat ipari vasalóinkal gyűrődésmentesre
                  vasaljuk és hajtogatjuk.
                </p>
              </div>
            </div>
            <div className="service">
              <div>
                <img
                  src={require("../assets/szol1.png")}
                  alt="szolgáltatás hatodik képe"
                />
              </div>
              <div>
                <h3>Kiszállítás</h3>
                <p>
                  A kész tisztított textíliákat védő csomagolásba helyezzük és a
                  megbeszélt időpontban kiszállítjuk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
