import {
  HydrationBoundary as HydrationBoundaryBase,
  type HydrationBoundaryProps,
} from "@tanstack/react-query";

export function HydrationBoundary(props: HydrationBoundaryProps) {
  return <HydrationBoundaryBase {...props} />;
}
