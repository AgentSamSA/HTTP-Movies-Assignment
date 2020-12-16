import React, { useState } from "react";
import axios from "axios";

const UpdateMovie = () => {
  const [formValues, setFormValues] = useState("");

  const handleSubmit = (event) => {
    axios
      .put("http://api/movies/:id", {
        title: formValues.title,
        director: formValues.director,
        metascore: formValues.metascore,
        stars: formValues.stars
      })
      .then((res) => {
        setFormValues({
          [event.target.name]: "",
        });
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  const handleChanges = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formValues.title}
        onChange={handleChanges}
      />
      <input
        type="text"
        placeholder="Director"
        name="director"
        value={formValues.director}
        onChange={handleChanges}
      />
      <input
        type="text"
        placeholder="Metascore"
        name="metascore"
        value={formValues.metascore}
        onChange={handleChanges}
      />
      <input
        type="text"
        placeholder="Stars"
        name="stars"
        value={formValues.stars}
        onChange={handleChanges}
      />
      <button>Update</button>
    </form>
  );
};

export default UpdateMovie;
