import React, {Component} from 'react';
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
    // handleIncrement, handleDecrement, handleDelete는 "특정한" habit의 상태를 변경시켜주는 것이기때문에,
    // 인자로 habit을 받는다.
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = (name) => {
        this.props.onAdd(name);
    }

    render() {
        console.log("habits");
        return (
            <>
                <HabitAddForm onAdd={this.handleAdd}/>
                <ul>
                    { this.props.habits.map(habit => (
                        <Habit key={habit.id}
                               habit={habit}
                               onIncrement={this.handleIncrement}
                               onDecrement={this.handleDecrement}
                               onDelete={this.handleDelete}
                        />
                    ))}
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;