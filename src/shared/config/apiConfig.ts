/**
 *
 * @param key strinп
 * @returns ключ из env или '', может выдать ошибку
 */

const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || "";
};

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const MAP_KEY = process.env.NEXT_PUBLIC_MAP_KEY;
