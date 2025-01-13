import type { QueryKey } from "@tanstack/react-query";

export function createUseQueryKey<TParams>(
  baseKey: string,
  params?: TParams
): QueryKey {
  if (params != null && Object.entries(params).length > 0) {
    return [...baseKey, params];
  }
  return [baseKey];
}
