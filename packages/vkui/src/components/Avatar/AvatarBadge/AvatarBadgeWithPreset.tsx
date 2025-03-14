'use client';

import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { useDirection } from '../../../hooks/useDirection';
import { useExternRef } from '../../../hooks/useExternRef';
import {
  getBadgeIconSizeByImageBaseSize,
  ImageBase,
  type ImageBaseBadgeProps,
  ImageBaseContext,
} from '../../ImageBase/ImageBase';
import { Icon12Circle, Icon12OnlineMobile } from './icons';
import styles from './AvatarBadge.module.css';

export interface AvatarBadgeWithPresetProps
  extends Omit<ImageBaseBadgeProps, 'background' | 'children'> {
  /**
   * Использует предзаданные настройки.
   *
   * За каждым пресетом закреплена своя иконка и стили.
   */
  preset?: 'online' | 'online-mobile';
}

export const AvatarBadgeWithPreset: React.FC<AvatarBadgeWithPresetProps> = ({
  preset = 'online',
  className,
  getRootRef,
  ...restProps
}: AvatarBadgeWithPresetProps) => {
  const [directionRef, textDirection = 'ltr'] = useDirection<HTMLDivElement>();
  const isRtl = textDirection === 'rtl';
  const rootRef = useExternRef(getRootRef, directionRef);
  const { size } = React.useContext(ImageBaseContext);
  const badgeSize = getBadgeIconSizeByImageBaseSize(size);
  const isOnlinePreset = preset === 'online';
  const presetClassName = isOnlinePreset ? styles.presetOnline : styles.presetOnlineMobile;
  const Icon = isOnlinePreset ? Icon12Circle : Icon12OnlineMobile;

  return (
    <ImageBase.Badge
      background="stroke"
      className={classNames(styles.host, isRtl && styles.rtl, presetClassName, className)}
      getRootRef={rootRef}
      {...restProps}
    >
      <Icon width={badgeSize} height={badgeSize} />
    </ImageBase.Badge>
  );
};

AvatarBadgeWithPreset.displayName = 'Avatar.BadgeWithPreset';
