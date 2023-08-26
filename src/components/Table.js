import React from 'react';

export const Table = ({className = '', children}) => {
    const currentClassName = 'table table-bordered ' + className;
   return (
        <table className={currentClassName}>
            {children}
        </table>
    );
};
