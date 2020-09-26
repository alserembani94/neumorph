import {
    useEffect,
    MutableRefObject,
} from 'react';

// Use this hook if want to handle clicks outside of an element
export const useOnClickOutside = (ref: MutableRefObject<HTMLElement | null>, handler: any) => {
    useEffect(() => {
        const listener = (event: any) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };

        // Start listening to mouse and touch event
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        
        // Detach listeners after events
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    },

    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
    );
};