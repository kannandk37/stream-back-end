export interface CardProp {
  type?: "frame" | "featured" | "predominent";
  elevation?: 1 | 2 | 3;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => any;
}
