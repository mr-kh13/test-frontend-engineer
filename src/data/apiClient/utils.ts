import { API_BASE_URL } from "./constants";
import { QueryParams } from "./types";

function buildQueryString(params: QueryParams): string {
  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  return queryString ? `?${queryString}` : "";
}

export function buildUrl(endpoint: string, params?: QueryParams) {
  const url = `${API_BASE_URL}${endpoint}`;
  if (!params) {
    return url;
  }
  const queryString = buildQueryString(params);
  return `${url}${queryString}`;
}
