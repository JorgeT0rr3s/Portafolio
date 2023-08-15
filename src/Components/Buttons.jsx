import React from 'react';

export default function Buttons({ onClick, Bcolor, text, to, icon, tcolor, border }) {
    const buttonStyle = {
        backgroundColor: Bcolor,
        padding: '5px 10px',
        border: border,
        borderRadius: '10px',
        color: tcolor,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
    };

    const iconStyle = {
        marginLeft: '5px',
        width: '1.5rem',
        height: '1.5rem'
    };

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
        if (to) {
            window.location.href = to;
        }
    };

    return (
        <button style={buttonStyle} onClick={handleClick}>
            {text}
            {icon && React.cloneElement(icon, { style: iconStyle })}
        </button>
    );
}