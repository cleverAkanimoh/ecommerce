import * as actions from "./action-types";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.Bug_Added:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.Bug_Removed:
      return state.filter((bug) => bug.id !== action.payload.id);

    case actions.Bug_Resolved:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}
