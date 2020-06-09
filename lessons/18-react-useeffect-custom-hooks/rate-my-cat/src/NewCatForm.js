import React, { useEffect, useState } from "react";
import API from "./API";
import useForm from "./hooks/useForm";

const NewCatForm = (props) => {
  const { formData, handleChange, handleSubmit } = useForm(
    {
      name: "",
      weight: 0,
      favouriteFood: "",
    },
    () => {
      setAwaitingResponse(true);

      API.postCat(formData).then((newCat) => {
        setAwaitingResponse(false);
        props.addNewCat(newCat);
      });
    }
  );

  const [awaitingResponse, setAwaitingResponse] = useState(false);

  useEffect(() => {
    console.log("MOUNT");
    return () => {
      console.log("UNMOUNT");
    };
  }, []);

  useEffect(() => {
    console.log("UPDATE");
  }, [props.name]);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     // setAwaitingResponse(true);

  //     // API.postCat(formData).then((newCat) => {
  //     //   setAwaitingResponse(false);
  //     //   props.addNewCat(newCat);
  //     // });
  //   };

  return (
    <form
      onChange={handleChange}
      onSubmit={handleSubmit}
      className={awaitingResponse ? "disabled" : undefined}
    >
      <h2>New cat</h2>
      <label>
        Name
        <input type="text" value={formData.name} name="name" />
      </label>
      <label>
        weight
        <input type="number" value={formData.weight} name="weight" />
      </label>
      <label>
        favouriteFood
        <input
          type="text"
          value={formData.favouriteFood}
          name="favouriteFood"
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default NewCatForm;
