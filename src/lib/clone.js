import { cloneDeep } from 'lodash'

/** Unsafe JSON clone */
// export const clone = (obj) => JSON.parse(JSON.stringify(obj))
export const clone = cloneDeep
