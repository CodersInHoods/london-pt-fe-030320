import React, { useState } from "react";
import "./App.css";
import RecipePage from "./pages/RecipePage";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CounterPage from "./pages/CounterPage";

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
          <CounterPage
            setCounter={setCounter}
            toggleDoubler={toggleDoubler}
            counter={counter}

            // {...{ setCounter, toggleDoubler, counter }}

            isDoublerEnabled={doubler}
          />
        ) : null}

        {currentPage === PAGES.RECIPES ? <RecipePage /> : null}
      </header>
    </div>
  );
}

export default App;
