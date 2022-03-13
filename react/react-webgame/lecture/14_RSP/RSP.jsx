import React, { Component } from "react";

// Class의 경우
// -> constructor -> render -> ref -> componentDidMount -> setState, props 바뀔때 re-render -> componentDidUpdate -> (부모가 child를 없앴을때) componentWillUnmount
// componentDidMount 같은 LifeCycle을 Hooks는 가지고 있지않다.

const rspCoords = {
    바위: '0',
    가위: "-142px",
    보: '-284px'
}

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
}

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function(v) {
        return v[1] === imgCoord;
    })[0];
};

class RSP extends Component {
    state = {
        result: '',
        imgCoord: "0",
        score: 0,
    };

    interval;

    // render() "처음" 성공적으로 실행되고나면 componentDidMount가 실행된다.
    // 그래서 componentDidMount에 비동기 요청을 많이 한다
    componentDidMount() {
        // 이 setInterval을 자동으로 취소해주지 않고 계속해서 실행된다.
        // 그래서 이를 없애줘야한다.

        // 비동기 함수 안에서 외부의 const를 참조하면 closure문제가 생긴다.
        // => 구조분해 한 것을 비동기 함수 안에 넣어줘야한다.
        this.interval = setInterval(this.changeHand, 100);
    }

    // 컴포넌트가 제거되기 직전
    // 이 부분에서 비동기 요청 정리를 많이 한다
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    changeHand = () =>{
        const {imgCoord} = this.state;

        if (imgCoord === rspCoords.바위){
            this.setState({
                imgCoord: rspCoords.가위,
            });
        } else if (imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보) {
            this.setState({
                imgCoord: rspCoords.바위,
            });
        }
    }

    // onClick안에 함수를 호출하는 부분이 있다.
    // 패턴이니 함수를 연달아 쓰면 된다.
    onClickBtn = (choice) => () => {
        const {imgCoord} = this.state;
        clearInterval(this.interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if (diff == 0) {
            this.setState({
                result: '비겼습니다'
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prevState) => {
                return{
                    result: "이겼습니다!",
                    score: prevState.score + 1,
                }
            })
        } else {
            this.setState((prevState) => {
                return{
                    result: "졌습니다!",
                    score: prevState.score - 1,
                }
            })
        }
        setTimeout(()=>{
            this.interval = setInterval(this.changeHand, 100);
        }, 1000);
    };

    render() {
        const { result, score, imgCoord } = this.state;
        return(
            <>
                <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}> </div>
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        )
    };
}

export default RSP;