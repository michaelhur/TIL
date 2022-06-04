import React, {useState, useCallback} from 'react';

const SimpleHabit = (props) => {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
            setCount(count + 1);
        },[count]);
    

    const handleDecrement = () => {
        const newCount = count < 1 ? 0 : count - 1;
        setCount(newCount);
    }

    return (
        <li className="habit">
            <span className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button
                className="habit-button habit-increase"
                onClick={handleIncrement}>
                <i className="fa-solid fa-square-plus"></i>
            </button>
            <button
                className="habit-button habit-decrease"
                onClick={handleDecrement}>
                <i className="fa-solid fa-square-minus"></i>
            </button>
        </li>
    )
};

export default SimpleHabit;