import {
  get, last, reverse, set,
} from 'lodash';

import { createStats } from '../stats/create';
import { createStatsSummary } from '../stats/create-summary';
import { extractDataFromWebpackStats } from '../utils/extract-data';

const RAW_DATA_IDS = [
  'webpack.stats',
  'lighthouse',
  'browsertime',
];

/*
 * Create job from stats
 */
export const createJob = (source, baseline) => {
  const data = RAW_DATA_IDS.reduce((agg, rawDataPath) => {
    const rawData = get(source, rawDataPath);

    if (rawData) {
      set(agg, `rawData.${rawDataPath}`, extractDataFromWebpackStats(rawData));
    }

    return { ...agg };
  }, {});

  const stats = createStats(baseline && baseline.rawData, data.rawData);
  const summary = createStatsSummary(baseline && baseline.stats, stats);

  return {
    ...data,
    stats,
    summary,
  };
};

/*
 * Create jobs from sources
 */
export const createJobs = (sources) => {
  const jobs = reverse([...sources]).reduce((agg, source, idx) => [
    {
      ...createJob(source, last(agg)),
      internalBuildNumber: (sources.length - idx),
    },
    ...agg,
  ], []);

  return jobs;
};
