import React, { useRef } from "react";

interface NewDoctorProps {
  getDoctors: (todoText: string) => void;
  getAllDoctors: () => void;
}

const NewDoctor: React.FC<NewDoctorProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText === "") {
      return;
    }
    props.getDoctors(enteredText);
  };

  const onClickHandler = () => {
    props.getAllDoctors()
  }

  return (
    <form className="pb-3" onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="todo-text">Find a Provider</label>
        <input
          className="form-control"
          type="text"
          id="todo-text"
          aria-describedby="searchProviders"
          ref={textInputRef}
        />
      </div>
      <button className="btn btn-primary btn-block" type="submit">
        Search by provider name
      </button>
      <button
        onClick={onClickHandler}
        className="btn btn-secondary btn-block"
        type="button"
      >
        View all
      </button>
    </form>
  );
};

export default NewDoctor;
