import React from 'react'
import './Light.css'
const Light = ({ children, fontSize, fontWeight }) => {
    return (
        <span
            id="rainbow-text-light"
            style={{
                fontSize: fontSize ? fontSize : 50,
                fontWeight: fontWeight ? fontWeight : 500,
            }}
        >
            {children}
        </span>
    )
}

export default Light
