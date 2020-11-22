import localforage from "localforage";

const USER = "USER";
const USER2 = "USER2";
const HAS_RUN = "UV";
const HAS_MANIFEST = "HAS_MANIFEST";


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

const setAsRun = initTalToken =>
  localStorage.setItem(HAS_RUN + initTalToken, 1);

const getUser = () => localStorage.getItem(USER);

const setClientManifest = () => localStorage.setItem(HAS_MANIFEST, 1);

const setUser = (address) => localStorage.setItem(USER, address);

const setUser2 = (userAsString) => localStorage.setItem(USER2, userAsString);

const getUser2 = () => localStorage.getItem(USER2);

const removeUser = () => localStorage.removeItem(USER2);


export {
  isFirstRun,
  setAsRun,
  setClientManifest,
  isManifestSetted,
  getUser,
  setUser,
  setUser2,
  getUser2,
  removeUser
};
