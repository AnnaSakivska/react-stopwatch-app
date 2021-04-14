import React, { useEffect, useState } from 'react';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import './Main.css';
import calculateTimer from '../calculateTimer';
import Controls from '../Controls/Controls';

function Main() {
  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number|string>>([]);
  const [timeOn, setTimeOn] = useState<boolean|any>(false);

  useEffect(() => {
      const subscription$ = new Subject();
      timer(0, 1000)
          .pipe(takeUntil(subscription$))
          .subscribe(() => {
              if (timeOn) {
                setTimeInSeconds(val => val + 1);
              }
          });
      return () => {
          subscription$.next();
          subscription$.unsubscribe();
      };

  }, [timeOn]);

  useEffect(() => {
    let timeArray: Array<number|string> = calculateTimer(timeInSeconds);
    setTimerArray(timeArray);
  }, [timeInSeconds]);

  return (
    <div className="container">
      <div className="stopwatch-wrapper">
        <h1>
          <span className="time">{timerArray[0]}</span>:
          <span className="time">{timerArray[1]}</span>:
          <span className="time">{timerArray[2]}</span>
        </h1>
        <Controls timeOn={timeOn} setTimeOn={setTimeOn} timeInSeconds={timeInSeconds} setTimeInSeconds={setTimeInSeconds} />
      </div>
    </div>
  );
}

export default Main;
