import { myConstants } from './my.constant';

export function myReducer(state = {}, action) {
  switch (action.type) {
    case myConstants.GET_REQUEST:
      return {
        loading: true
      };
    case myConstants.GET_SUCCESS:
      return {
        item: action.users
      };
    case myConstants.GET_FAILURE:
      return {
        error: action.error
      };

    case myConstants.UPDATE_REQUEST:
      // add 'deleting:true' property to user being deleted
      // return {
      //   ...state,
      //   items: state.items.map(user =>
      //     user.id === action.id
      //       ? { ...user, deleting: true }
      //       : user
      //   )
      // };
      return {
        updating: true
      };
    case myConstants.UPDATE_SUCCESS:
      // remove deleted user from state
      // return {
      //   items: state.items.filter(user => user.id !== action.id)
      // };
      return {};
    case myConstants.UPDATE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      // return {
      //   ...state,
      //   items: state.items.map(user => {
      //     if (user.id === action.id) {
      //       // make copy of user without 'deleting:true' property
      //       const { deleting, ...userCopy } = user;
      //       // return copy of user with 'deleteError:[error]' property
      //       return { ...userCopy, deleteError: action.error };
      //     }
      //
      //     return user;
      //   })
      // };
      return {};
    default:
      return state
  }
}
