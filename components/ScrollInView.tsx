'use client';
import * as React from 'react';

const ScrollInView = () => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);

        return () => clearTimeout(timeoutId);
    }, [ref])

    return (
        <div ref={ref} className='h-2 bg-red-400' />
    )
}

export default ScrollInView;