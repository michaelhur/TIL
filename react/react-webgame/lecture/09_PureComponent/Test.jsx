import React, { PureComponent } from 'react';

class Test extends PureComponent{
    state = {
        counter: 0,
        string: "hello",
        number: 1,
        boolean: true,
        object: {}, // 객체나 배열같이 복잡한 구조라면 PureComponent도 변경을 감지못할때도 있음.
        array: [],
    }

    // 만약 shouldComponentUpdate가 복잡하다면, extends Component를 extends PureComponent로 바꾸면 된다.
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     if (this.state.counter !== nextState.counter) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    onClick = () => {
        const array = this.state.array;
        array.push(1);
        this.setState({
            array: [... this.state.array, 1], // 새로운 array를 만들때는 array를 펼쳐서 엣날 값과 새로운 값을 넣으면 됨.
        }); // 실제로 State가 바뀌지않아도 setState가 호출되면 렌더링됨.
    }

    render(){
        console.log("렌더링", this.state);
        return(
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}

export default Test;