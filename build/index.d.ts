// @ts-ignore
import React from 'react'

export interface Props {
    colorMode?: 'light' | 'dark'
    fontSize?: number
    fontWeight?: number
    children: React.ReactNode
}

declare const RainbowText: (props: Props) => React.SFC<Props>

export default RainbowText
