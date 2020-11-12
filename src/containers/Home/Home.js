import { connect } from 'react-redux'
import { loadLoyaltyCard, fetchInitLoyaltyCard, loadCachedLoyaltyCard, loadLoyaltyFakeCard, loadLoyaltyCards, loadLoyaltyCardsWithAnonymousUser, selectAndChangeCardId , restartCard, updateTravels} from '../../modules/home/actions'
import HomePage from '../../components/HomePage/HomePage'
import { receiveUserLogIn } from '../../modules/settings/actions'

const mapStateTopProps = (state) => {
  return {
    isLoadingCard: state.home.isLoadingCard,
    currentCard: state.home.currentCard,
    error: state.home.error,
    card: state.home.card,
    cards: state.home.cards
  }
}

const mapActionCreators = {
  loadLoyaltyCard,
  fetchInitLoyaltyCard,
  loadCachedLoyaltyCard,
  loadLoyaltyFakeCard,
  loadLoyaltyCards,
  loadLoyaltyCardsWithAnonymousUser,
  selectAndChangeCardId,
  receiveUserLogIn,
  restartCard,
  updateTravels
}

export default connect(mapStateTopProps, mapActionCreators)(HomePage)
