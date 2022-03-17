import React, {useState, useEffect, useRef, useMemo, useCallback} from "react";
import Ball from "./ball"

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.splice(0, 6).sort((p,c) => p - c);
    return [... winNumbers, bonusNumber];
}

const Lotto = () => {
    // Hooks는 전체가 다시 실행되는 구조이기때문에, rendering할때마다 getWinNumbers가 계속해서 실행된다.
    // 만약 getWinNumbers가 10초가 걸리는 함수면, 7개의 숫자를 얻기 위해서 70초가 소요된다
    // useMemo를 사용해서 캐싱을 해줄수 있다.
    // useMemo: 복잡한 함수 결과값을 기억
    // useRef: 일반 값을 기억
    // useMemo vs useCallback
    // - useMemo: 값을 기억하고 있음.
    // - useCallback: 함수 자체를 기억
    // useCallback
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    const onClickRedo = useCallback(() => {
        console.log("onClickRedo");
        console.log(winBalls);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winBalls]); // winBalls를 두번째 인자로 넣어주면서 winBalls가 변경될떄마다 useCallback이 다른 것을 기억하도록 만든다.

    useEffect(() => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevWinBalls) =>  [...prevWinBalls, winNumbers[i]])
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() =>{
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => {
            timeouts.current.forEach((v)=>{
                clearTimeout(v);
            })
        }
    }, [timeouts.current]) // deps:[]일때는 componentDidMount랑 똑같게 작동한다.
    // 배열에 요소가 있으면 componentDidMount와 componentDidUpdate 둘 다 수행
    // 배열에 조건을 넣어서 comoonentDidUpdate를 해줄수 있다.

    return(
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                { winBalls.map((v) => <Ball key={v} number={v}/>) }
            </div>
            <div>보너스!</div>
            { bonus && <Ball number={bonus} /> }
            { redo && <button onClick={onClickRedo}>한 번 더!</button> }
        </>
    )
}

export default Lotto;