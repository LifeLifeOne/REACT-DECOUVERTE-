import React from 'react'
import '../css/header.css'

const Header = () => {
    const title = "Vente de chaussures à emporter!";
    return (
        <div className="header">
            <h1>{title.toUpperCase()}</h1>
        </div>
    )
}

export default Header
