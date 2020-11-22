import { connect } from 'react-redux'
import CarPage from '../../pages/CarPage'

const mapStateTopProps = (state) => {
  return {
    user: state.settings.user,
  }
}

const mapActionCreators = {
}
export default connect(mapStateTopProps, mapActionCreators)(CarPage)