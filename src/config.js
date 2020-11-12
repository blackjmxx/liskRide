export const API_URL = 'https://backend-demo-uv.herokuapp.com/'
export const API_URL_P = 'https://pg-app-3pq8my5f24s0y0kujkuwbcg0jeq3tu.scalabl.cloud/1/';

import { APIClient } from '@liskhq/lisk-api-client';

const API_BASEURL = 'http://localhost:4000';

export const api = new APIClient([API_BASEURL])

export const API_ENDPOINTS = {
  VOUCHERS: 'vouchers',
  STORES: 'users/stores',
  READ_VOUCHER: 'functions/readVoucher'
}
