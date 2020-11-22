import { setUser, setUser2 } from "../../utils/storage";
import { getAddressAndPublicKeyFromPassphrase } from '@liskhq/lisk-cryptography';
import { api } from '../../components/Api';

// Constants
export const FETCH_USERPROFILE_REQUEST = "FETCH_USERPROFILE_REQUEST";
export const FETCH_USERPROFILE_SUCCESS = "FETCH_USERPROFILE_SUCCESS";
export const FETCH_USERPROFILE_FAILURE = "FETCH_USERPROFILE_FAILURE";
export const RECEIVE_USER_LOG_IN = "RECEIVE_USER_LOG_IN";
export const RECEIVE_USER_BALANCE = "RECEIVE_USER_BALANCE";


const fetchUserProfileRequest = () => {
  return { type: FETCH_USERPROFILE_REQUEST };
};

const fetchUserProfileFailure = error => {
  return { type: FETCH_USERPROFILE_FAILURE, error: error };
};

export const receiveUserLogIn = (user = {}) => {
  return { type: RECEIVE_USER_LOG_IN, user };
};

export const receiveUserBalance = (balance = 0) => {
  return { type: RECEIVE_USER_BALANCE, balance };
};

export const logIn = (passphraselogin, history) => {
  return dispatch => {
    dispatch(fetchUserProfileRequest());

      try {
        const { publicKey, address } =  getAddressAndPublicKeyFromPassphrase(passphraselogin)
        const account = { passphrase: passphraselogin, publicKey, address }
        dispatch(receiveUserLogIn(account));
        setUser(address)
        setUser2(JSON.stringify(account))
        history.push("/home");
      } catch (error) {
        dispatch(fetchUserProfileFailure(error))
      }
  };
};

export const loadUserBalance = (address) => {
  return dispatch => {
      api.accounts.get({address: address})
        .then((response) => {
          dispatch(receiveUserBalance(response.data[0].balance));
        })
        .catch((err) => {
          console.log(err)
        });
  };
};

export const displayError = err => {
  return dispatch => {
    dispatch(fetchUserProfileFailure(err));
  };
};
