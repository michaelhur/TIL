import React, {useReducer, useState} from "react";
import Table from "./table"

const initialState = {
    winner: '',
    turn: "O",
    tableData: [['','',''], ['','',''], ['','','']],
}

const reducer = (state, action) => {
    
}

const TicTacToe = () => {

    // state의 개수가 늘어나는데, 이번 프로젝트의 구성상 TicTacToe -> Table -> Tr -> Td 로 데이터가 넘어가기때문에 관리가 힘들어진다.
    // useReducer를 사용하여 이를 해결할 수 있다.
    const [state, dispatch] = useReducer(reducer, initialState);


    return(
        <>
            <Table/>
            {winner && <div>{winnder}님의 승리!</div>}
        </>
    )
}

export default TicTacToe;