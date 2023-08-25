import React from 'react';
import './Schedule.css';

export const Table = ({className = '', children}) => {
    const currentClassName = 'table table-bordered ' + className;
   return (
        <table className={currentClassName}>
            {children}
        </table>
    );
};
