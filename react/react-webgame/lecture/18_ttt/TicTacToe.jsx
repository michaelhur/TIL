import React, {useCallback, useEffect, useReducer} from "react";
import Table from "./table"

const initialState = {
    winner: '',
    turn: "O",
    tableData: [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    recentCell: [-1, -1],
}

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = "CLICK_CELL" // export로 만들어서 module로 만들어줌
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = "RESET_GAME";

// State를 어떻게 바꿀지 적어주는 것이 reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            // state.winner = action.winner 같이 직접 바꾸면 안되고, ...state로 shallow copy를 한 후 바꿔야한다.
            return {
                ...state,
                winner: action.winner,
            };
        case CLICK_CELL:
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
                recentCell: [action.row, action.cell]
            };
        case CHANGE_TURN: {
            return {
                ...state,
                turn: state.turn === "O" ? "X" : "O"
            }
        }
        case RESET_GAME: {
            return {
                ...state,
                turn: "O",
                tableData: [
                    ['','',''],
                    ['','',''],
                    ['','','']
                ],
                recentCell: [-1, -1],
            }
        }
        default:
            return state;
    }
}

const TicTacToe = () => {
    // state의 개수가 늘어나는데, 프로젝트의 구성상 TicTacToe -> Table -> Tr -> Td 로 state가 넘어가기때문에 관리가 힘들어진다.
    // useReducer를 사용하여 이를 해결할 수 있다.
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, turn, winner, recentCell } = state;

    const onClickTable = useCallback(() => {
        // dispatch안에 들어가는 것은 action객체라고 한다.
        // action만 있다고 해서 state가 바뀌지않는다.
        // 이 action을 해석하여 state를 바꿔주는 것을 reducer라고 한다.
        dispatch({ type: SET_WINNER, winner: 'O' });
    }, [])

    useEffect(() => {
        const [row, cell] = recentCell;
        if (row < 0){
            return ;
        }
        let win = false;
        if (tableData[row][0] === turn && tableData[row][1] === turn && tableData[row][2] === turn) {
            win = true;
        }
        if (tableData[0][cell] === turn && tableData[1][cell] === turn && tableData[2][cell] === turn){
            win = true;
        }
        if (tableData[0][0] === turn && tableData[1][1] === turn && tableData[2][2] === turn){
            win = true;
        }
        if (tableData[0][2] === turn && tableData[1][1] === turn && tableData[2][0] === turn){
            win = true;
        }
        console.log(win, row, cell, turn);
        if (win) {
            dispatch({ type: SET_WINNER, winner: turn });
            dispatch({ type: RESET_GAME })
        } else {
            let all = true; // all === true 는 무승부라는 뜻
            tableData.forEach((row) => { // 무승부인지 확인
                row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                });
            });
            if (all) {
                dispatch({ type: RESET_GAME })
            }
            dispatch({ type: CHANGE_TURN });
        }
    }, [recentCell])

    return(
        <>
            <Table onClick={onClickTable} tableData={tableData} dispatch={dispatch}/>
            {winner && <div>{winner}님의 승리!</div>}
        </>
    )
}

export default TicTacToe;