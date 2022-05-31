import React, {Component} from 'react';
import Habit from "./habit";

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: "Reading", count: 0},
            {id: 2, name: "Running", count:0},
            {id: 3, name: "Coding", count: 0},
        ]
    };

    // handleIncrement, handleDecrement, handleDelete는 "특정한" habit의 상태를 변경시켜주는 것이기때문에,
    // 인자로 habit을 받는다.
    handleIncrement = (habit) => {
        console.log(`handleIncrement ${habit.name}`)
    };

    handleDecrement = (habit) => {
        console.log(`handleDecrement ${habit.name}`)
    };

    handleDelete = (habit) => {
        console.log(`handleDelete ${habit.name}`)
    };

    render() {
        return (
            <ul>
                { this.state.habits.map(habit => (
                    <Habit key={habit.id}
                           habit={habit}
                           onIncrement={this.handleIncrement}
                           onDecrement={this.handleDecrement}
                           onDelete={this.handleDelete}
                    />
                ))}
            </ul>
        );
    }
}

export default Habits;