import { QueryParams, RequestHeaders } from "./types";
import { buildUrl } from "./utils";

export async function get<TData>(
  endpoint: string,
  params?: QueryParams,
  headers: RequestHeaders = {}
) {
  try {
    const response = await fetch(buildUrl(endpoint, params), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return (await response.json()) as TData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
