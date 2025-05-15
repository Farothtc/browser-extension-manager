export type Extension = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type NavProps = {
  isDark: boolean;
  handleThemeToggle: () => void;
};
