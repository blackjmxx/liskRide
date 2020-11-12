import { connect } from 'react-redux'
import {registerUserProfile, receiveUserLogIn, logIn, displayError, registerUser  } from '../../modules/settings/actions'
import CarPage from '../../pages/CarPage'

const mapStateTopProps = (state) => {
  return {
    user: state.settings.user,
  }
}

const mapActionCreators = {
  registerUserProfile,
}
export default connect(mapStateTopProps, mapActionCreators)(CarPage)