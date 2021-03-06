'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var parseFormat = function parseFormat(a) {
  var split = a.split('1');
  return {
    left: split[0].length,
    right: split[1].length
  };
};

exports.parseFormat = parseFormat;
var isNumber = function isNumber(a) {
  return !isNaN(+a);
};

exports.isNumber = isNumber;
var parseNumbers = function parseNumbers(a) {
  return a.map(function (b) {
    if (isNumber(b)) {
      return parseFloat(b);
    }
    if (Array.isArray(b)) {
      return parseNumbers(b);
    }
    return b;
  });
};

exports.parseNumbers = parseNumbers;
var dive = function dive(arr, n) {
  var result = arr;
  for (var i = 0; i < n; ++i) {
    result = result[result.length - 1];
  }
  return result;
};

exports.dive = dive;
var deep = function deep(arr, n) {
  var index = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

  if (n < 2) {
    return { arr: arr, index: index };
  }

  var d = arr.reduce(function (a, b, i) {
    if (Array.isArray(b)) {
      var _deep = deep(b, n - 1, i);

      var _arr = _deep.arr;
      var x = _deep.index;
      var merged = a.concat(_arr);

      index = x;
      return merged;
    }
    return a;
  }, []);

  return { arr: d, index: index };
};

exports.deep = deep;
var diveTo = function diveTo(arr, indexes, replace) {
  var answer = [];
  if (indexes.some(Array.isArray)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = indexes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var index = _step.value;

        answer.push(diveTo(arr, index, replace));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else {
    arr[indexes[0]] = replace;
    return replace;
  }

  return answer;
};

exports.diveTo = diveTo;
var flatten = function flatten(arr) {
  if (!Array.isArray(arr) || !arr.some(Array.isArray)) {
    return arr;
  }

  return arr.reduce(function (a, b) {
    return a.concat(flatten(b));
  }, []);
};

exports.flatten = flatten;
var removeSymbols = function removeSymbols(string) {
  return string.toString().replace(/\W/g, '');
};
exports.removeSymbols = removeSymbols;
