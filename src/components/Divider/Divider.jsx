import React from 'react';
import classNames from 'classnames';

const Divider = ({reverse, className}) => (
    <svg className={classNames('divider', className)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'>
        <path d={reverse ? 'M0 0 L50 100 L100 0 Z' : 'M0 0 L50 100 L101 0 L101 101 L0 101 Z'}/>
    </svg>
);

export default Divider;