import React from 'react';
import './Wrapper.css';
const Wrapper = (props) => {
    return (
        <section className="card__wrapper">
            {props.children}
        </section>
    )
}

export default Wrapper;