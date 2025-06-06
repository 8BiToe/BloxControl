// src/components/Button.tsx
import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './Button.module.css';

type ButtonProps = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'cover';
  style?: React.CSSProperties;
};

export default function Button({ to, href, children, variant = 'primary', style }: ButtonProps) {
  const className = clsx(styles.button, styles[variant]);

  if (to) {
    return (
      <Link className={className} to={to} style={style}> {/* Pass style to Link */}
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer" style={style}> {/* Pass style to <a> */}
        {children}
      </a>
    );
  }
  return (
    <button className={className} type="button" style={style}> {/* Pass style to <button> */}
      {children}
    </button>
  );
}