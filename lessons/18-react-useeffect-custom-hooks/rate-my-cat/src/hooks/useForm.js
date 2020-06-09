import { useState } from "react";

const useForm = (initialState, onSubmit) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
