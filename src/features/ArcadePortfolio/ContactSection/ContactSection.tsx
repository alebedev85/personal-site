"use client";

import { useTranslation } from "react-i18next";
import { contacts } from "../../../data/contacts";
import "./ContactSection.scss";

const ContactSection = () => {
  const { t } = useTranslation();
  const telegram = contacts.find(({ label }) => label === "Telegram");
  const github = contacts.find(({ label }) => label === "GitHub");
  const email = contacts.find(({ label }) => label === "GMail");

  return (
    <section className={"section"} id="contact">
      <div className={`${"panel"} ${"panelGold"} ${"contactPanel"}`}>
        <h2>GAME OVER?</h2>
        <div className={"continueText"}>
          &gt; CONTINUE: <span className={"blink"}>9</span> SEC
        </div>
        <p className={"contactIntro"}>
          Готовы начать совместный проект или обсудить позицию в команде?
          Нажмите кнопку подключения:
        </p>
        <div className={"contactActions"}>
          {[telegram, github, email].map(
            (contact, index) =>
              contact && (
                <a
                  className={`${"contactButton"} ${
                    index === 0 ? "contactCyan" : "contactYellow"
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
                  <span className={"contactIcon"}>{contact.icon}</span>
                  {contact.label === "Telegram"
                    ? "TELEGRAM CONNECT"
                    : contact.label === "GitHub"
                      ? "GITHUB PROFILE"
                      : "SEND AN EMAIL"}
                </a>
              ),
          )}
        </div>

        <div className={"systemCredits"}>
          <strong>&gt; SYSTEM SPECS &amp; CREDITS:</strong>
          <p>
            {t("footer.description")} GitHub. {t("footer.font")} / Pixel Fonts.
          </p>
        </div>

        <div className={"endCredits"}>
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
