export interface ButtonProps {
  text: string;
  to?: string; // Optional: If present, acts as a link
  onClick?: () => void; // Optional: For standard clicks
  className?: string; // We will pass specific styles here
  activeClassName?: string; // Optional: styles to add when link is active
}

export type PublicButtonProps = Omit<
  ButtonProps,
  "className" | "activeClassName"
>;
