import React from 'react';
import './index.css';

export default ({ title = '', children, extra, style = {} }) => {
    return (
        <div className="card">
            <div className="card-header" style={{ ...style }}>
                <span className="card-header-title">{title}</span>
                {
                    extra
                        ? (
                            <span className="card-header-extra">
                                {extra}
                            </span>
                        )
                        : null
                }
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}