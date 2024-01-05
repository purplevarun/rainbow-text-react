import React from 'react'
import Dark from './dark/Dark'
import Light from './light/Light'

const index = ({ children, fontSize, fontWeight, colorMode }) => {
    const helperProps = { children, fontSize, fontWeight }
    return (
        <div>
            {colorMode === 'dark' ? (
                <Dark {...helperProps} />
            ) : (
                <Light {...helperProps} />
            )}
        </div>
    )
}
export default index
