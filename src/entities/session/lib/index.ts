import { UserCredential } from '../types';

export const CREDENTIAL_KEY = 'EVENTAPP__CREDENTIAL';

export function getCredential() {
  return JSON.parse(
    localStorage.getItem(CREDENTIAL_KEY) || '',
  ) as UserCredential;
}

export function getToken() {
  return getCredential().accessToken;
}
