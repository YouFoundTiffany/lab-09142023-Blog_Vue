import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**
 * @type {Blog[]}
 */
  blogs: [],

  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type { String }*/
  searchTerm: '',
})

