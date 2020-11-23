import { APIClient } from '@liskhq/lisk-api-client';

const API_BASEURL = 'http://35.228.19.100:4000';

export const api = new APIClient([API_BASEURL]);