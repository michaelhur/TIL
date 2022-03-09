import React, { memo, useState } from "react";
// Hooks에서는 ShouldComponentUpdate도 없고, PureComponent도 없음
// Hooks에서는 Memo를 사용해야함

const Try = memo(({ tryInfo }) => { //보통은 구조분해해서 { tryInfo } 를 사용함.
    // 부모로부터 전달받은 props의 값을 절대로 직접 변경하면 안된다.
    // 부모가 직접 바꿔야하지, 자식이 바꾸면 안됨!!!
    // 하지만 실무에서는 props을 전달받고나서 값을 변경해야하는 경우가 있다.
    // 그럴때는 state로 먼저 만든뒤, state를 변경해야한다.
    const [result, setResult] = useState(tryInfo.result);

    const onClick = () => {
        setResult('1');
    };

    console.log("rendering Try component")
    return(
        <li>
            <div>{ tryInfo.try }</div>
            <div onClick = {onclick}>{ tryInfo.result }</div>
        </li>
    )
});

export default Try;