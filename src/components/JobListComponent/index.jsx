import React from 'react';
import './index.css';

export default ({ data = {} }) => {
    const { name, area, time, url } = data;
    return (
        <li className="li-warp">
            <a href={url} target="_blank">{name}</a>
            <span>{area}</span>
            <span>{time}</span>
        </li>
    );
}