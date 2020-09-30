function isValidArray(array) {
  if (array === undefined || array.length === 0) {
    return false;
  }

  return true;
}

exports.min = function min(array) {
  if (!isValidArray(array)) {
    return 0;
  }

  return Math.min(...array);
};

exports.max = function max(array) {
  if (!isValidArray(array)) {
    return 0;
  }

  return Math.max(...array);
};

exports.avg = function avg(array) {
  if (!isValidArray(array)) {
    return 0;
  }

  let sum = array.reduce((accum, current) => accum + current, 0);
  return sum / array.length;
};
