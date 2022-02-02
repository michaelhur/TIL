import React, { Component } from 'react';

class Test extends Component{
    state = {
        counter: 0,
    }

    // 만약 shouldComponentUpdate가 복잡하다면, extends Component를 extends PureComponent로 바꾸면 된다.
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        } else {
            return false;
        }
    }

    onClick = () => {
        this.setState({}); // 실제로 State가 바뀌지않아도 setState가 호출되면 렌더링됨.
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