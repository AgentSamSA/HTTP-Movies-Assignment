import React, { useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const UpdateMovie = (props) => {
  const [formValues, setFormValues] = useState("");
  const params = useParams();
  const { push } = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies/${params.id}`, {
        id: params.id,
        title: formValues.title,
        director: formValues.director,
        metascore: formValues.metascore,
        stars: formValues.stars,
      })
      .then((res) => {
        console.log(res);
        setFormValues({
          [event.target.name]: "",
        });
        props.setMovieList(res.data);
        push("/");
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
