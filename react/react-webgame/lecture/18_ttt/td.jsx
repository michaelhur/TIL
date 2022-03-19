import React, {useCallback, useEffect, useRef, memo } from "react";
import { CLICK_CELL } from "./TicTacToe";

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
    console.log("td rendered");

    // 어떤게 리렌더링 되는지 확인하는 방법!
    // const ref = useRef([]);
    // useEffect(() => {
    //     console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3])
    //     console.log("cellData", "ref.current[3]")
    //     console.log(cellData, ref.current[3]);
    //     ref.current = [rowIndex, cellIndex, dispatch, cellData]
    //     // console.log가 true, true, true, false가 나옴. cellData가 바뀌어서 계속 re-rendering되는 문제!
    // }, [rowIndex, cellIndex, dispatch, cellData])

    const onClickTd = useCallback(() => {
        if (cellData){
            return;
        }
        dispatch({ type: CLICK_CELL, row: rowIndex, cell: cellIndex });
    }, [cellData]);

    return(
        <>
            <td onClick={onClickTd}>{cellData}</td>
        </>
    )
})

export default Td;