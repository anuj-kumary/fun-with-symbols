import { useState } from "react";

const symbolsLib = {
  "🛑": "Stop Sign",
  "🌀": "Cyclone",
  "🃏": "Joker",
  "🔇": "Muted Speaker",
  "📣": "Megaphone",
  "🔔": "Bell",
  "🎵": "Musical Note",
  "🛗": "Elevator",
  "🏧": "ATM Sign",
  "⛔": "No Entry",
  "🚭": "No Smoking",
  "☢️": "Radioactive",
  "☣️": "Biohazard",
  "🛐": "Place of Worship",
  "⚛️": "Atom Symbol",
  "🕉️": "Om",
  "♈": "Aries",
  "♉": "Taurus",
  "♊": "Gemini",
  "♋": "Cancer",
  "♌": "Leo",
  "♍": "Virgo",
  "♎": "Libra",
  "♏": "Scorpio",
};

let symbolsWeKnow = Object.keys(symbolsLib)

function App() {
  const [meaning, setMeaning] = useState("Symbols name will appear here..");

  function inputEventHandler(event) {
    let userInput = event.target.value;
    let meaning = symbolsLib[userInput];
    setMeaning(meaning);
  }
  
  function clickEventHandler(symbols){
   
    let meaning = symbolsLib[symbols];
    setMeaning(meaning);
  }
  return (
    <>
      <h2> fun with symbols </h2>
      <p>enter Symbol or choose any Symbol below to know symbols name</p> 
      <input 
      onChange={inputEventHandler}> 
      </input>
      <p> {meaning} </p>
      <div className="container">
      <ul>
        {
          symbolsWeKnow.map(symbols => {
            return (
              <li key = {symbols}
              onClick = { () => clickEventHandler(symbols)}>
              {symbols}
              </li>
            )
          })
        }
      </ul>
      </div>
    </>
  );
}

export default App;
