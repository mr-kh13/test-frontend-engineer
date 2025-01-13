export interface RequestHeaders {
  [key: string]: string;
}

export type QueryParams = Record<string, string | number | boolean>;
