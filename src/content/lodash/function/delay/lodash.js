// https://lodash.com/docs/#delay
import { delay } from 'lodash'

module.exports = fn => delay(fn, 1000, 'later')
// => check the tests for more details
