import React, { useEffect, useState } from 'react'
import './Click.css'

export default function ClickCounter() {

    const [count, setCount] = useState(0);

    function handleButtonClicked() {
        setCount(count + 1);
    }

    useEffect(() => {
        if (count > 0) {
            alert("Count updated! New count: " + count)
        }
    }, [count])

    return (
        <div className="state">
            <span className="count">Count: {count}</span>
            <button onClick={handleButtonClicked}>
                +
            </button>
        </div>
    );
}
