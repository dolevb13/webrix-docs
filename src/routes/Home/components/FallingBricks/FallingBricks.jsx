import React, {useRef, useEffect, useCallback} from 'react';
import {Divider} from 'components';
import Worker from 'worker-loader!./FallingBricks.worker.js';
import './FallingBricks.scss';

const oscSupported = canvas => (
    'OffscreenCanvas' in window && 'transferControlToOffscreen' in canvas
);

/**
 * This component spawns a webworker for rendering the 3D scene in a thread
 * parallel to the main thread, to avoid blocking it and improve performance.
 */
const FallingBricks = () => {
    const canvas = useRef();
    const engine = useRef();
    const worker = useRef(new Worker());

    const handleOnResize = useCallback(() => {
        if (oscSupported(canvas.current)) {
            const {clientWidth, clientHeight} = canvas.current;
            worker.current.postMessage({type: 'resize', size: {width: clientWidth, height: clientHeight}});
        } else {
            engine.current.resize();
        }
    }, []);

    useEffect(() => {
        const wrk = worker.current;
        if (oscSupported(canvas.current)) {
            canvas.current.width = canvas.current.clientWidth;
            canvas.current.height = canvas.current.clientHeight;
            const offscreen = canvas.current.transferControlToOffscreen();
            wrk.postMessage({type: 'canvas', canvas: offscreen}, [offscreen]);
        } else {
            import('./scene').then(({Engine}) => {
                engine.current = new Engine(canvas.current);
            });
        }
        window.addEventListener('resize', handleOnResize);
        return () => {
            window.removeEventListener('resize', handleOnResize);
            wrk.terminate();
        }
    }, [handleOnResize]);

    return (
        <>
            <canvas id='scene' ref={canvas}/>
            <Divider className='scene'/>
        </>
    );
}

export default FallingBricks;