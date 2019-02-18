import React from 'react';
const Header = ({name, lname}) => {
    console.log(name, lname);
    return (
        <div>Hi {name} {lname}</div>
    );
}

const Footer = () => {
    return (
        <div>footer</div>
    );
}

export {
 Header,
Footer
};