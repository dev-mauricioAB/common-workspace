declare module "componentsLibrary/Header" {
  interface HeaderProps {
    title: string;
    clickLogo?: () => void;
  }
  const Header: React.FC<HeaderProps>;

  export { Header };
}
declare module "componentsLibrary/Footer" {
  const Footer: React.FC;

  export { Footer };
}
