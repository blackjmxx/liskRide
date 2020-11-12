import {
  RECEIVE_USER_LOG_IN,
  FETCH_USERPROFILE_FAILURE,
  FETCH_USERPROFILE_SUCCESS,
  FETCH_USERPROFILE_REQUEST,
  RECEIVE_USER_BALANCE
} from './actions'

const initState = {
  isLoadingUser: false,
  error: null,
  profile:undefined
}

export default function settingsReducer (state = initState, action) {
  switch (action.type) {
    case FETCH_USERPROFILE_REQUEST:
      return {
        ...state,
        isLoadingUser: true
      }
      case RECEIVE_USER_LOG_IN:
        return {
          ...state,
          error: false,
          user:action.user,
          isLoadingUser: false
        }
      case RECEIVE_USER_BALANCE:
        
          return {
            ...state,
            error: false,
            user:{
              ...state.user,
              balance:action.balance
            },
          }
    case FETCH_USERPROFILE_FAILURE:{
        return {
          ...state,
          error:action.error,
          isLoadingUser: false
        }
      }
    case FETCH_USERPROFILE_SUCCESS:{
      return {
        ...state,
        profile: action.payload,
        isLoadingUser: false
      }
    }
    default:
      return state
  }
}
