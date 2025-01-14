interface Props {
  children: number;
}

export function Price({ children }: Props) {
  return <>{children.toFixed(2)}</>;
}
