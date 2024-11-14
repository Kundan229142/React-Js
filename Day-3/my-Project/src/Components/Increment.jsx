import React from 'react'

function Increment(Props) {
    return (
        <>
            <div>Increment</div>
            <button onClick={
                () => {
                    Props.setCount(Props.count + 1);
                }
            }>
                Click Here
            </button>
        </>
    )
}

export default Increment