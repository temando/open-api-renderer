import cloneDeep from 'lodash/cloneDeep'

/** Unsafe JSON clone */
// export const clone = (obj) => JSON.parse(JSON.stringify(obj))
export const clone = cloneDeep
