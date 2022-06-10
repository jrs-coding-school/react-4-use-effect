import React, { useEffect, useState } from 'react'
import { useToasts } from '../toasts/ToastService';
import './Demo.css'

export default function UseEffectDemo() {

    const [childVisible, setChildVisible] = useState(false)

    return (
        <div className="demo-root">
            {/* click to create component */}
            {/* if false click to destroy */}
            {childVisible
                ? <button onClick={() => setChildVisible(false)}>Destroy Component</button>
                : <button onClick={() => setChildVisible(true)}>Init Component</button>
            }
            {/* click to update */}
            <div className="child-container">
                {childVisible
                    ? <ComponentWithEffects />
                    : <span className="waiting">waiting for initialization...</span>
                }
            </div>
        </div>
    )
}

function ComponentWithEffects() {

    const toasts = useToasts();
    const [count, setCount] = useState(0);

    function increment() {
        setCount(n => n + 1);
    }

    useEffect(() => {
        // on init
        toasts.add({
            summary: "onInit",
            message: "Component was initialized!",
            status: 'success'
        });
    }, [])
    useEffect(() => {
        // on all updates
        // toasts.info("on all updates") // this causes infinite loop :(
        console.log("on all updates");
    })
    useEffect(() => {
        // on state update
        toasts.add({
            summary: "onUpdate",
            message: "Count was updated. New count: " + count,
            status: 'info'
        });
    }, [count])
    useEffect(() => {
        return (() => {
            // toasts.error("Component destroyed!")
            toasts.add({
                summary: "onDestroy",
                message: "Component was destroyed!",
                status: 'error'
            });
        });
    }, []);

    return (
        <div>
            <span>{count}</span>
            <button type="button" onClick={increment}>
                +
            </button>
        </div>
    )
}