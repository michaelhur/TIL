import React, {useRef, useState} from "react";

const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message,setMessage] = useState('클릭해서 시작하세요!');
    const [result, setResult] = useState([]);

    // this의 속성을 ref로 표현한다!
    const timeout = useRef(null);
    const startTime = useRef();
    const endTime = useRef();

    const onClickScreen = () => {
        if (state === 'waiting'){
            setState('ready');
            setMessage('초록색이 되면 클릭하세요');
            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭!');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 1000) + 2000);
        } else if (state === 'ready') {
            clearTimeout(timeout.current);
            setState('waiting')
            setState('성급하시군요! 초록색이 되면 클릭하세요!')
        } else if (state === 'now') {
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요!');
            setResult((prevResult) => {
                return [...prevResult, endTime.current - startTime.current]; // ref는 무조건 current로 접근해야한다.
            });
        }
    };

    const onReset = () => {
        setResult([])
    };

    const renderAverage = () => {
        return result.length === 0
            ? null
            : <>
                <div>평균 시간: {result.reduce((a,c) => a + c) / result.length}ms</div>
                <button onClick={onReset}>리셋!</button>
            </>
    };

    // jsx에서는 if문을 쓰지 못하지만, 함수 안에서는 쓸수 있음.

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {(() => {
                if (result.length === 0) {
                    return null;
                } else {
                    return <>
                        <div>평균 시간: {result.reduce((a,c) => a + c) / result.length}ms</div>
                        <button onClick={onReset}>리셋!</button>
                    </>
                }
            })()}
            {/*{ renderAverage() }*/}
        </>
    );

};

export default ResponseCheck;