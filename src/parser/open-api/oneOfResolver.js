import cloneDeep from 'lodash/cloneDeep'
import get from 'lodash/get'
import update from 'lodash/update'
import toPath from 'lodash/toPath'

/**
 * Recursively determine if the given object has any `oneOf` properties.
 * Returns an array with the paths to those properties (eg. `properties.oneOf`).
 * If no `oneOf` keys were found, an empty array is returned.
 *
 * @param {object} obj
 * @return {array}
 */
function getOneOfPaths (obj) {
  let paths = []
  let walk = function (obj, path = '') {
    for (var k in obj) {
      // Handle if `oneOf` is found at the first level.
      const currentPath = (path === '') ? k : `${path}.${k}`

      if (k === 'oneOf') {
        paths.push(currentPath)
      } else if (typeof obj[k] === 'object' || Array.isArray(obj[k])) {
        walk(obj[k], currentPath)
      }
    }
  }

  walk(obj)

  return paths
}

/**
 * Returns all of the possible states of `obj` when the permutations
 * specified in `paths` are applied.
 *
 * @param {string[]} paths
 * @param {object} obj
 * @return {array}
 */
function getStates (paths, obj) {
  let states = [ ...getStateAt(paths[0], obj) ]

  for (var i = 1; i < paths.length; i++) {
    let state = states.shift()

    while (state) {
      const newStates = getStateAt(paths[i], state)

      // if there are no new states, put this one back and stop
      if (!newStates.length) {
        states.push(state)
        break
      }

      states = states.concat(...newStates)
      state = states.shift()
    }
  }

  return states
}

/**
 * Given a path and an object, return all the new states that exist
 * by merging the options found at `obj.path` into the given object.
 * Returns an array of possible objects
 *
 * @param {string} path
 * @param {object} obj
 * @return {array}
 */
function getStateAt (path, obj) {
  const clonedObj = cloneDeep(obj)
  const states = get(clonedObj, path)

  // Couldn't retrieve the state at this path, bail.
  if (states === undefined) {
    return []
  }

  const parentPath = getParentPath(path)
  return states.map((state) => {
    // No path, so add state to object directly
    if (parentPath === '') {
      return permutate(clonedObj, state)
    }

    // Replace the path with the state
    update(clonedObj, parentPath, (value) => permutate(value, state))

    return cloneDeep(clonedObj)
  })
}

/**
 * Given a path, drop the last segment and return the shortened
 * path, which will be the parent of the given path.
 *
 * @param {string} path
 * @return {string}
 */
function getParentPath (path) {
  let rootPath = toPath(path)
  rootPath.pop()

  return rootPath.join('.')
}

/**
 * Take a object and applies the state to it, returning
 * the resulting object
 *
 * @param {object} obj
 * @param {object} state
 * @return {object}
 */
function permutate (obj, state) {
  delete obj.oneOf

  return { ...obj, ...state }
}

export function resolveOneOf (obj) {
  const paths = getOneOfPaths(obj)
  if (paths.length === 0) {
    return obj
  }

  const states = getStates(paths, obj)

  return {
    oneOf: states
  }
}
