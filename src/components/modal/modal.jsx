import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  constructor() {
    super();

    this.state = {
      title: ``
    };

    this.onInputChange = (evt) => {
      const value = evt.target.value;

      this.setState({
        title: value
      });
    };

    this.onFormSubmit = (evt) => {
      evt.preventDefault();

      if (this.props.modalType === `edit`) {
        this.props.onTaskEdit(this.props.currentId, this.state.title);
      } else {
        this.props.onTaskAdd(this.state.title);
      }

      this.setState({
        title: ``
      });

      this.props.onModalSwitch();
    };

    this.onDeleteButtonClick = () => {
      this.props.onTaskDelete(this.props.currentId);
      this.props.onModalSwitch();
    };
  }

  componentDidMount() {
    this.setState({
      title: this.props.modalField
    });
  }

  render() {
    const {title} = this.state;
    const {onModalSwitch, modalType} = this.props;

    let modalTitle;
    let modalClassName;

    switch (true) {
      case modalType === `add`:
        modalTitle = `Добавить задачу`;
        modalClassName = `modal modal--active modal--add`;
        break;
      case modalType === `edit`:
        modalTitle = `Редактировать задачу`;
        modalClassName = `modal modal--active modal--edit`;
        break;
      case modalType === `delete`:
        modalTitle = `Удалить задачу`;
        modalClassName = `modal modal--active modal--delete`;
        break;
      default:
        modalTitle = `Добавить задачу`;
        modalClassName = `modal modal--active modal--add`;
        break;
    }

    return (
      <Fragment>
        <div className="overlay" onClick={onModalSwitch}></div>
        <div className={modalClassName}>
          <div className="modal__info">
            <h2 className="modal__title">{modalTitle}</h2>
            <a className="modal__link" href="#" onClick={onModalSwitch}>
              <svg className="modal__icon" width="21" height="21" viewBox="0 0 21 21" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.64943 0.436127L10.5 8.28642L18.3183 0.468433C18.4553 0.322601 18.6203 0.20594 18.8035 0.125447C18.9867 0.044953 19.1843 0.00228457 19.3844 0C19.8128 0 20.2237 0.170181 20.5266 0.473106C20.8295 0.776031 20.9997 1.18689 20.9997 1.61529C21.0035 1.81332 20.9668 2.01004 20.8918 2.19337C20.8168 2.37669 20.7051 2.54276 20.5636 2.68138L12.6646 10.4994L20.5636 18.3981C20.8298 18.6586 20.9859 19.0113 20.9997 19.3834C20.9997 19.8118 20.8295 20.2227 20.5266 20.5256C20.2237 20.8285 19.8128 20.9987 19.3844 20.9987C19.1785 21.0073 18.9731 20.9729 18.7813 20.8978C18.5894 20.8227 18.4152 20.7086 18.2698 20.5626L10.5 12.7123L2.66558 20.5464C2.52909 20.6874 2.36604 20.8 2.18583 20.8776C2.00562 20.9552 1.81181 20.9964 1.61561 20.9987C1.18719 20.9987 0.776322 20.8285 0.473386 20.5256C0.17045 20.2227 0.000262826 19.8118 0.000262826 19.3834C-0.00350334 19.1854 0.0332409 18.9887 0.108241 18.8054C0.18324 18.622 0.294913 18.456 0.436406 18.3173L8.33544 10.4994L0.436406 2.60061C0.170173 2.34016 0.0140572 1.98747 0.000262826 1.61529C0.000262826 1.18689 0.17045 0.776031 0.473386 0.473106C0.776322 0.170181 1.18719 0 1.61561 0C2.00329 0.00484586 2.37482 0.161529 2.64943 0.436127Z"
                  fill="white" />
              </svg>
            </a>
          </div>
          <form className="modal__form" onSubmit={this.onFormSubmit}>
            <label className="modal__label" htmlFor="task-field">
              <input className="modal__field" type="text" name="task" id="task-field" value={title} placeholder="Введите новую задачу" onChange={this.onInputChange} required disabled={modalType === `delete` ? true : false} />
            </label>
            {
              modalType === `delete` ? <button className="button modal__button" type="button" onClick={this.onDeleteButtonClick}>
                <svg className="button__icon button__icon--delete" width="18" height="22" viewBox="0 0 18 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.28571 19.5556C1.28571 20.9 2.44286 22 3.85714 22H14.1429C15.5571 22 16.7143 20.9 16.7143 19.5556V4.88889H1.28571V19.5556ZM18 1.22222H13.5L12.2143 0H5.78571L4.5 1.22222H0V3.66667H18V1.22222Z"
                    fill="white" />
                </svg>
              </button> : <button className="button modal__button" type="submit">
                <svg className="button__icon button__icon--add" width="28" height="22" viewBox="0 0 28 22" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12.2857L9.2 20L26 2" stroke="white" strokeWidth="3" strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
              </button>
            }
          </form>
        </div>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  currentId: PropTypes.string.isRequired,
  onModalSwitch: PropTypes.func.isRequired,
  onTaskAdd: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
  modalField: PropTypes.string.isRequired,
  onTaskEdit: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired
};
