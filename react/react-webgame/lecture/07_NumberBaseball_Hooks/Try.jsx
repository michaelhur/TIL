import React from "react";

const Try = (props) => { //보통은 구조분해해서 { tryInfo } 를 사용함.
    return(
        <li>
            <div>{ props.tryInfo.try }</div>
            <div>{ props.tryInfo.result }</div>
        </li>
    )
};

export default Try;