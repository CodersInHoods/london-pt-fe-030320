import React, { useState } from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import Nav from "./Nav";
import Home from "./Home";

const PAGES = {
  MESSAGE: 1,
  COUNTER: 2,
  RECIPES: 3,
};

function App() {
  const [counter, setCounter] = useState(0);
  const [doubler, setDoubler] = useState(false);
  const [message, setMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(PAGES.RECIPES);

  const clearMessage = () => setMessage("");

  const handleMessage = (event) => setMessage(event.target.value);

  const toggleDoubler = () => setDoubler(!doubler);

  const pageNames = Object.keys(PAGES);

  return (
    <div className="App">
      <Nav>
        <Home></Home>
        {pageNames.map((pageName) => (
          <p
            key={PAGES[pageName]}
            onClick={() => setCurrentPage(PAGES[pageName])}
          >
            {pageName}
          </p>
        ))}
      </Nav>
      <header className="App-header">
        {currentPage === PAGES.MESSAGE ? (
          <div>
            {message.length === 0 ? <h1>NO MESSAGE YET!</h1> : <p>{message}</p>}
            <input value={message} onChange={handleMessage} />
            <button onClick={clearMessage}>Clear message</button>
          </div>
        ) : null}

        {currentPage === PAGES.COUNTER ? (
          <div>
            <p>Counter value: {counter}</p>
            <p
              className={doubler ? "enabled" : "disabled"}
              onClick={toggleDoubler}
            >
              Doubler enabled? {doubler ? "YES" : "NO!"}
            </p>
            <button
              onClick={() => setCounter(doubler ? counter * 2 : counter + 1)}
            >
              +
            </button>
          </div>
        ) : null}

        {currentPage === PAGES.RECIPES ? <RecipeList /> : null}
      </header>
    </div>
  );
}

export default App;
