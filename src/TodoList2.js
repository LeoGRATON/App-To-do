import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "./components/Form";
import Counter from "./components/Counter";
import Tasks from "./components/Tasks";

import tasksData from "./data/tasks";

import "./styles/index.scss";

const TodoList2 = () => {
  const [taskLabel, setTaskLabel] = useState("");
  const [tasks, setTasks] = useState(tasksData);

  const undoneTaskNumber = tasks.filter((task) => !task.done).length;

  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => a.done - b.done);

  const setTaskDone = (taskId) => {
    //Création d'un nouveau tableau
    const newTasks = tasks.map((task) => {
      //Je check si une task.id a le meme Id que le paramètre reçu (id de la tache de la liste Tasks)
      //Et si il y a égalité, je return toutes les propriété de l'objet en question et je modifie juste la propriété DONE=>!Done
      if (task.id === taskId) return { ...task, done: !task.done };
      //si la task.id n'est pas égale au paramètre passé, on retourne sans modifier la propriété "done"
      return task;
    });

    setTasks(newTasks);
  };

  const addTask = () => {
    //Création d'un nouveau tableau avec uniquement les task.id
    //const ids = tasks.map((task) => task.id);
    //Fonction qui ressort le plus haut id depuis un tableau
    //const maxId = Math.max(...ids);

    //Création de notre nouvel objet task (utilisation de UUID pour id unique)
    const newTask = {
      id: uuidv4(),
      done: false,
      label: taskLabel,
    };

    //Création d'un nouveau tableau, ajout de toutes les anciennes tâches, plus une nouvelle.
    const newTasks = [...tasks, newTask];
    //Mise à jour du state avec le nouveau tableau (anciens objet + nouveau )
    setTasks(newTasks);
    setTaskLabel("");
  };

  return (
    <div className='todolist'>
      {/* <div className='state'>{JSON.stringify(this.state)}</div> */}
      <Form
        inputValue={taskLabel}
        onChangeInput={setTaskLabel}
        onSubmitForm={addTask}
      />
      <Counter count={undoneTaskNumber} />
      <Tasks tasks={sortedTasks} setTaskDone={setTaskDone} />
    </div>
  );
};

export default TodoList2;
