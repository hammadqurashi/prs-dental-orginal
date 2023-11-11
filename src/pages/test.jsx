import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


const Sitemap = () => {
  const {
    register,
    errors,
    handleSubmit,
    reset,
    formState: { isSubmitted },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Error</label>
      <input
        type="text"
        name="singleErrorInput"
        ref={register({ required: true })}
      />
      {errors.singleErrorInput && <p>Your input is required</p>}

      <label>Error with type check</label>
      <input
        type="text"
        name="multipleErrorInput"
        ref={register({ required: true, maxLength: 50 })}
      />
      {errors.multipleErrorInput &&
        errors.multipleErrorInput.type === "required" && (
          <p>Your input is required</p>
        )}
      {errors.multipleErrorInput &&
        errors.multipleErrorInput.type === "maxLength" && (
          <p>Your input exceed maxLength</p>
        )}

      <label>Error with value</label>
      <input type="number" name="numberInput" ref={register({ min: 50 })} />
      {errors.numberInput && <p>Your input required to be more than 50</p>}

      <input type="submit" />
    </form>
  );
};

export default Sitemap;
