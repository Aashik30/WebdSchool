import React from 'react';
import useCounter from './hooks/useCounter';
import './App.css';

const Counter = () => {
    const count1 = useCounter(21, 1000); 
    const count2 = useCounter(20000, 8000); 
    const count3 = useCounter(100, 1000); 
    const count4 = useCounter(500, 1000);
    
  return (
    <div className="gridLayout">
        <div className="Boxes aos-init aos-animate" data-aos="fade-up" data-aos-duration="3000"> 
            <div className="Boxes-1">
                <div className="Box-1 box">
                    <h2 className="counter">{count1}+</h2>
                    <h4>Years Of Expertise</h4>
                </div>
                <div className="Box-2 box">
                    <h2 className="counter">{count2}+</h2>
                    <h4>Hours Tutored</h4>
                </div>
            </div>
            <div className="Boxes-2">
                <div className="Box-3 box">
                    <h2 className="counter">{count3}+</h2>
                    <h4>Arts Completed</h4>
                </div>
                <div className="Box-4 box">
                    <h2 className="counter">{count4}+</h2>
                    <h4>Active Students</h4>
                </div>   
            </div> 
        </div>
    </div>
  )
}

export default Counter
