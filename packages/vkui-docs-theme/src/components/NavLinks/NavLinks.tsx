import * as React from 'react';
import { Icon16ChevronLeft, Icon16ChevronOutline } from '@vkontakte/icons';
import { classNames } from '@vkontakte/vkjs';
import { Footnote, Headline, Tappable } from '@vkontakte/vkui';
import NextLink from 'next/link';
import type { Item } from 'nextra/normalize-pages';
import { useThemeConfig } from '../../contexts';
import styles from './NavLinks.module.css';

interface NavLinkProps {
  currentIndex: number;
  flatDirectories: Item[];
}

interface NavLinkItemProps {
  route: string;
  children: React.ReactNode;
  className?: string;
  type?: 'prev' | 'next';
}

function NavLinkItem({ type = 'prev', route, children, className }: NavLinkItemProps) {
  return (
    <Tappable
      Component={NextLink}
      href={route}
      className={classNames(styles.navLinkItem, className)}
    >
      <Footnote>{type === 'next' ? 'Следующая' : 'Предыдущая'}</Footnote>
      <div className={classNames(styles.navLink)}>{children}</div>
    </Tappable>
  );
}

export function NavLinks({ flatDirectories, currentIndex }: NavLinkProps) {
  const themeConfig = useThemeConfig();
  const nav = themeConfig.navigation;
  const navigation = typeof nav === 'boolean' ? { prev: nav, next: nav } : nav;
  let prev = navigation.prev && flatDirectories[currentIndex - 1];
  let next = navigation.next && flatDirectories[currentIndex + 1];

  if (prev && !prev.isUnderCurrentDocsTree) {
    prev = false;
  }
  if (next && !next.isUnderCurrentDocsTree) {
    next = false;
  }

  if (!prev && !next) {
    return null;
  }

  return (
    <div className={styles.root}>
      {prev && (
        <NavLinkItem route={prev.route}>
          <Icon16ChevronLeft className={styles.navLinkPrevIcon} aria-hidden />
          <Headline>{prev.title}</Headline>
        </NavLinkItem>
      )}
      {next && (
        <NavLinkItem route={next.route} className={styles.navLinkItemNext} type="next">
          <Headline>{next.title}</Headline>
          <Icon16ChevronOutline className={styles.navLinkNextIcon} aria-hidden />
        </NavLinkItem>
      )}
    </div>
  );
}
