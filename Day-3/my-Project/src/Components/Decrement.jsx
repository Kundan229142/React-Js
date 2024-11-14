import React from 'react'

function Decrement(Props) {
    return (
        <>
            <div>Decrement Page</div>
            <button onClick={
                ()=>{
                    Props.setCount(Props.count-1);
                }
            }
            
            >Click Here</button>
        </>
    )
}

export default Decrement