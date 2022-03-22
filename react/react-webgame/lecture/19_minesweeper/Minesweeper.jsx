import React, {useReducer, createContext, useMemo} from "react";
import Table from "./Table"
import Form from "./Form";

export const CODE = {
    MINE: -7,
    NORMAL: -1,
    QUESTION: -2,
    FLAG: -3,
    QUESTION_MINE: -4,
    FLAG_MINE: -5,
    CLICKED_MINE: -6,
    OPENED: 0,
}

export const TableContext = createContext({
    tableData: [],
    halted: false,
    dispatch: () => {},
});

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const NORMALIZE_CELL = "NORMALIZE_CELL";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";

const initialState = {
    tableData: [],
    timer: 0,
    result: '',
    halted: false,
};

const plantMine = (row, cell, mine) => {
    console.log(row, cell, mine);
    const candidate = Array(row * cell).fill().map((arr, i) => {
        return i;
    });

    const shuffle = [];
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }

    const data = [];
    for (let i = 0; i < row; i++){
        const rowData = [];
        data.push(rowData);
        for (let j = 0; j < cell; j++) {
            rowData.push(CODE.NORMAL);
        }
    }

    for (let k = 0; k < shuffle.length; k++){
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % cell;
        data[ver][hor] = CODE.MINE;
    }
    console.log(data);
    return data;
};

// State를 어떻게 바꿀지 적어주는 것이 reducer
const reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;

        case START_GAME: {
            return {
                ...state,
                tableData: plantMine(action.row, action.cell, action.mine),
                halted: false,
            }
        }
        case OPEN_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.OPENED;
            let around = [];
            if (tableData[action.row - 1]) {
                around  = around.concat(
                    tableData[action.row - 1][action.cell - 1],
                    tableData[action.row - 1][action.cell],
                    tableData[action.row - 1][action.cell + 1],
                );
            }
            around = around.concat(
                tableData[action.row][action.cell - 1],
                tableData[action.row][action.cell + 1]
            );
            if (tableData[action.row + 1]) {
                around = around.concat(
                    tableData[action.row + 1][action.cell - 1],
                    tableData[action.row + 1][action.cell],
                    tableData[action.row + 1][action.cell + 1],
                )
            }
            const count = around.filter((v) => [CODE.MINE, CODE.FLAG_MINE, CODE.QUESTION_MINE].includes(v)).length;
            tableData[action.row][action.cell] = count;
            return {
                ...state,
                tableData,
            }
        }
        case CLICK_MINE: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            tableData[action.row][action.cell] = CODE.CLICKED_MINE;
            return {
                ...state,
                tableData,
                halted: true,
            }
        }

        case QUESTION_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if (tableData[action.row][action.cell] === CODE.FLAG_MINE) {
                tableData[action.row][action.cell] = CODE.QUESTION_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.QUESTION;
            }
            return {
                ...state,
                tableData,
            }
        }
        case FLAG_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if (tableData[action.row][action.cell] === CODE.MINE) {
                tableData[action.row][action.cell] = CODE.FLAG_MINE;
            } else {
                tableData[action.row][action.cell] = CODE.FLAG;
            }
            return {
                ...state,
                tableData,
            }
        }

        case NORMALIZE_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...state.tableData[action.row]];
            if (tableData[action.row][action.cell] === CODE.MINE) {
                tableData[action.row][action.cell] = CODE.MINE;
            } else {
                tableData[action.row][action.cell] = CODE.NORMAL;
            }
            return {
                ...state,
                tableData,
            }
        }
    }
}

const Minesweeper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tableData, halted, timer, result } = state;

    const value = useMemo(() => ({
        tableData,
        dispatch,
        halted,
    }), [tableData, halted])

    return(
        // Provider로 전달해줄 값을 설정하기
        <TableContext.Provider value={value}>
            <Form dispatch={dispatch}/>
            <div>{timer}</div>
            <Table />
            <div>{result}</div>
        </TableContext.Provider>
    )
}

export default Minesweeper;