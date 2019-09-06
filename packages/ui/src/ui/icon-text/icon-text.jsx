import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import BranchIcon from './assets/branch.svg';
import ClockIcon from './assets/clock.svg';
import CommitIcon from './assets/commit.svg';
import FilterIcon from './assets/filter.svg';
import PackageIcon from './assets/package.svg';
import PullRequestIcon from './assets/pull-request.svg';
import SortIcon from './assets/sort.svg';

import css from './icon-text.module.css';

const ICONS = {
  branch: BranchIcon,
  clock: ClockIcon,
  commit: CommitIcon,
  filter: FilterIcon,
  package: PackageIcon,
  pr: PullRequestIcon,
  sort: SortIcon,
};

export const IconText = ({
  className,
  glyph,
  children,
  as: Component,
  ...restProps
}) => {
  const Icon = ICONS[glyph];

  return (
    <Component className={cx(css.root, className)} {...restProps}>
      <Icon className={css.icon} />
      <span className={css.text}>
        {children}
      </span>
    </Component>
  );
};

IconText.defaultProps = {
  className: '',
  as: 'span',
  children: null,
};

IconText.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string.isRequired,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  children: PropTypes.node,
};
