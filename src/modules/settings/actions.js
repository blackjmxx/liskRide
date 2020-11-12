import { User, Cloud } from "parse";
import { getCurrentInitializeIdCampaign, setUser, setUser2 } from "../../utils/storage";
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

const fetchUserProfileSuccess = payload => {
  return { type: FETCH_USERPROFILE_SUCCESS, payload: payload };
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

export const loadUserProfile = profileId => {
  return dispatch => {
    dispatch(fetchUserProfileRequest());
    Cloud.run("loadUserProfile", { profileId })
      .then(profile => dispatch(fetchUserProfileSuccess(profile)))
      .catch(err => dispatch(fetchUserProfileFailure(err)));
  };
};

export const registerUserProfile = (
  email,
  name,
  profileId,
  providerName,
  authData,
  history
) => {
  return dispatch => {
    const user = new User();
    dispatch(fetchUserProfileRequest());
    user
      .linkWith(providerName, { authData: authData })
      .then(userR => {
        let userJSON = userR.toJSON();
        let templateId = getCurrentInitializeIdCampaign();
        
        Cloud.run("registerUserProfile", {
          username: userJSON.username,
          templateId,
          providerName,
          email,
          cardUrl:window.location.origin
        })
          .then(user => {
            let userSavedAsJSON = user.toJSON();
            Cloud.run("linkCardToUserProfile", {
              email: email,
              templateId
            })
              .then(() => {
                if (userSavedAsJSON.type !== "profile") {
                  User.logOut();
                  dispatch(fetchUserProfileFailure({}));
                  // history.push("/home/params");
                  return;
                } else {
                ;
                  dispatch(receiveUserLogIn(userSavedAsJSON));
                  history.push("/home");
                }
              })
              .catch(err => {
                // User.logOut();
                //dispatch(fetchUserProfileFailure(err));
                // history.push("/home/params");
              });
          })
          .catch(err => dispatch(fetchUserProfileFailure(err)));
      })
      .catch(err => dispatch(fetchUserProfileFailure(err)));
  };
};

export const registerUser = (email, password, cardId, history) => {
  return dispatch => {
    dispatch(fetchUserProfileRequest());

    User.signUp(email, password, { email, type: "profile" })
      .then(userR => {
        let userJSON = userR.toJSON();
        let templateId = getCurrentInitializeIdCampaign();
        Cloud.run("registerUserProfile", {
          templateId,
          username: userJSON.username,
          email,
          cardUrl:window.location.origin
        }).then(user => {
          let userSavedAsJSON = user.toJSON();
          Cloud.run("linkCardToUserProfile", {
            email: email,
            templateId
          })
            .then(() => {
              if (userSavedAsJSON.type !== "profile") {
                User.logOut();
                dispatch(fetchUserProfileFailure({}));
                // history.push("/home/params");
                return;
              } else {
                dispatch(receiveUserLogIn(userSavedAsJSON));
                history.push("/home");
              }
            })
            .catch(err => {
              // User.logOut();
              //dispatch(fetchUserProfileFailure(err));
              // history.push("/home/params");
            });
        });
      })
      .catch(err => dispatch(fetchUserProfileFailure(err)));
  };
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
      debugger
      api.accounts.get({address: address})
        .then((response) => {
          debugger
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

export const linkCardToUserProfile = (user, history, templateId) => {
  return dispatch => {
    let userSavedAsJSON = user.toJSON();

    return Cloud.run("linkCardToUserProfile", {
      email: userSavedAsJSON.email,
      templateId
    }).then(() => {
        dispatch(receiveUserLogIn(userSavedAsJSON));
        history.push("/home");
    }).catch(err => {
      // User.logOut();
      //dispatch(fetchUserProfileFailure(err));
      // history.push("/home/params");
    });;
  };
};