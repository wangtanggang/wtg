import React, { useEffect, useState, useRef } from 'react';
import './index.css';

let timer = null, height = 0;

export default ({ children }) => {
    const [top, setTop] = useState(0), u = useRef(null);

    useEffect(
        () => {
            if(!u) return;
            height = Math.abs(u.current.clientHeight) / 2;
            _setInterval();
            return () => clearInterval(timer);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const _setInterval = () => {
        timer = setInterval(() => {
            setTop(top => (Math.abs(top) >= height) ? 0 : top - 1);
        }, 40);
    };
    return (
        <ul
            ref={u}
            style={{ top }}
            className="ul-wrap"
            onMouseEnter={() => clearInterval(timer)}
            onMouseLeave={() => _setInterval()}
        >
            {children}
        </ul>
    );
}