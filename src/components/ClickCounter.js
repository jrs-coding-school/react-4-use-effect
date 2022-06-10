import React, { useEffect, useState } from 'react'
import { useToasts } from '../toasts/ToastService';
import './Click.css'

export default function ClickCounter() {

    const [count, setCount] = useState(0);
    const toasts = useToasts();

    function handleButtonClicked() {
        setCount(count + 1);
        toasts.info("button clicked. Count: " + count)
    }

    useEffect(() => {
        if (count > 0) {
            toasts.success("Count updated. Count: " + count)
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
