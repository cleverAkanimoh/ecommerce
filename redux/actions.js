import * as actions from './action-types'

export function actionsCreator(desc) {
    return {
        type: actions.Bug_Added,
        payload: {
          description: desc
        }
      }
}

export function actionsRemover(id) {
    return {
      type: actions.Bug_Removed,
      payload: {
        id
      }
    }
}

export const actionsResolver = id => ({
  type: actions.Bug_Resolved,
      payload: {
        id
      }
})