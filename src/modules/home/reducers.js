import {
  FETCH_LOYALTYCARD_FAILURE,
  FETCH_LOYALTYCARD_REQUEST,
  FETCH_LOYALTYCARD_SUCCESS,
  RECEIVE_CACHED_CARD,
  GENERATE_CARD_REQUEST,
  GENERATE_CARD_FAILURE,
  GENERATE_CARD_SUCCESS,
  FETCH_STAMP_REQUEST,
  FETCH_STAMP_SUCCESS,
  FETCH_STAMP_FAILURE,
  FETCH_REWARDS_SUCCESS,
  FETCH_REWARDS_REQUEST,
  LOAD_LOYALTYCARDS_REQUEST,
  LOAD_LOYALTYCARDS_SUCCESS,
  LOAD_LOYALTYCARDS_FAILURE,
  SELECT_LOYALTYCARD,
  CHANGE_QRMODE,
  ADD_STAMP_BY_VALIDATION_LINK_SUCCESS,
  ADD_STAMP_BY_VALIDATION_LINK_FAILURE,
  ADD_STAMP_BY_VALIDATION_LINK_RESET,
  SET_CURRENT_ID_CAMPAIGN,
  SET_MENU_TARGET,
  ADD_STAMP_BY_VALIDATION_LINK_WITH_GIFT_SUCCESS,
  SET_TRAVEL_RESULTS
} from "./actions";

const initState = {
  isLoadingCard: true,
  isGiftNotification:false,
  isLoadingStamps: false,
  error: false,
  card: {
    urlClientImg: "",
    previousPointCount: 0,
    currentPointCount: null,
    clientName: "",
    totalPointCount: null,
    templateRef: { imageLogo: { url: "" }, totalStepCount: null },
    stamps: [],
    rewardSteps: [],
    isLoadingRewards: false,
    newRewards: [],
    rewardIds: [],
    oldRewardIds: [],
  },
  cards: [],
  cardElments:[],
  selectedCardIndex:0,
  isLoadinLoyaltyCards: false,
  qrscanMode: 'qrcodescan',
  showPopUp:false,
  hasValue:false,
  isValidationSucceedWithGift:false
};

export default function homeReducer(state = initState, action) {
  switch (action.type) {
    case FETCH_LOYALTYCARD_REQUEST:
      return {
        ...state,
        error: false,
        isLoadingCard: true
      };
    case FETCH_LOYALTYCARD_FAILURE:
      return {
        ...state,
        error: true,
        isLoadingCard: false
      };
    case FETCH_LOYALTYCARD_SUCCESS:
      return {
        ...state,
        error: false,
        card: { ...state.card, ...action.payload },
        isLoadingCard: false,
        cardId: state.card.Id
      };
    case SELECT_LOYALTYCARD:
        return {
          ...state,
          card: { ...state.card, ...state.cards[action.payload].toJSON(),   stamps: [],
            rewardSteps: [],
            isLoadingRewards: false },
          cardId: state.card.id,
          selectedCardIndex:action.payload
        }
    case FETCH_STAMP_REQUEST:
      return {
        ...state,
        error: false,
        isLoadingStamps: true
      };
    case FETCH_STAMP_SUCCESS:
      return {
        ...state,
        error: false,
        card: { ...state.card, stamps: action.payload },
        isLoadingStamps: false
      };
    case FETCH_REWARDS_SUCCESS:
      return {
        ...state,
        error: false,
        card: { ...state.card, rewardSteps: action.payload },
        isLoadingRewards: false
      };
    case FETCH_REWARDS_REQUEST:
      return {
        ...state,
        isLoadingRewards: true
      }
    case FETCH_STAMP_FAILURE:
      return {
        ...state,
        error: true,
        isLoadingStamps: false
      };
    case RECEIVE_CACHED_CARD:
      return {
        ...state,
        card: { ...state.card, ...action.payload }
      };
    case GENERATE_CARD_REQUEST:
      return {
        ...state,
        isGeneratingCARD: true
      };
    case GENERATE_CARD_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isGeneratingCard: false
      };
    case GENERATE_CARD_FAILURE:
      return {
        ...state,
        isGeneratingCARD: false,
        hasError: true,
        isFetchingCard: false,
        error: action.error,
      };
    case LOAD_LOYALTYCARDS_REQUEST:
      return {
        ...state,
        isLoadinLoyaltyCards: true
      };
    case LOAD_LOYALTYCARDS_SUCCESS:
      return {
        ...state,
        isLoadinLoyaltyCards: false,
        cards: action.payload.cards,
        cardElments:action.payload.cardElments
      };
    case LOAD_LOYALTYCARDS_FAILURE:
      return {
        ...state,
        isLoadinLoyaltyCards: false,
        error: action.payload.error
      };
    case CHANGE_QRMODE:
        return {
          ...state,
          qrscanMode:action.payload
        };
    case ADD_STAMP_BY_VALIDATION_LINK_RESET:
          return {
            ...state,
            isValidationSucceed:false,
            isValidationSucceedWithGift:false,
            hasValue:false
          };
    case ADD_STAMP_BY_VALIDATION_LINK_SUCCESS:
          return {
            ...state,
            isValidationSucceed:true,
            hasValue:true
          };
    case ADD_STAMP_BY_VALIDATION_LINK_WITH_GIFT_SUCCESS:
      return {
        ...state,
        isValidationSucceedWithGift:true,
        hasValue:true
      }
    case ADD_STAMP_BY_VALIDATION_LINK_FAILURE:
            return {
              ...state,
              isValidationSucceed:false,
              hasValue:true
            };
    case SET_CURRENT_ID_CAMPAIGN:
          return{
            ...state,
            currentInstaltionId:action.payload
          }
    case SET_MENU_TARGET:
      return {
        ...state,
        isGiftNotification:action.payload
      }
    case SET_TRAVEL_RESULTS:
        return {
          ...state,
          travelsSearched:action.payload
        }
    case SET_TRAVEL_RESULTS:
        return {
          ...state,
          travelsSearched:action.payload.travelsSearched,
          search:action.payload.search,
        }
    default:
      return state;
  }
}
