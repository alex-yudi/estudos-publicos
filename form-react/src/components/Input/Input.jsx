import { useState } from 'react'
import './Input.css'

function Input({ ...rest }) {

    return (
        <>
            <input
                name='input'
                {...rest}
            />
        </>
    )
}

export default Input