


export const data = {
  isLoesed: false,
  rows: 8,
  cols: 8,
  bombs: 10,
  timers: 0,
  maxFlags: 10,
  timerID: null,
};

const timer = document.querySelector("#timer");

export const isLoesed = (loes = null) => {
  if (loes === null) {
    return data.isLoesed;
  }
  data.isLoesed = loes;
};

export const changeDate = (key = null, newValue) => {
  console.log(key, newValue);
  
  if (key === null) {
    return data;
  }
  data[key] = newValue
  return data[key];
} 

export const timerss = function (nam = 1) {
  let timerID = setInterval(() => {
    changeDate("timers", (data.timers += 1));
    timer.innerHTML = data.timers;
  }, nam * 1000);
  return timerID;
};
