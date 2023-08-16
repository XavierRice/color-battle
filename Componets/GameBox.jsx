import { useState } from "react";

const GameBox = ({ setCount }) => {



    let num = Math.floor(Math.random() * 3) + 1
    console.log(num)

    return (
        <div key="container">
            <div key="playOne" style={{ backgroundColor: "green" }}>

                <div key="button" onClick={() => setCount((count) => count + num)}>
                        <h4>Hit</h4>
                </div>
            </div>
            <div key="playTwo" style={{ backgroundColor: "blue" }}>

                <div key="button" onClick={() => setCount((count) => count + num)}>
                        <h4>Hit</h4>
                </div>

            </div>
        </div>
    );
};

export default GameBox;
