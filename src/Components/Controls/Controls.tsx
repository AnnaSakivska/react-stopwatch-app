import React from 'react';

import './Controls.css';

function Controls({ timeOn, setTimeOn, timeInSeconds, setTimeInSeconds }: any) {
  const resetHandler = () => {
    setTimeInSeconds(0);
    setTimeOn(false);
  };

  return (
    <section className="stopwatch-btns">
      {(!timeOn && !timeInSeconds) && <button className="large ui teal button" onClick={() => setTimeOn(true)}>Start</button>}
      {timeOn && <button className="large ui teal button" onClick={() => setTimeOn(false)}>Stop</button>}
      {(!timeOn && timeInSeconds > 0) && <button className="large ui teal button" onClick={() => setTimeOn(true)}>Wait</button>}
      {timeInSeconds > 0 && <button className="large ui teal button" onClick={resetHandler}>Reset</button>}
    </section>
  )
}

export default Controls;
