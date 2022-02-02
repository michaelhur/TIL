const React = require('react');
const { Component } = React;
import Try from "./Try"

function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for (let i = 0; i < 4; i += 1){
        const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [], // 배열에 push를 사용하여 추가하는데, react에서는 push를 사용하면 안됨. push를 사용하면 react가 다른점을 파악하지 못함.
    }

    onSubmitForm = (e) => {
        const { value, answer, tries } = this.state;
        e.preventDefault();
        if (value === answer.join('')){
            this.setState((prevState) => {
                return {
                    result: "홈런",
                    tries: [... prevState.tries, {try: value, result: "홈런"}],
                }
            });
            alert("정답입니다!");
            alert("게임을 다시 시작합니다!.");
            this.setState({
                value: '',
                answer: getNumbers(),
                tries: [],
            });
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}이였습니다.`
                });
                alert("게임을 다시 시작합니다!.");
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return {
                        tries: [...prevState.tries, {try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}]
                    }
                });
            }
        }
    };

    onChangeInput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <React.StrictMode>
                <h1>{ this.state.result }</h1>
                <form onSubmit = { this.onSubmitForm }>
                    <input maxLength={4} value = { this.state.value } onChange = { this.onChangeInput } />
                    <button>입력!</button>
                </form>
                <div>시도: { this.state.tries.length }</div>
                <ul>
                    { this.state.tries.map((v, i) => {
                        return (
                            <Try key={`$(i + 1}차 시도 :`} tryInfo={v}/>
                        );
                    })}
                </ul>
            </React.StrictMode>
        )
    }
}

export default NumberBaseball;