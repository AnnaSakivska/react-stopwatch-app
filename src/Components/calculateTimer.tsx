function calculateTimer(givenTimeInSeconds: number): Array<string|number> {
  let hours: number = Math.floor(givenTimeInSeconds / 3600);
  let mins: number = Math.floor((givenTimeInSeconds - (hours * 3600)) / 60);
  let secs: number = givenTimeInSeconds - (hours * 3600) - (mins * 60);

  return [
    hours < 10 ? `0${hours}` : hours,
    mins < 10 ? `0${mins}` : mins,
    secs < 10 ? `0${secs}` : secs
  ];
}

export default calculateTimer;