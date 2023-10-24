import React from 'react'

const Header = () => {
    const headerStyle = {

        backgroundColor: "skyblue",
        color: "white",
        padding: "5px",
        borderRadius: "5px"

    }
    return (
        <header style={headerStyle}>
            <h1>WELCOME TO REACT JS CLASS </h1>
            <h2 style={{ color: 'black' }}>WELCOME TO DLT AFRICA BOOT CAMP</h2>
        </header>
    )
}

export default Header
