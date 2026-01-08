import React from 'react';
import './Logo.css';
const Logo = (props) => {
    const {url, title} = props;
    return (
        <div className="logo">
            <img src={url} alt={title} className="logo__img"/>
            <span className="logo__title">{title}</span>
        </div>
    )
}

export default Logo;