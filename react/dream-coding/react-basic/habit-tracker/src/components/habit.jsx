import React, {Component} from 'react';

class Habit extends Component {

    handleIncrement = () => {
        // Habits.jsx를 참고하자면, onIncrement는 habit을 인자로 받고있다.
        // 그러므로 Habit 컴포넌트에서도 this.props.onIncrement는 전달받은 this.props.habit을 인자로 받는다.
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const {name, count} = this.props.habit
        console.log(`habit: ${name}`)
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button
                    className="habit-button habit-increase"
                    onClick={this.handleIncrement}>
                    <i className="fa-solid fa-square-plus"></i>
                </button>
                <button
                    className="habit-button habit-decrease"
                    onClick={this.handleDecrement}>
                    <i className="fa-solid fa-square-minus"></i>
                </button>
                <button
                    className="habit-button habit-delete"
                    onClick={this.handleDelete}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </li>
        )
    }
}

export default Habit;