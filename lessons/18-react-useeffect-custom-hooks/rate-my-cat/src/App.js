import React, { useState, useEffect } from "react";
import "./App.css";
import API from "./API";
import NewCatForm from "./NewCatForm";
import useForm from "./hooks/useForm";

function App() {
  const [cats, setCats] = useState([]);
  const [showCatForm, setShowCatForm] = useState(true);

  const [formData, setFormData] = useState({ name: "archie", weight: 100 });

  const { formData: loginFormData, handleChange, handleSubmit } = useForm(
    { username: "", password: "" },
    () => {
      API.login(loginFormData);
    }
  );

  // useEffect(() => {changeAThing()}, [cats]);
  // useEffect(() => {changeAnotherThing()}, [cats]);
  // useEffect(() => {}, [counter]);

  useEffect(() => {
    console.log("component has mounted! this will run only once");

    API.getCats().then((cats) => {
      setCats(cats);
    });

    // const fetchCats = async () => {
    //   const cats = await API.getCats();
    //   setCats(cats);
    // };

    // fetchCats();

    return () => {
      console.log("component will unmount!");
    };
  }, []);

  useEffect(() => {
    console.log("CATS HAS CHANGED to", cats);
    if (cats) {
      setFormData((currentFormData) => {
        return {
          ...currentFormData,
          name: "garfield",
        };
      });
    } else {
      setFormData((currentFormData) => {
        return {
          ...currentFormData,
          name: "Scooby doo",
        };
      });
    }
  }, [cats]);

  useEffect(() => {
    console.log("FORM DATA HAS CHANGED", formData);
  }, [formData]);

  const addNewCat = (newCat) => {
    setCats([...cats, newCat]);
  };

  if (cats.length === 0) return <div>LOADING CATS!</div>;

  return (
    <div className="App">
      <button onClick={() => setShowCatForm(!showCatForm)}>
        {showCatForm ? "HIDE FORM" : "SHOW FORM"}
      </button>
      {showCatForm && <NewCatForm addNewCat={addNewCat} name={formData.name} />}
      <ul>
        {cats.map((cat) => (
          <li>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
