import React, {Component} from 'react';
import "./app.css"
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {

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
        const habits = [...this.state.habits]; // spread operator
        const index = habits.indexOf(habit)
        habits[index].count++;
        this.setState({
            habits: habits // key와 value가 동일한 이름을 가지고 있을때는 한개만 써도 됨.
        });
    };

    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({
            habits: habits
        })
    };

    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({
            habits: habits
        })
    };

    render() {
        return (
            <>
            <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
            <Habits
                habits={this.state.habits}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}/>
            </>
        );
    }
}

export default App;