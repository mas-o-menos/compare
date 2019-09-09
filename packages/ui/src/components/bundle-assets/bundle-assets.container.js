import {
  compose, withProps, withState,
} from 'recompose';
import { get, filter } from 'lodash';
import {
  FILE_TYPES,
  METRIC_TYPE_FILE_SIZE,
  addMetricsData,
  getFileType,
  getAssetsMetrics,
  mergeRunsById,
} from '@bundle-stats/utils';

import { withCustomSort } from '../../hocs/with-custom-sort';
import {
  FILTER_ASSET,
  FILTER_CHANGED,
  FILTER_CHUNK,
  FILTER_ENTRY,
  FILTER_INITIAL,
  SORT_BY_NAME,
  SORT_BY_DELTA,
  SORT_BY_SIZE,
  SORT_BY,
} from './bundle-assets.constants';

const addRowFlags = ({ items }) => {
  const updatedItems = items.map((item) => {
    const { runs } = item;

    const isEntry = runs.map((run) => run && run.isEntry).includes(true);
    const isInitial = runs.map((run) => run && run.isInitial).includes(true);
    const isChunk = runs.map((run) => run && run.isChunk).includes(true);

    const isAsset = !(isEntry || isInitial || isChunk);

    return {
      ...item,
      isEntry,
      isInitial,
      isChunk,
      isAsset,
    };
  });

  return {
    items: updatedItems,
  };
};

const getIsNotPredictive = (key, runs) => runs.reduce((agg, current, index) => {
  if (agg) {
    return agg;
  }

  if (index + 1 === runs.length) {
    return agg;
  }

  if (
    current
    && runs[index + 1]
    && current.delta !== 0
    && ((key !== current.name) && (current.name === runs[index + 1].name))
  ) {
    return true;
  }

  return agg;
}, false);

const addRowIsNotPredictive = ({ items }) => ({
  items: items.map((item) => ({
    ...item,
    isNotPredictive: getIsNotPredictive(item.key, item.runs),
  })),
});

const getRowFilter = (filters) => (item) => {
  if (filters[FILTER_CHANGED] && !item.changed) {
    return false;
  }

  if (!(
    (filters[`entryTypes.${FILTER_ENTRY}`] && item.isEntry)
    || (filters[`entryTypes.${FILTER_INITIAL}`] && item.isInitial)
    || (filters[`entryTypes.${FILTER_CHUNK}`] && item.isChunk)
    || (filters[`entryTypes.${FILTER_ASSET}`] && item.isAsset)
  )) {
    return false;
  }

  if (!filters[`fileTypes.${getFileType(item.key)}`]) {
    return false;
  }

  return true;
};

const getCustomSort = (sortId) => (item) => {
  if (sortId === SORT_BY_NAME) {
    return item.key;
  }

  if (sortId === SORT_BY_DELTA) {
    return get(item, 'runs[0].deltaPercentage', 0);
  }

  if (sortId === SORT_BY_SIZE) {
    return get(item, 'runs[0].value', 0);
  }

  return [
    !item.isNotPredictive,
    !item.changed,
    !item.isInitial,
    !item.isEntry,
    !item.isChunk,
    item.key,
  ];
};

const getFileTypeFilters = (value = true) => FILE_TYPES.reduce((agg, fileTypeFilter) => ({
  ...agg,
  [`fileTypes.${fileTypeFilter}`]: value,
}), {});

const getEntryTypeFilters = (value = true) => [
  FILTER_ENTRY,
  FILTER_INITIAL,
  FILTER_CHUNK,
  FILTER_ASSET,
].reduce((agg, entryTypeFilter) => ({
  ...agg,
  [`entryTypes.${entryTypeFilter}`]: value,
}), {});

export const enhance = compose(
  withProps(({ jobs }) => {
    const runs = jobs.map((job) => ({ meta: job }));
    const assets = jobs.map((job) => getAssetsMetrics(
      get(job, 'rawData.webpack.stats.assets', []),
      {
        chunks: get(job, 'rawData.webpack.stats.chunks', []),
        entrypoints: get(job, 'rawData.webpack.stats.entrypoints', {}),
      },
    ));

    const items = addMetricsData(mergeRunsById(assets), METRIC_TYPE_FILE_SIZE);

    return {
      runs,
      items,
    };
  }),

  // @TODO run both transformations in one pass
  withProps(addRowFlags),
  withProps(addRowIsNotPredictive),

  withState('filters', 'updateFilters', ({ jobs }) => ({
    [FILTER_CHANGED]: jobs.length > 1, // enable filter only when there are multiple jobs
    ...getEntryTypeFilters(true),
    ...getFileTypeFilters(true),
  })),

  withProps(({ items, filters }) => ({
    totalRowCount: items.length,
    items: filter(items, getRowFilter(filters)),
  })),

  withCustomSort({ sortItems: SORT_BY, getCustomSort, itemsKey: 'items' }),
);
