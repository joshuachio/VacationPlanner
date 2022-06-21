import React from 'react';

const Employee = (props) => {

    const { firstName: employeeName, lastName } = props;

    return (
        <h1>Employee Name: {employeeName} {lastName}</h1>
    );
};

export default Employee