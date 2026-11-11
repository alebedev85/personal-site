import { Fragment } from "react";
import styles from "./ControllerActions.module.scss";

type ControllerAction = {
  value: string;
  label: string;
  ariaLabel: string;
  variant: "red" | "yellow";
} & (
  | {
      href: string;
      onClick?: never;
    }
  | {
      href?: never;
      onClick: () => void;
    }
);

type ControllerActionsProps = {
  actions: ControllerAction[];
  className?: string;
};

const ControllerActions = ({ actions, className }: ControllerActionsProps) => (
  <div className={`${styles.controllerActions} ${className ?? ""}`}>
    {actions.map((action) => {
      const className = `${styles.controlButton} ${
        action.variant === "red" ? styles.buttonRed : styles.buttonYellow
      }`;

      return (
        <Fragment key={action.ariaLabel}>
          {"href" in action ? (
            <a
              className={className}
              href={action.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={action.ariaLabel}
            >
              {action.value}
            </a>
          ) : (
            <button
              type="button"
              className={className}
              aria-label={action.ariaLabel}
              onClick={action.onClick}
            >
              {action.value}
            </button>
          )}
          <span>{action.label}</span>
        </Fragment>
      );
    })}
  </div>
);

export default ControllerActions;
