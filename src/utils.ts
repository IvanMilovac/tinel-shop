export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getDateAndTime = (str: string) => {
  if (!str) return;
  var currentdate = new Date(str);
  var date =
    currentdate.getDate() +
    "." +
    (currentdate.getMonth() + 1) +
    "." +
    currentdate.getFullYear() +
    ".";
  var time =
    ("0" + currentdate.getHours()).slice(-2) +
    ":" +
    ("0" + currentdate.getMinutes()).slice(-2);
  return { wsDate: date, wsTime: time };
};

export const twoDecimalNumber = (num: number) => {
  const formattedNum = (Math.round(num * 100) / 100).toFixed(2);
  return String(formattedNum).replace(".", ",");
};

export const stringSlicer = (s: string, len: number): string => {
  return `${
    s?.length > len ? s?.substring(0, len) + "..." : s?.substring(0, len)
  }`;
};
