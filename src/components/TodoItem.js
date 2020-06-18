import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: "1rem 2rem",
            backgroundColor: "whitesmoke",
            display: "flex",
            fontSize: "2rem",
            alignItems: "center",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            justifyContent: "space-between",
        };
    };

    render() {
        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)}
                />
                {title}

                <button
                    onClick={this.props.delTodo.bind(this, id)}
                    style={btnStyle}
                >
                    X
                </button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
};

const btnStyle = {
    background: "crimson",
    color: "white",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "50%",
    marginLeft: "1rem",
};

export default TodoItem;
