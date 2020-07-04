import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { flowRight as compose } from 'lodash';
import { Paper } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import Form from "./Form";

const TodosQuery = gql`
{
  todos{
    id
		text
 		complete
  }
}
`;

const UpdateMutation = gql`
mutation($id: ID!, $complete:Boolean!) {
  updateTodo(id: $id, complete: $complete)
}
`;

const DeleteMutation = gql`
mutation($id: ID!) {
  deleteTodo(id: $id)
}
`;

const CreateMutatiton = gql`
  mutation($text:String!) {
    createTodo(text: $text){
      id
      text
      complete
    }
  }
`;

class App extends Component {
  updateTodo = async todo => {
    //update todo
    await this.props.updateTodo({
      variables: {
        id: todo.id,
        complete: !todo.complete
      },
      update: store => {
        const data = store.readQuery({ query: TodosQuery });

        data.todos = data.todos.map(
          x => x.id === todo.id ? {
            ...todo,
            complete: !todo.complete
          } : x);

        store.writeQuery({ query: TodosQuery, data });
      }
    });
  };

  deleteTodo = async todo => {
    //delete todo
    await this.props.deleteTodo({
      variables: {
        id: todo.id,
      },
      delete: store => {
        const data = store.readQuery({ query: TodosQuery });

        data.todos = data.todos.filter(x => x.id !== todo.id);

        store.writeQuery({ query: TodosQuery, data });
      }
    });
  };

  createTodo = async text => {
    //create todo
    await this.props.createTodo({
      variables: {
        text,
      },
      update: (store, { data: { createTodo } }) => {

        const data = store.readQuery({ query: TodosQuery });

        console.log(data.todos);
        data.todos.unshift(createTodo);
        console.log(data.todos);

        store.writeQuery({ query: TodosQuery, data });
      }
    });
  };

  render() {
    const { data: { loading, todos } } = this.props;
    if (loading) {
      return null;
    }

    return (
      <div style={{ display: 'flex' }}>
        < div style={{ margin: 'auto', width: 400 }}>
          <Paper elevation={1}>
            <Form submit={this.createTodo} />
            <List>
              {todos.map(todo => (
                <ListItem
                  key={todo.id}
                  role={undefined}
                  dense
                  button
                  onClick={() => this.updateTodo(todo)}
                >
                  <Checkbox
                    checked={todo.complete}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={todo.text} />
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.deleteTodo(todo)}>
                      <CloseIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        </div >
      </div>
    );
  }
}

export default compose(
  graphql(CreateMutatiton, { name: "createTodo" }),
  graphql(DeleteMutation, { name: "deleteTodo" }),
  graphql(UpdateMutation, { name: "updateTodo" }),
  graphql(TodosQuery)
)(App);
