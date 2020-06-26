import React, { useRef, useState } from "react";

interface NewTodoProps {
  //   onAddTodo: (todoText: string) => void;
  getDoctors: (todoText: string) => void;
  // onCount: () => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [error, setError] = useState(false);
  const textInputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText === "") {
      setError(true);
      return;
    }
    // props.onCount();
    props.getDoctors(enteredText);
  };

  return (
    <form
      className='pb-3'
      onSubmit={onSubmitHandler}
    >
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
    </form>
  );
};

export default NewTodo;
