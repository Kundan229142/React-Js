import React from 'react'

function Page(props) {
// function Page(val1, val2, val3, fun1) {
    return (
        <>

            <div>{props.val1}</div>
            <div>{props.val2}</div>
            <div>{props.val3}</div>
            <div>{props.clickhere()}</div>

            {/* <div>{val1}</div>
            <div>{val2}</div>
            <div>{val3}</div>
            <div>{fun1()}</div> */}

        </>
    )
}

export default Page