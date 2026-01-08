import React from 'react';
import './Menu.css';
const Menu = (props) => {
    const {items} = props;
    return (
        <nav className="nav">
            <ul className="nav__list">
                {items.map((item, i) => (
                    <a key={i} href={item.link} className="nav__list-item">
                        <li >{item.name}</li>
                    </a>
                ))}
            </ul>
        </nav>
    )
}

export default Menu;