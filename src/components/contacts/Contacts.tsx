import { contacts } from '../../data/contacts';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <ul className={styles.list} aria-label="Social media">
      {contacts.map(({ href, label, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
            className={styles.link}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
