const methodWeights = {
  GET: 1,
  POST: 2,
  PUT: 3,
  DELETE: 4,
  HEAD: 5,
  OPTIONS: 6,
  TRACE: 7,
  CONNECT: 8
}

/**
 * Sort function
 *
 * @param {String} str1
 * @param {String} str2
 *
 * @return {number}
 */
export function sortByAlphabet (str1, str2) {
  if (str1 < str2) {
    return -1
  } else if (str1 > str2) {
    return 1
  } else {
    return 0
  }
}

/**
 * Sort function
 *
 * @param {String} type1
 * @param {String} type2
 *
 * @return {number}
 */
export function sortByHttpMethod (type1, type2) {
  const normalisedType1 = type1.toUpperCase()
  const normalisedType2 = type2.toUpperCase()

  return methodWeights[normalisedType1] - methodWeights[normalisedType2]
}

/**
 * Sort function
 *
 * @param {type, title} method1
 * @param {type, title} method2
 *
 * return {number}
 */
export function sortByUIMethod (method1, method2) {
  // Sort by method type first
  if (method1.type !== method2.type) {
    return sortByHttpMethod(method1.type, method2.type)
  }

  // Then by method title
  return sortByAlphabet(method1.title, method2.title)
}
