import localforage from "localforage";

const CARD = "CARD";
const USER = "USER";
const USER2 = "USER2";
const HAS_RUN = "UV";
const HAS_MANIFEST = "HAS_MANIFEST";
const HAS_GIFT_NOTIFICATION = "HAS_GIFT_NOTIFICATION";
const CARD_ID = "CARD_ID";
const PROFILE_TOKEN = "PROFILE_TOKEN";
const CURRENT_INITIALIZE_ID = "CURRENT_INITIALIZE_ID";
const CURENT_CARD_INDEX = "CURENT_CARD_INDEX";

const configStorage = () => {
  localforage.config({
    name: "uv-db",
    version: 1.0,
    storeName: "cards",
    description: "Cards"
  });
};
configStorage();

const isFirstRun = !localStorage.getItem(HAS_RUN);

const isManifestSetted = () => {
  return localStorage.getItem(HAS_MANIFEST);
};
const hasGiftNotification = () => {
  return localStorage.getItem(HAS_GIFT_NOTIFICATION) === 1;
}

const isFirstRunCard = initTalToken =>
  !localStorage.getItem(HAS_RUN + initTalToken);

const setAsRun = initTalToken =>
  localStorage.setItem(HAS_RUN + initTalToken, 1);

// const setAsRun = (orgGuid, clientGuid, cardGuid) => localStorage.setItem(HAS_RUN+'/'+orgGuid+'/'+clientGuid+'/'+cardGuid, 1)

const getCard = () => localforage.getItem(CARD);

const getUser = () => localStorage.getItem(USER);

const saveCard = card => localforage.setItem(CARD, card);

const saveCardId = cardId => localforage.setItem(CARD_ID, cardId);

const getCardId = () => localforage.getItem(CARD_ID);

const setClientManifest = () => localStorage.setItem(HAS_MANIFEST, 1);

const setUser = (address) => localStorage.setItem(USER, address);

const setUser2 = (userAsString) => localStorage.setItem(USER2, userAsString);

const getUser2 = () => localStorage.getItem(USER2);

const removeUser = () => localStorage.removeItem(USER);

const setGiftNotification = (value) => localStorage.setItem(HAS_GIFT_NOTIFICATION, value);

const setProfileToken = token => localforage.setItem(PROFILE_TOKEN, token);

const getProfileToken = () => localforage.getItem(PROFILE_TOKEN);

const saveCurrentInitializeIdCampaign = id =>
  localStorage.setItem(CURRENT_INITIALIZE_ID, id);

const getCurrentInitializeIdCampaign = () =>
  localStorage.getItem(CURRENT_INITIALIZE_ID);

const setCurrentCardIndex = index =>
  localStorage.setItem(CURENT_CARD_INDEX, index);

const getCurrentCardIndex = () => localStorage.getItem(CURENT_CARD_INDEX);

export {
  getCard,
  saveCard,
  isFirstRun,
  setAsRun,
  saveCardId,
  getCardId,
  isFirstRunCard,
  setClientManifest,
  isManifestSetted,
  setProfileToken,
  getProfileToken,
  saveCurrentInitializeIdCampaign,
  getCurrentInitializeIdCampaign,
  setCurrentCardIndex,
  getCurrentCardIndex,
  hasGiftNotification,
  setGiftNotification,
  getUser,
  setUser,
  setUser2,
  getUser2,
  removeUser
};
