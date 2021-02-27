import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getGlobalMetricType, getMetricRunInfo } from '@bundle-stats/utils';

import { Icon } from '../../ui/icon';
import { Popover } from '../../ui/popover';
import { Stack } from '../../layout/stack';
import { FlexStack } from '../../layout/flex-stack';
import { Metric } from '../metric';
import { Delta } from '../delta';
import css from './summary-item.module.css';

const MetricInfo = ({ description, url }) => {
  // Workaround cases where the parent is a link
  const readMoreOnClick = () => {
    window.open(url);
  };

  return (
    <Stack space="xxxsmall">
      <p>{description}</p>
      {url && (
        <p>
          <button
            type="button"
            className={cx('ui-button ui-button--clear', css.readMoreBtn)}
            onClick={readMoreOnClick}
          >
            Read more
          </button>
        </p>
      )}
    </Stack>
  );
};

MetricInfo.propTypes = {
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
};

MetricInfo.defaultProps = {
  url: '',
};

export const SummaryItem = ({
  className,
  as: Component,
  size,
  id,
  data,
  loading,
  showDelta,
  showMetricDescription,
  ...props
}) => {
  const { baseline, current } = data || { baseline: 0, current: 0 };

  const metric = getGlobalMetricType(id);
  const runInfo = getMetricRunInfo(metric, current, baseline);
  const showMetricDescriptionTooltip = showMetricDescription && metric?.description;

  const rootClassName = cx(
    css.root,
    className,
    css[size],
    showMetricDescription && css.showMetricDescription,
    showMetricDescriptionTooltip && css.showMetricDescription,
    showDelta && css.showDelta,
  );

  return (
    <Stack as={Component} className={rootClassName} {...props}>
      <FlexStack space="xxxsmall" className={css.header}>
        <h3 className={css.title}>{metric.label}</h3>

        {showMetricDescriptionTooltip && (
          <Popover
            className={css.icon}
            content={<MetricInfo {...metric} />}
          >
            <Icon glyph="help" />
          </Popover>
        )}
      </FlexStack>

      {!loading ? (
        <Metric className={css.currentMetric} value={current} formatter={metric.formatter} enhanced>
          {showDelta && (
            <Delta
              className={css.delta}
              displayValue={runInfo.displayDeltaPercentage}
              deltaType={runInfo.deltaType}
            />
          )}
        </Metric>
      ) : (
        <span className={cx(css.currentMetric, css.loading)} />
      )}
    </Stack>
  );
};

SummaryItem.defaultProps = {
  className: '',
  as: 'div',
  data: null,
  size: 'medium',
  loading: false,
  showMetricDescription: false,
  showDelta: true,
};

SummaryItem.propTypes = {
  /** Adopted child class name */
  className: PropTypes.string,

  /** Custom component */
  as: PropTypes.elementType,

  /** Size modifier */
  size: PropTypes.oneOf(['medium', 'large']),

  /** Metric id */
  id: PropTypes.string.isRequired,

  /** Loading flag */
  loading: PropTypes.bool,

  /** Summary data */
  data: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /** Show description */
  showMetricDescription: PropTypes.bool,

  /** Show delta */
  showDelta: PropTypes.bool,
};
