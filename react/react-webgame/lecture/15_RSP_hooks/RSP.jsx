import React, { useState, useRef, useEffect } from "react";

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

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.바위);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => { // componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님)
        console.log("다시 실행")
        interval.current = setInterval(changeHand, 100);
        return() => { // componentWillUnmount 역할
            console.log("종료")
            clearInterval(interval.current); // 매번 clearInterval을 하기때문에 매번 setInterval하는 효과를 냅니다.
        }
    }, [imgCoord]); // useEffect의 두번째 param인 배열에 바꾸고 싶은 state (useEffect를 실행시키고 싶은 state)를 입력.

    // useEffect도 여러번 사용할 수 있다. state마다 다른 effect를 주고싶을수도 있기때문.

    const changeHand = () => {
        if (imgCoord === rspCoords.바위){
            setImgCoord(rspCoords.가위);
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보);
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위);
        }
    }

    // onClick안에 함수를 호출하는 부분이 있다.
    // 패턴이니 함수를 연달아 쓰면 된다.
    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if (diff == 0) {
            setResult('비겼습니다!')
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevScore) => prevScore + 1);
        } else {
            setResult('졌습니다!!');
            setScore((prevScore) => prevScore - 1);
        }
        setTimeout(()=>{
            interval.current = setInterval(changeHand, 100);
        }, 1000);
    };


    return (
        <>
            <div id="computer" style={{ background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}> </div>
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    );
}

export default RSP;