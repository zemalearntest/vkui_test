import * as React from "react";
import { Tappable } from "../Tappable/Tappable";
import { PopoutWrapper } from "../PopoutWrapper/PopoutWrapper";
import { classNames } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import { Button, ButtonProps } from "../Button/Button";
import { hasReactNode, stopPropagation } from "../../lib/utils";
import { Title } from "../Typography/Title/Title";
import { Caption } from "../Typography/Caption/Caption";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Text } from "../Typography/Text/Text";
import { ModalDismissButton } from "../ModalDismissButton/ModalDismissButton";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { useScrollLock } from "../AppRoot/ScrollContext";
import { useWaitTransitionFinish } from "../../hooks/useWaitTransitionFinish";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivityWithMediaQueries } from "../../hooks/useAdaptivityWithMediaQueries";
import "./Alert.css";

export type AlertActionInterface = AlertAction &
  React.AnchorHTMLAttributes<HTMLElement>;

export interface AlertAction extends Pick<ButtonProps, "Component" | "href"> {
  title: string;
  action?: VoidFunction;
  autoClose?: boolean;
  mode: "cancel" | "destructive" | "default";
}

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  actionsLayout?: "vertical" | "horizontal";
  actions?: AlertAction[];
  header?: React.ReactNode;
  text?: React.ReactNode;
  onClose?: VoidFunction;

  /**
   * `aria-label` для кнопки закрытия. Необходим, чтобы кнопка была доступной.
   */
  dismissLabel?: string;
}

type ItemClickHandler = (item: AlertActionInterface) => void;

interface AlertTypography {
  id: string;
  children?: React.ReactNode;
}

const AlertHeader = (props: AlertTypography) => {
  const platform = usePlatform();

  switch (platform) {
    case Platform.IOS:
      return (
        <Title vkuiClass="Alert__header" weight="1" level="3" {...props} />
      );
    default:
      return (
        <Title vkuiClass="Alert__header" weight="2" level="2" {...props} />
      );
  }
};

const AlertText = (props: AlertTypography) => {
  const platform = usePlatform();

  switch (platform) {
    case Platform.VKCOM:
      return <Footnote vkuiClass="Alert__text" {...props} />;
    case Platform.IOS:
      return <Caption vkuiClass="Alert__text" {...props} />;
    default:
      return (
        <Text Component="span" vkuiClass="Alert__text" weight="3" {...props} />
      );
  }
};

interface AlertActionProps {
  action: AlertActionInterface;
  onItemClick: ItemClickHandler;
}

const AlertAction = ({
  action,
  onItemClick,
  ...restProps
}: AlertActionProps) => {
  const platform = usePlatform();
  const handleItemClick = React.useCallback(
    () => onItemClick(action),
    [onItemClick, action]
  );

  if (platform === Platform.IOS) {
    const { Component = "button" } = action;
    return (
      <Tappable
        Component={action.href ? "a" : Component}
        vkuiClass={classNames(
          "Alert__action",
          `Alert__action--mode-${action.mode}`
        )}
        onClick={handleItemClick}
        href={action.href}
        target={action.target}
        {...restProps}
      >
        {action.title}
      </Tappable>
    );
  }

  let mode: ButtonProps["mode"] = "tertiary";

  if (platform === Platform.VKCOM) {
    mode = action.mode === "cancel" ? "secondary" : "primary";
  }

  return (
    <Button
      vkuiClass={classNames(
        "Alert__button",
        `Alert__button--mode-${action.mode}`
      )}
      mode={mode}
      size="m"
      onClick={handleItemClick}
      Component={action.Component}
      href={action.href}
      target={action.target}
    >
      {action.title}
    </Button>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Alert
 */
export const Alert = ({
  actions = [],
  actionsLayout = "horizontal",
  children,
  className,
  style,
  text,
  header,
  onClose,
  dismissLabel = "Закрыть предупреждение",
  ...restProps
}: AlertProps) => {
  const platform = usePlatform();
  const { isDesktop } = useAdaptivityWithMediaQueries();
  const { waitTransitionFinish } = useWaitTransitionFinish();

  const [closing, setClosing] = React.useState(false);

  const elementRef = React.useRef<HTMLDivElement>(null);

  const resolvedActionsLayout: AlertProps["actionsLayout"] =
    platform === Platform.VKCOM ? "horizontal" : actionsLayout;

  const timeout = platform === Platform.IOS ? 300 : 200;

  const close = React.useCallback(() => {
    setClosing(true);
    waitTransitionFinish(
      elementRef.current,
      (e?: TransitionEvent) => {
        if (!e || e.propertyName === "opacity") {
          onClose && onClose();
        }
      },
      timeout
    );
  }, [elementRef, waitTransitionFinish, onClose, timeout]);

  const onItemClick: ItemClickHandler = React.useCallback(
    (item: AlertActionInterface) => {
      const { action, autoClose } = item;

      if (autoClose) {
        setClosing(true);
        waitTransitionFinish(
          elementRef.current,
          (e?: TransitionEvent) => {
            if (!e || e.propertyName === "opacity") {
              onClose && onClose();
              action && action();
            }
          },
          timeout
        );
      } else {
        action && action();
      }
    },
    [elementRef, waitTransitionFinish, onClose, timeout]
  );

  useScrollLock();

  return (
    <PopoutWrapper
      className={className}
      closing={closing}
      style={style}
      onClick={close}
    >
      <FocusTrap
        {...restProps}
        getRootRef={elementRef}
        onClick={stopPropagation}
        onClose={close}
        timeout={timeout}
        vkuiClass={classNames(
          "Alert",
          platform === Platform.IOS && "Alert--ios",
          platform === Platform.VKCOM && "Alert--vkcom",
          resolvedActionsLayout === "vertical" ? "Alert--v" : "Alert--h",
          closing && "Alert--closing",
          isDesktop && "Alert--desktop"
        )}
        role="alertdialog"
        aria-modal
        aria-labelledby="vkui--alert--title"
        aria-describedby="vkui--alert--desc"
      >
        <div vkuiClass="Alert__content">
          {hasReactNode(header) && (
            <AlertHeader id="vkui--alert--title">{header}</AlertHeader>
          )}
          {hasReactNode(text) && (
            <AlertText id="vkui--alert--desc">{text}</AlertText>
          )}
          {children}
        </div>
        <div vkuiClass="Alert__actions">
          {actions.map((action, i) => (
            <AlertAction key={i} action={action} onItemClick={onItemClick} />
          ))}
        </div>
        {isDesktop && (
          <ModalDismissButton onClick={close} aria-label={dismissLabel} />
        )}
      </FocusTrap>
    </PopoutWrapper>
  );
};
