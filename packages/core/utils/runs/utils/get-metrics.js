import {
  get,
  isFunction,
} from 'lodash';

const getMetrics = (res, metricsMap) =>
  Object.entries(metricsMap).reduce((aggregator, [internalId, id]) => ({
    ...aggregator,
    [internalId]: {
      value: isFunction(id) ?
        id(res) :
        get(res, id, 0),
    },
  }), {});

export default getMetrics;
