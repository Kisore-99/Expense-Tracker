//Money formatter function
export default function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  console.log(p[0].split("").reverse());
  return (
    "Rs " +
    (p[0].split("")[0] === "-" ? "-" : "") +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}