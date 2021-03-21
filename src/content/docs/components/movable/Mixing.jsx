import React, {useState, useRef, useMemo} from 'react';
import {Movable} from 'webrix/components';
import './Mixing.scss';

export default () => {
    const [position, setPosition] = useState({});
    const movable = useRef();
    const container = useRef();
    const {reposition, update, snap, contain} = Movable.Operations;
    const props = Movable.useMove(useMemo(() => [
        reposition(movable),
        snap(1, 25),
        contain(movable, container),
        update(setPosition),
    ], []));

    return (
        <>
            <div className='container' ref={container}/>
            <Movable {...props} ref={movable} style={position}>
                I snap to a 1x25 grid
            </Movable>
        </>
    );
}