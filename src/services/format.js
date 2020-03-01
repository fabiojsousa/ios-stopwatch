export default function(time) {
  const allSec = time / 1000;
  const min = Math.floor(allSec / 60);
  const sec = Math.floor(allSec % 60);
  const msec = (allSec % 1).toFixed(2).substring(2);

  let allData = {
    totalTime: allSec,
    minutes: min >= 10 ? min : `0${min}`,
    seconds: sec >= 10 ? sec : `0${sec}`,
    miliseconds: msec,
  };

  allData.formatedTime = `${allData.minutes}:${allData.seconds}.${allData.miliseconds}`;

  return allData;
}
