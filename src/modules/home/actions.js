import { Cloud } from "parse";
import {
  getCard,
  saveCard,
  setAsRun,
  saveCardId,
  getCardId,
  isManifestSetted,
  setClientManifest,
  getProfileToken,
  saveCurrentInitializeIdCampaign,
  setCurrentCardIndex
} from "../../utils/storage";

// Constants
export const FETCH_LOYALTYCARD_REQUEST = "FETCH_LOYALTYCARD_REQUEST";
export const FETCH_LOYALTYCARD_SUCCESS = "FETCH_LOYALTYCARD_SUCCESS";
export const FETCH_LOYALTYCARD_FAILURE = "FETCH_LOYALTYCARD_FAILURE";
export const RECEIVE_CACHED_CARD = "RECEIVE_CACHED_CARD";
export const GENERATE_CARD_REQUEST = "GENERATE_CARD_REQUEST";
export const GENERATE_CARD_SUCCESS = "GENERATE_CARD_SUCCESS";
export const GENERATE_CARD_FAILURE = "GENERATE_CARD_FAILURE";

export const FETCH_STAMP_SUCCESS = "FETCH_STAMP_SUCCESS";
export const FETCH_STAMP_REQUEST = "FETCH_STAMP_REQUEST";
export const FETCH_STAMP_FAILURE = "FETCH_STAMP_FAILURE";

export const FETCH_REWARDS_SUCCESS = "FETCH_REWARDS_SUCCESS";
export const FETCH_REWARDS_REQUEST = "FETCH_REWARDS_REQUEST";
export const FETCH_REWARDS_FAILURE = "FETCH_REWARDS_FAILURE";

export const LOAD_REWARDS_REQUEST = "LOAD_REWARDS_REQUEST";
export const LOAD_REWARDS_SUCCESS = "LOAD_REWARDS_SUCCESS";
export const LOAD_REWARDS_FAILURE = "LOAD_REWARDS_FAILURE";

export const ADD_INIT_CARD = "ADD_INIT_CARD";
export const FETCH_CACHED_CARD = "FETCH_CACHED_CARD";

export const LOAD_LOYALTYCARDS_REQUEST = "LOAD_LOYALTYCARDS_REQUEST";
export const LOAD_LOYALTYCARDS_SUCCESS = "LOAD_LOYALTYCARDS_SUCCESS";
export const LOAD_LOYALTYCARDS_FAILURE = "LOAD_LOYALTYCARDS_FAILURE";

export const RESTART_CARD_REQUEST = "RESTART_CARD_REQUEST";
export const RESTART_CARD_SUCCESS = "RESTART_CARD_SUCCESS";
export const RESTART_CARD_FAILURE = "RESTART_CARD_FAILURE";

export const ADD_STAMP_BY_VALIDATION_LINK_RESET =
  "ADD_STAMP_BY_VALIDATION_LINK_RESET";
export const ADD_STAMP_BY_VALIDATION_LINK_SUCCESS =
  "ADD_STAMP_BY_VALIDATION_LINK_SUCCESS";
export const ADD_STAMP_BY_VALIDATION_LINK_FAILURE =
  "ADD_STAMP_BY_VALIDATION_LINK_FAILURE";

export const SELECT_LOYALTYCARD = "SELECT_LOYALTYCARD";

export const CHANGE_QRMODE = "CHANGE_QRMODE";
export const SET_CURRENT_ID_CAMPAIGN = "SET_CURRENT_ID_CAMPAIGN";
export const SET_MENU_TARGET = "SET_MENU_TARGET";
export const ADD_STAMP_BY_VALIDATION_LINK_WITH_GIFT_SUCCESS =
  "ADD_STAMP_BY_VALIDATION_LINK_WITH_GIFT_SUCCESS";


export const SET_TRAVEL_RESULTS =
  "SET_TRAVEL_RESULTS";

export const addInitCard = () => ({ type: ADD_INIT_CARD });
export const fetchCachedCard = () => ({ type: FETCH_CACHED_CARD });

const fetchLoyaltyCardRequest = () => {
  return {
    type: FETCH_LOYALTYCARD_REQUEST
  };
};

const fetchStampRequest = () => {
  return {
    type: FETCH_STAMP_REQUEST
  };
};

const fetchStampSuccess = payload => {
  return {
    type: FETCH_STAMP_SUCCESS,
    payload: payload
  };
};

const fetchRewardsSuccess = payload => {
  return {
    type: FETCH_REWARDS_SUCCESS,
    payload: payload
  };
};

const fetchRewardsRequest = payload => {
  return {
    type: FETCH_REWARDS_REQUEST
  };
};

const fetchRewardsFailure = error => {
  return {
    type: FETCH_REWARDS_FAILURE,
    payload: error
  };
};

const fetchStampFailure = error => {
  return {
    type: FETCH_STAMP_FAILURE,
    payload: error
  };
};

const fetchLoyaltyCardSuccess = payload => {
  return {
    type: FETCH_LOYALTYCARD_SUCCESS,
    payload: payload
  };
};

const fetchLoyaltyCardFailure = error => {
  return {
    type: FETCH_LOYALTYCARD_FAILURE,
    error: error
  };
};

export function generateCardRequest() {
  return {
    type: GENERATE_CARD_REQUEST
  };
}

export function generateCardSuccess(payload) {
  return {
    type: GENERATE_CARD_SUCCESS,
    payload: payload
  };
}

export function generateCardFailure(error) {
  return {
    type: GENERATE_CARD_FAILURE,
    error: error
  };
}

export function loadRewardsRequest() {
  return {
    type: LOAD_REWARDS_REQUEST
  };
}

export function loadRewardsSuccess(payload) {
  return {
    type: LOAD_REWARDS_SUCCESS,
    payload: payload
  };
}

export function loadRewardsFailure(error) {
  return {
    type: LOAD_REWARDS_FAILURE,
    error: error
  };
}

export function loadLoyaltyCardsRequest() {
  return {
    type: LOAD_LOYALTYCARDS_REQUEST
  };
}

export function loadLoyaltyCardsSuccess(payload) {
  return {
    type: LOAD_LOYALTYCARDS_SUCCESS,
    payload: payload
  };
}

export function loadLoyaltyCardsFailure(error) {
  return {
    type: LOAD_LOYALTYCARDS_FAILURE,
    error: error
  };
}

export function selectLoyaltyCard(payload) {
  return {
    type: SELECT_LOYALTYCARD,
    payload: payload
  };
}

export function addStampByValidationLinkReset() {
  return {
    type: ADD_STAMP_BY_VALIDATION_LINK_RESET
  };
}

export function addStampByValidationLinkSuccess(payload) {
  return {
    type: ADD_STAMP_BY_VALIDATION_LINK_SUCCESS,
    payload: payload
  };
}

export function addStampByValidationLinkWithGiftSuccess(payload) {
  return {
    type: ADD_STAMP_BY_VALIDATION_LINK_WITH_GIFT_SUCCESS,
    payload: payload
  };
}

export function addStampByValidationLinkFailure(error) {
  return {
    type: ADD_STAMP_BY_VALIDATION_LINK_FAILURE,
    error: error
  };
}

export const loadCachedLoyaltyCard = token => {
  return dispatch => {
    dispatch(fetchLoyaltyCardRequest());
    getCard()
      .then(card => dispatch(fetchLoyaltyCardSuccess(card)))
      .catch(err => dispatch(fetchLoyaltyCardFailure(err)));
  };
};

export function changeQrMode(payload) {
  return {
    type: CHANGE_QRMODE,
    payload
  };
}

export function setCurrentIdCampaign(payload) {
  return {
    type: SET_CURRENT_ID_CAMPAIGN,
    payload
  };
}

export function addBadgeToMenu(payload) {
  return {
    type: SET_MENU_TARGET,
    payload
  };
}

export function setTravelsResults(payload = {}) {
  return {
    type: SET_TRAVEL_RESULTS,
    payload: payload
  };
}


export const fetchInitLoyaltyCard = token => {
  return dispatch => {
    dispatch(fetchLoyaltyCardRequest());
    Cloud.run("loadLoyaltyCard", { token: token })
      .then(card => {
        // // alert("the saveCard value: " + token)
        let cardJson = card.toJSON();
        initManifest(cardJson);
        saveCardId(cardJson.token);
        saveCard(card.toJSON())
          .then(res => {
            dispatch(fetchLoyaltyCardSuccess(cardJson));
            setAsRun(token);
            setClientManifest();
            return cardJson.token;
          })
          .then(cardGuid => {
            // // alert("the loadStamps value: " + token)
            Cloud.run("loadStamps", { cardId: cardGuid }).then(stamps => {
              dispatch(fetchStampSuccess(stamps));
            });
            // // alert("the loadRewardSteps value: " + token)
            Cloud.run("loadRewardSteps", { cardId: cardGuid }).then(
              rewardSteps => {
                dispatch(fetchRewardsSuccess(rewardSteps));
              }
            );
          });
      })
      .catch(err => {
        dispatch(fetchLoyaltyCardFailure(err));
        // // alert(JSON.stringify(err))
      });
  };
};

export const restartCard = token => {
  return dispatch => {
    dispatch(fetchLoyaltyCardRequest());
    getCardId().then(cardGuid => {
      Cloud.run("restartCard", { token: cardGuid })
        .then(card => {
          const cardJson = card.toJSON();
          saveCard(cardJson).then(res => {
            dispatch(fetchLoyaltyCardSuccess(cardJson));
            loadRewards(cardJson.newRewards);
            return cardJson.objectId;
          });
        })
        .then(
          getCardId().then(cardGuid => {
            Cloud.run("loadStamps", { cardId: cardGuid }).then(stamps => {
              dispatch(fetchStampSuccess(stamps));
            });
            Cloud.run("loadRewardSteps", { cardId: cardGuid }).then(
              rewardSteps => {
                dispatch(fetchRewardsSuccess(rewardSteps));
              }
            );
          })
        )
        .catch(err => dispatch(fetchLoyaltyCardFailure(err)));
    });
  };
};

export const loadLoyaltyCard = token => {
  return dispatch => {
    dispatch(fetchLoyaltyCardRequest());
    dispatch(fetchStampRequest());
    getCardId().then(cardGuid => {
      Cloud.run("loadLoyaltyCard", { token: token || cardGuid })
        .then(card => {
          const cardJson = card.toJSON();
          if (!isManifestSetted()) initManifest(cardJson);
          saveCard(cardJson).then(res => {
            dispatch(fetchLoyaltyCardSuccess(cardJson));
            loadRewards(cardJson.newRewards);
            return cardJson.objectId;
            // dispatch(loadRewardsRequest());
            //   Cloud.run("loadRewards", { cardId : cardJson.token})
            //     .then(rewards => {
            //       dispatch(loadRewardsSuccess(rewards));
            //     })
            //     .catch(err => dispatch(loadRewardsFailure(err)));
          });
        })
        .then(
          getCardId().then(cardGuid => {
            Cloud.run("loadStamps", { cardId: cardGuid }).then(stamps => {
              dispatch(fetchStampSuccess(stamps));
            });
            Cloud.run("loadRewardSteps", { cardId: cardGuid }).then(
              rewardSteps => {
                dispatch(fetchRewardsSuccess(rewardSteps));
              }
            );
            // Cloud.run("loadRewardTemplate", {loyaltyCardTemplateid:'S8lunn2sJv'})
            // .then(
            //   rewardTemplates => {
            //     //dispatch(fetchRewardsSuccess(rewards))
            //     console.log(rewardTemplates)
            // })
          })
        )
        .catch(err => {
          if (err.code === 100) {
            getCard()
              .then(card => dispatch(fetchLoyaltyCardSuccess(card)))
              .catch(err => dispatch(fetchLoyaltyCardFailure(err)));
          }
        });
    });
  };
};

export const loadCurrentLoyaltyCard = token => {
  return dispatch => {
    dispatch(fetchLoyaltyCardRequest());
    dispatch(fetchStampRequest());
    getCardId().then(cardGuid => {
      Cloud.run("loadLoyaltyCard", { token: token || cardGuid })
        .then(card => {
          const cardJson = card.toJSON();
          if (!isManifestSetted()) initManifest(cardJson);
          saveCard(cardJson).then(res => {
            dispatch(fetchLoyaltyCardSuccess(cardJson));
            loadRewards(cardJson.newRewards);
            return cardJson.objectId;
            // dispatch(loadRewardsRequest());
            //   Cloud.run("loadRewards", { cardId : cardJson.token})
            //     .then(rewards => {
            //       dispatch(loadRewardsSuccess(rewards));
            //     })
            //     .catch(err => dispatch(loadRewardsFailure(err)));
          });
        })
        .then(
          getCardId().then(cardGuid => {
            Cloud.run("loadStamps", { cardId: cardGuid }).then(stamps => {
              dispatch(fetchStampSuccess(stamps));
            });
            Cloud.run("loadRewardSteps", { cardId: cardGuid }).then(
              rewardSteps => {
                dispatch(fetchRewardsSuccess(rewardSteps));
              }
            );
            // Cloud.run("loadRewardTemplate", {loyaltyCardTemplateid:'S8lunn2sJv'})
            // .then(
            //   rewardTemplates => {
            //     //dispatch(fetchRewardsSuccess(rewards))
            //     console.log(rewardTemplates)
            // })
          })
        )
        .catch(err => {
          if (err.code === 100) {
            getCard()
              .then(card => dispatch(fetchLoyaltyCardSuccess(card)))
              .catch(err => dispatch(fetchLoyaltyCardFailure(err)));
          }
        });
    });
  };
};

export const loadStamps = (cardId, dispatch) => {
  return dispatch => {
    dispatch(fetchStampRequest());
    Cloud.run("loadStamps", { cardId: cardId })
      .then(stamps => {
        dispatch(fetchStampSuccess(stamps));
      })
      .catch(err => dispatch(fetchStampFailure(err)));
  };
};

export const loadRewardSteps = templateCardId => {
  return dispatch => {
    dispatch(fetchRewardsRequest());
    Cloud.run("loadRewardStep", { cardId: templateCardId })
      .then(rewardSteps => {
        dispatch(fetchRewardsSuccess(rewardSteps));
      })
      .catch(err => dispatch(fetchRewardsFailure(err)));
  };
};

export const loadLoyaltyFakeCard = token => {
  return dispatch => {
    dispatch(fetchLoyaltyCardRequest());
    Cloud.run("loadFakeLoyaltyCard", { token: token })
      .then(card => {
        dispatch(fetchLoyaltyCardSuccess(card.toJSON()));
      })
      .catch(err => dispatch(fetchLoyaltyCardFailure(err)));
  };
};

export const setInitializeIdCampaign = id => {
  return dispatch => {
    saveCurrentInitializeIdCampaign(id);
  };
};

export const generateCard = templateId => {
  return dispatch => {
    dispatch(generateCardRequest());
    let profileToken = getProfileToken();
    Cloud.run("generateCard", { templateId, profileToken })
      .then(card => {
        let cardJson = card.toJSON();
        saveCardId(cardJson.token).then(res => {
          dispatch(generateCardSuccess(cardJson.token));
        });
      })
      .catch(err => dispatch(generateCardFailure(err)));
  };
};

export const loadRewards = cardId => {
  return dispatch => {
    dispatch(loadRewardsRequest());
    return Cloud.run("loadRewards", { cardId })
      .then(rewards => {
        dispatch(loadRewardsSuccess(rewards));
      })
      .catch(err => dispatch(loadRewardsFailure(err)));
  };
};

export const loadLoyaltyCards = user => {
  return dispatch => {
    dispatch(loadLoyaltyCardsRequest());

    let queryUserCards = user.relation("cards").query();

    return queryUserCards
      .find()
      .then(cards => {
        const cardElments = [];
        dispatch(loadLoyaltyCardsSuccess({ cards, cardElments }));
        return cards.length - 1;
      })
      .catch(err => dispatch(loadLoyaltyCardsFailure(err)));
  };
};

export const loadLoyaltyCardsWithAnonymousUser = token => {
  return dispatch => {
    getCardId().then(cardGuid => {
      Cloud.run("loadLoyaltyCardsWithAnonymousUser", { token: token })
        .then(cards => {
          const cardElments = [];
          dispatch(loadLoyaltyCardsSuccess({ cards, cardElments }));
        })
        .catch(err => {
          if (err.code === 100) {
            loadLoyaltyCardsFailure(err);
            // getCard()
            //   .then(card => dispatch(fetchLoyaltyCardSuccess(card)))
            //   .catch(err => dispatch(fetchLoyaltyCardFailure(err)));
          }
        });
    });
  };
};

export const selectAndChangeCardId = index => {
  return (dispatch, getState) => {
    if (!getState().home.cards[index]) return;
    const cardAsJson = getState().home.cards[index].toJSON();
    saveCard(cardAsJson).then(res => {
      Cloud.run("loadLoyaltyCard", { token: cardAsJson.token })
        .then(card => {
          const cardJson = card.toJSON();
          setCurrentCardIndex(index);
          if (!isManifestSetted()) initManifest(cardJson);
          saveCard(cardJson).then(res => {
            dispatch(fetchLoyaltyCardSuccess(cardJson));
            loadRewards(cardJson.newRewards);
            // dispatch(loadRewardsRequest());
            //   Cloud.run("loadRewards", { cardId : cardJson.token})
            //     .then(rewards => {
            //       dispatch(loadRewardsSuccess(rewards));
            //     })
            //     .catch(err => dispatch(loadRewardsFailure(err)));
          });
        })
        .then(
          getCardId().then(cardGuid => {
            Cloud.run("loadStamps", { cardId: cardGuid }).then(stamps => {
              dispatch(fetchStampSuccess(stamps));
            });
            Cloud.run("loadRewardSteps", { cardId: cardGuid }).then(
              rewardSteps => {
                dispatch(fetchRewardsSuccess(rewardSteps));
              }
            );
            // Cloud.run("loadRewardTemplate", {loyaltyCardTemplateid:'S8lunn2sJv'})
            // .then(
            //   rewardTemplates => {
            //     //dispatch(fetchRewardsSuccess(rewards))
            //     console.log(rewardTemplates)
            // })
          })
        )
        .catch(err => fetchLoyaltyCardFailure(err));
    });
    saveCardId(cardAsJson.token);
  };
};

const initManifest = cardAsJson => {
  if (window) {
    var myDynamicManifest = {
      name: "Hello Voucher",
      short_name: "Hello Voucher",
      theme_color: "#F1C40F",
      background_color: "#37a0e6",
      display: "standalone",
      Scope: "/",
      start_url: window.PUBLIC_URL + "/" + cardAsJson.token,
      icons: [
        {
          src: window.PUBLIC_URL + "/images/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: window.PUBLIC_URL + "/images/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: window.PUBLIC_URL + "/images/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: window.PUBLIC_URL + "/images/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: window.PUBLIC_URL + "/images/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: window.PUBLIC_URL + "/images/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: window.PUBLIC_URL + "/images/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: window.PUBLIC_URL + "/images/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ],
      splash_pages: null
    };

    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], { type: "application/javascript" });
    const manifestURL = URL.createObjectURL(blob);
    document.title = "Hello Voucher";
    document
      .querySelector("#my-manifest-placeholder")
      .setAttribute("href", manifestURL);
    setClientManifest();
  }
};

export const addStampByValidationLink = (validationToken, history) => {
  return dispatch => {
    dispatch(addStampByValidationLinkReset());
    return getCardId().then(cardGuid => {
      Cloud.run("addStampByValidationLink", {
        token: cardGuid,
        validationToken: validationToken
      })
        .then(result => {
          // here last modification
          if (result === "SUCCESS_WITH_REWARD") {
            dispatch(addBadgeToMenu("offer"));
            dispatch(addStampByValidationLinkWithGiftSuccess(result));
            addBadgeToMenu(true);
          } else {
            dispatch(addStampByValidationLinkSuccess(result));
          }
        })
        .catch(err => dispatch(addStampByValidationLinkFailure(err)));
    });
  };
};

export const addStampByMagicStamp = (data) => {
  return dispatch => {
    dispatch(addStampByValidationLinkReset());
    return getCardId().then(cardGuid => {
      Cloud.run("addStampByMagicStamp", {
        token: cardGuid,
        dataStamp:data
      })
        .then(result => {
          if (result === "SUCCESS_WITH_REWARD") {
            dispatch(addBadgeToMenu("offer"));
            dispatch(addStampByValidationLinkWithGiftSuccess(result));
            addBadgeToMenu(true);
          } else {
            dispatch(addStampByValidationLinkSuccess(result));
          }
        })
        .catch(err => dispatch(addStampByValidationLinkFailure(err)));
    });
  };
};

export const closeValidationModal = () => {
  return dispatch => {
    dispatch(addStampByValidationLinkReset());
  };
};


export const updateTravels = (travels = [], search = {}) => {
  return dispatch => {
    dispatch(setTravelsResults(travels, search));
  }
}