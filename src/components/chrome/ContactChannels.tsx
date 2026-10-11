import { CONTACT_ACTIONS, CONTACT_PENDING } from "@/content/site";
import styles from "./ContactChannels.module.css";

type ContactChannelsProps = {
  id?: string;
  tone?: "light" | "dark";
  showNote?: boolean;
};

export function ContactChannels({
  id,
  tone = "light",
  showNote = false,
}: ContactChannelsProps) {
  return (
    <div className={tone === "dark" ? styles.dark : undefined}>
      <ul id={id} className={styles.list}>
        {CONTACT_ACTIONS.map((action) => (
          <li key={action.label}>
            <span className={styles.item}>
              {action.label}
              <span className="visually-hidden"> — details not yet published</span>
            </span>
          </li>
        ))}
      </ul>
      {showNote ? <p className={styles.note}>{CONTACT_PENDING}</p> : null}
    </div>
  );
}
