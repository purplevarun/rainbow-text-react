import RainbowText from 'rainbow-text-react'
function App() {
    return (
        <div className="App">
            <RainbowText fontWeight={700}>Nice Rainbow</RainbowText>
            <div style={{ backgroundColor: 'black' }}>
                <RainbowText fontWeight={700} colorMode="dark">
                    Dark Rainbow
                </RainbowText>
            </div>
        </div>
    )
}

export default App
