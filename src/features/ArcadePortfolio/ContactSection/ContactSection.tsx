"use client";

import { useTranslation } from "react-i18next";
import { contacts } from "../../../data/contacts";
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
  const { t } = useTranslation();
  const telegram = contacts.find(({ label }) => label === "Telegram");
  const github = contacts.find(({ label }) => label === "GitHub");
  const email = contacts.find(({ label }) => label === "GMail");

  return (
    <section className="arcadeSection" id="contact">
      <div className={`arcadePanel arcadePanelGold ${styles.contactPanel}`}>
        <h2>GAME OVER?</h2>
        <div className={styles.continueText}>
          &gt; CONTINUE: <span className="arcadeBlink">9</span> SEC
        </div>
        <p className={styles.contactIntro}>
          Готовы начать совместный проект или обсудить позицию в команде?
          Нажмите кнопку подключения:
        </p>
        <div className={styles.contactActions}>
          {[telegram, github, email].map(
            (contact, index) =>
              contact && (
                <a
                  className={`${styles.contactButton} ${
                    index === 0 ? styles.contactCyan : styles.contactYellow
                  }`}
                  href={contact.href}
                  key={contact.label}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    contact.href.startsWith("mailto:")
                      ? undefined
                      : "noreferrer noopener"
                  }
                >
                  <span className={styles.contactIcon}>{contact.icon}</span>
                  {contact.label === "Telegram"
                    ? "TELEGRAM CONNECT"
                    : contact.label === "GitHub"
                      ? "GITHUB PROFILE"
                      : "SEND AN EMAIL"}
                </a>
              ),
          )}
        </div>

        <div className={styles.systemCredits}>
          <strong>&gt; SYSTEM SPECS &amp; CREDITS:</strong>
          <p>
            {t("footer.description")} GitHub. {t("footer.font")} / Pixel Fonts.
          </p>
        </div>

        <div className={styles.endCredits}>
          <strong>再見游戏时代</strong>
          <span>THANK YOU FOR PLAYING!</span>
          <small>
            © 2026 {t("footer.rights")} · Adapted for
            Desktop Web
          </small>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
