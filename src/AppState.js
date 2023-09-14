import { reactive } from 'vue'
import { Blog } from './models/Blog.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**
 * @type {Blog[]}
 */
  blogs: [],

  /**@Type */
  activeBlog: null,

  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {}
})
