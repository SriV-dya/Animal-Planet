import React, { useState } from "react";
import "./styles.css";

var animalDictionary = {
  "🐼": "Panda",
  "🦇": "Bat",
  "🦥": "Sloth",
  "🦩": "Flamingo",
  "🐞": "Lady Bug",
  "🦟": "Mosquito",
  "🦙": "Llama"
};

var animalsWeKnow = Object.keys(animalDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
  
    var userInput = event.target.value;

    var meaning = animalDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); 
  }

  function animalClickHandler(animal) {
    var meaning = animalDictionary[animal];
    setMeaning(meaning); 
  }
  return (
    <div className="App">
      <h1>Animal Planet</h1>

      <input onChange={animalInputHandler} />

      <h2> {meaning} </h2>
      {}

      <h3> Animals we know </h3>
      {animalsWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
    </div>
  );
}
