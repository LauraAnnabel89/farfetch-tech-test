import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetch("/uk/plpslice/listing-api/query?setId=9645&view=180&gender=Men")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data);
      });
  }, []);

  return (
    <div className="App">
      {console.log(state)}

      {state.map((d) => {
        return <h1> {d}</h1>;
      })}
    </div>
  );
}

export default App;
