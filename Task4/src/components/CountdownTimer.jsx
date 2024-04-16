import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
    const[seconds, setSeconds] = useState(3);
    const minute = String(Math.floor(seconds / 60)).padStart(2, '0');
    const second = String(seconds % 60).padStart(2, '0');

    useEffect(() => {
        const intervalId =setInterval(() => {
            setSeconds((s) => Math.max(s-1, 0));  
        }, 1000);
        return () =>clearInterval(intervalId)
    }, []);
    
    return (
        <div>
            {minute}: {second}
        </div>
    );
};

export default CountdownTimer;
