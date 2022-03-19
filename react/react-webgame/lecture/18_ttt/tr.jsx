import React, { memo }from "react";
import Td from "./td"

const Tr = memo(({rowIndex, rowData, dispatch}) => {
    return(
        <>
            <tr>
                {Array(rowData.length).fill().map((td, i) =>
                    <Td rowIndex={rowIndex}
                        cellIndex={i}
                        dispatch={dispatch}
                        cellData={rowData[i]}/>)}
            </tr>
        </>
    )
})

export default Tr;