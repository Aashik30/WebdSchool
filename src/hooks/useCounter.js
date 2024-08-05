// src/hooks/useCounter.js
import { useState, useEffect } from 'react';

const useCounter = (target, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target, 10);
        const increment = end / (duration / 50); // Calculate increment value for each step

        const updateCount = () => {
            start += increment;
            if (start < end) {
                setCount(Math.ceil(start));
            } else {
                setCount(end);
                clearInterval(timer);
            }
        };

        const timer = setInterval(updateCount, 50); // Update every 50ms for smooth counting

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [target, duration]);

    return count;
};

export default useCounter;
