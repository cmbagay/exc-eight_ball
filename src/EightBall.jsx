import React, { useState } from "react";
import ansArr from "./Answers.js";
// import { getRdmIdx } from "./randomIndex.js";

function EightBall({ Answers = ansArr }) {
    const [answ, setColor] = useState({
        msg: "Think of a Question",
        color: "black",
    })

    function getRdmIdx(arr) {
        let rdmIdx = Math.floor(Math.random() * arr.length);
        return arr[rdmIdx];
    }

    function handleClick() {
        setColor(getRdmIdx(Answers));
    }

    return (
        <div className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answ.color }}>

            <b>{answ.msg}</b>
        </div>
    );
}

export default EightBall;