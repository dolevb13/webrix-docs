import React, {useCallback, useRef} from 'react';
import getParameters from './Sandboxer.parameters';
import {FaPen} from 'react-icons/fa';

/**
 * This component creates a button that, once clicked, will open a codesandbox with the given code.
 * We use a form to perform a POST request since a GET request is too limited in size.
 */
const Sandboxer = ({code, style}) => {
    const form = useRef();
    const handleOnCLick = useCallback(() => {
        form.current.submit()
    }, []);

    return (
        <>
            <form action='https://codesandbox.io/api/v1/sandboxes/define' method='POST' target='_blank' ref={form}>
                <input type='hidden' name='parameters' value={getParameters({code, style})}/>
            </form>
            <FaPen onClick={handleOnCLick} data-title='Edit on CodeSandbox'/>
        </>
    );
};

export default Sandboxer;