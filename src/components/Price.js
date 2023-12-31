import { useState} from "react";
import React from 'react';
function Price() {
  const [vnev, setVnev] = useState("");
  const [varosnev, setVarosnev] = useState("");
  const [mennyiseg, setMennyiseg] = useState("");
  const [knev, setKnev] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [modal,setModal]= useState("");
 
  const clear = () => {
    setVnev("");
    setVarosnev("");
    setMennyiseg("");
    setKnev("");
    setTelefon("");
    setEmail("");
    setText("");
    setTimeout( () =>{
      setModal("");
    },5000)
  };
  function handleSubmit(e) {
    e.preventDefault();
    setModal("Sikeresen elküldve!");
      
    clear();
  }
  return (
    <section id="arajanlat">
      <h1 className="gap text container">Árajánlat</h1>
      <div className="container">
        <div className="prices">
          <div className="priceimg">
            <img src={require("../assets/price.png")} alt="Price képe" />
            <p>Kérje ajánlatunkat, forduljon hozzánk bizalommal</p>
            <p>Töltse ki és küldje el az ajánlatkérő űrlapot</p>
            <p> Kollégánk néhány órán belül válaszolni fog.</p>
          </div>
          <div className="pricetext">
            <form action="#" onSubmit={handleSubmit} data-testid="form">
              <h3 className="gap text">Árajánlat:</h3>
                         <h3>Vállalkozás:</h3>
                         <label htmlFor="vnev">Vállalkozás neve:</label>
              <input
                type="text"
                value={vnev}
                id="vnev"
                onChange={(e) => {
                  setVnev(e.target.value);
                }}
                placeholder="Vállalkozás neve"
                data-testid="firstname"
                required
              />
              <br />
              <label htmlFor="varosnev">Város neve:</label>
              <input
                type="text" data-testid="city"
                value={varosnev}
                onChange={(e) => setVarosnev(e.target.value)}
                id="varosnev"
                placeholder="Város/Telephely"
                required
              />
              <br />
              <label htmlFor="mennyiség">Mennyiség:</label>
              <input
                type="number"
                value={mennyiseg}
                onChange={(e) => setMennyiseg(e.target.value)}
                id="mennyiség"
                placeholder="Havi mennyiség (kg)"
                min="5"
                max="50" data-testid="amount"
                required
              />
              <br />
              <h3>Kapcsolattartó:</h3>
              <label htmlFor="knev">Név:</label>
              <input
                type="text"
                value={knev}
                id="knev"
                onChange={(e) => setKnev(e.target.value)}
                placeholder="Kapcsolattartó neve" data-testid="contact"
                required
              />
              <br />
              <label htmlFor="telefon">Telefonszámod:</label>
              <input
                type="tel"
                value={telefon}
                id="telefon"
                onChange={(e) => setTelefon(e.target.value)}
                placeholder="Telefonszáma" data-testid="tel"
                pattern = "((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})"
                required
              />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email címe" data-testid="email"
                required
              />
              <br />
              <label htmlFor="textarea">Üzenet:</label>
              <textarea
                id="textarea"
                value={text}
                onChange={(e) => setText(e.target.value)}
                name="w3review"
                rows="6" 
                 cols="50" data-testid="comment"
                placeholder="Üzenet"
              ></textarea>
              <div className="modal" data-testid="modal">{modal}</div>
              <div className="pdtop pd">
                <button
                  type="submit"
                  className="button" 
                  
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Price;
