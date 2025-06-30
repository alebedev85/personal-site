import styles from './Contact.module.scss';

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <h2>Контакты</h2>
    <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
    <p>Telegram: <a href="https://t.me/yourtelegram" target="_blank" rel="noreferrer">@yourtelegram</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></p>
  </section>
);

export default Contact;