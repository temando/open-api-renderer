const methodWeights = {
  GET: 1,
  POST: 2,
  PUT: 3,
  DELETE: 4,
  HEAD: 5,
  OPTIONS: 6,
  TRACE: 7,
  CONNECT: 8
};

/**
 * Sort function
 *
 * @param {String} str1
 * @param {String} str2
 *
 * @return {number}
 */
export function sortByAlphabet(str1, str2) {
  if (str1 < str2) {
    return -1;
  } else if (str1 > str2) {
    return 1;
  } else {
    return 0;
  }
}

/**
 * Sort function
 *
 * @param {String} inMethod1
 * @param {String} inMethod2
 *
 * @return {number}
 */
export function httpMethodSort(inMethod1, inMethod2) {
  const method1 = inMethod1.toUpperCase();
  const method2 = inMethod2.toUpperCase();

  return methodWeights[method1] - methodWeights[method2];
}

