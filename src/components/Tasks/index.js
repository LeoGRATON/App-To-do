import React from "react";
import PropTypes from "prop-types";

import Task from "./Task";

import "./style.scss";

const Tasks = ({ tasks, setTaskDone }) => {
  return (
    <ul className='tasks'>
      {tasks.map((task) => {
        return <Task key={task.id} {...task} onChangeDone={setTaskDone} />;
      })}
    </ul>
  );
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTaskDone: PropTypes.func.isRequired,
};

export default Tasks;
