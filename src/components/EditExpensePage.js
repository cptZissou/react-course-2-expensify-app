import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';
import { openModal, closeModal } from '../actions/modal';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.props.openModal}>Remove Expense</button>
          <Modal
            isOpen={this.props.modal.isOpen}
            contentLabel="Removal confirmation"
            className="modal"
            overlayClassName="overlay"
          >
            <div className="modal__box">
              <p className="modal__message"><span>{this.props.expense.description}</span> is being deleted.</p>
              <button className="button button--modalConfirm" onClick={this.onRemove}>Confirm</button>
              <button className="button button--modalCancel" onClick={this.props.closeModal}>Cancel</button>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  modal: state.modal  
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
