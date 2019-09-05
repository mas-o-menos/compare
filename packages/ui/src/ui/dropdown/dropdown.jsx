import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { IconText } from '../icon-text';
import css from './dropdown.module.css';

const ALIGN_LEFT = 'left';
const ALIGN_RIGHT = 'right';

export const Dropdown = (props) => {
  const {
    className, label, glyph, open, dropdownToggle, align, children,
  } = props;
  const rootClassName = cx(css.root, open && css.open, css[align], className);

  return (
    <div className={rootClassName}>
      <IconText
        className={css.label}
        glyph={glyph}
        as="button"
        type="button"
        onClick={dropdownToggle}
      >
        {label}
      </IconText>

      <div className={css.dropdown}>
        {typeof children === 'function' ? children({ dropdownToggle }) : children}
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  className: '',
  label: '',
  align: ALIGN_LEFT,
};

Dropdown.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** Button label */
  label: PropTypes.string,

  /** Icon glyph */
  glyph: PropTypes.string.isRequired,

  /** Dropdown open state */
  open: PropTypes.bool.isRequired,

  /** Align modifier */
  align: PropTypes.oneOf([ALIGN_LEFT, ALIGN_RIGHT]),

  /** Content */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]).isRequired,

  /** Dropdown toggle handler */
  dropdownToggle: PropTypes.func.isRequired,
};
