import React, { useState } from "react";
import "./App.css";
import UserForm from "./Components/UserForm/UserForm";

/**
 * Exercise 1
 *
 * 1. create a state for {inputText}
 * 2. create h1 which will represent current state
 * 3. create input with class ".first" form which will update {inputText}
 * in state every time you modify input value.
 * Input value should represent state value.
 * 4. create input with class ".second" form which will update {inputText}
 * in state every time you modify input value.
 * Input value should represent state value.
 *
 * Exercise 2
 * 1. Create component UserForm.
 * 2. UserForm needs to have state {user} with properties: 
 * 	- firstName, - lastName, - age, - gender.
 * 3. UserForm should contain 4 inputs:
 * - firstName(type: "text", class: firstName)
 * - lastName(type: "text", class: lastName)
 * - age(type: "number", class: age)
 * - gender(type="select" class: gender,)
 * 4. When the value of any input changes, user state needs to reflect that.
 * 5. On form submit post your user to database. Validate data. 
 * If any value is missing, you shouldn't post user to database.
 * 
 * IMPORTANT: create div with class "state" and render there
 * all properties from {user} state.
 */

const App = () => {
	
};

export default App;
