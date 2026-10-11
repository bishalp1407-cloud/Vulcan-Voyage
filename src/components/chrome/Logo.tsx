import styles from "./Logo.module.css";

type LogoProps = {
  onClick?: () => void;
};

export function Logo({ onClick }: LogoProps) {
  return (
    <a href="#top" className={styles.logo} onClick={onClick} aria-label="Vulcan Voyage home">
      Vulcan Voyage<span className={styles.dot}>.</span>
    </a>
  );
}
