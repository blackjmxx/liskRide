import { connect } from 'react-redux'
import {registerUserProfile, receiveUserLogIn, logIn, displayError, registerUser , loadUserBalance } from '../../modules/settings/actions'
import { selectAndChangeCardId, loadLoyaltyCards } from '../../modules/home/actions';
import {loadLoyaltyCard} from '../../modules/home/actions'
import SettingsPage from '../../pages/SettingsPage'

const mapStateTopProps = (state) => {
  return {
    user: state.settings.user,
    card: state.home.card,
    fakeId:undefined,
    error:state.settings.error,
    cards:state.home.cards,
    isLoadingUser:state.settings.isLoadingUser,
  }
}

const mapActionCreators = {
  registerUserProfile,
  registerUser,
  receiveUserLogIn,
  loadLoyaltyCard,
  selectAndChangeCardId,
  logIn,
  displayError,
  loadLoyaltyCards,
  loadUserBalance
}
export default connect(mapStateTopProps, mapActionCreators)(SettingsPage)