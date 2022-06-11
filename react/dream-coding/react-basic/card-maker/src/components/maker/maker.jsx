import React from 'react';
import {useLocation} from "react-router-dom";

const Maker = () => {
    const { state } = useLocation();

    return (
        <>
            <h1>Maker</h1>
        </>
    );
}

export default Maker;