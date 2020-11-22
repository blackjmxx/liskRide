import { API_URL } from '../config'
import * as cryptography from '@liskhq/lisk-cryptography';

// Converts plain javascript object to uri string
export const convertObjToURIString = (params) => {
  const pairs = Object.keys(params)
    .filter(key => params[key] !== undefined && params[key] !== false)
    .map(key => `${key}=${params[key]}`)

  return '?' + pairs.join('&')
}

export const constructEndPoint = (resource, path = '', params = {}) => {
  const uriString = Object.keys(params).length === 0 ? '' : convertObjToURIString(params)
  return `${API_URL}${resource}${path ? '/' + path : ''}` + uriString
}

export const networkIdentifier = cryptography.getNetworkIdentifier(
  "23ce0366ef0a14a91e5fd4b1591fc880ffbef9d988ff8bebf8f3666b0c09597d",
  "Lisk",
);

export const dateToLiskEpochTimestamp = date => (
  Math.floor(new Date(date).getTime() / 1000) - Math.floor(new Date(Date.UTC(2016, 4, 24, 17, 0, 0, 0)).getTime() / 1000)
);