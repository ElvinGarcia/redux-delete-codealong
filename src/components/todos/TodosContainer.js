import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

class TodosContainer extends Component {

  renderTodos = () =>
    this.props.todos.map((todo) => (
      <Todo delete={this.props.delete} key={todo.id} todo={todo} />
    ));

  render() {
    return(
      <ol>
        {this.renderTodos()}
      </ol>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispacthToProps = dispatch => {
  return {
    delete: (todo) => dispatch({ type: "DELETE_TODO", payload: todo })
  };
};

  export default connect(mapStateToProps, mapDispacthToProps)(TodosContainer);