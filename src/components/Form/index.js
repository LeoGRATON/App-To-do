import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

//Si les props envoyées dans composant ne sont pas modifiées dans son parent, alors on évite le
//Re render à chaque setState avec PureComponent
class Form extends React.PureComponent {
  taskInput = React.createRef();

  componentDidMount() {
    this.taskInput.current.focus();
  }

  handleOnChange = (event) => {
    const { onChangeInput } = this.props;

    onChangeInput(event.target.value);
  };

  handleSubmit = (event) => {
    //Récupération de notre fonction qui ajoute les tasks au tableau
    const { onSubmitForm } = this.props;
    //Prévention de la soumission du formulaire et refresh de la page
    event.preventDefault();
    onSubmitForm();
  };

  // Test pour détecter un update (rerender)
  /* componentDidUpdate() {
    console.log("update global");
  } */

  render() {
    const { inputValue } = this.props;

    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <input
          ref={this.taskInput}
          className='form__input'
          type='text'
          placeholder='Ajouter une tâche'
          value={inputValue}
          onChange={this.handleOnChange}
        />
      </form>
    );
  }
}

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Form;
