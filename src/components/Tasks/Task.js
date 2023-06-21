import React from "react";
import PropTypes from "prop-types";

const Task = ({ id, done, label, onChangeDone }) => {
  const classNames = done ? "task task--done" : "task";

  const handleOnChange = () => {
    onChangeDone(id);
  };
  return (
    <li className={classNames}>
      <input
        type='checkbox'
        className='task__checkbox'
        id={id}
        checked={done}
        onChange={handleOnChange}
      />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};

export default Task;
