import React, { startTransition, useEffect, useState } from 'react';

const WindowSize = () => {

    const[width, setWidth] = useState(0)

    useEffect(() => {
        const listen = () => {
            startTransition(() => {
                setWidth(window.innerWidth);
            });
        };
        listen();
        window.addEventListener("resize", listen);
        
        return() => {
            window.removeEventListener("resize", listen);
        };


    }, []);

    return (
        <div>
           {width} 
        </div>
    );
};

export default WindowSize;