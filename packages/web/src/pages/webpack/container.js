import {
  compose,
  withProps,
} from 'recompose';

import { METRIC_TYPE_FILE_SIZE } from '../../../../core/config/metrics';
import withSources from '../../hocs/with-sources';
import withRuns from '../../hocs/with-runs';
import calculateTotals from './utils/calculate-totals';

const createAssets = sources =>
  sources.map(({ loading, error, res }, index) => {
    if (loading || error) {
      return {};
    }

    return {
      label: `Run #${index}`,
      data: {
        ...res,
        assets: res && res.assets && res.assets.map(item => ({
          ...item,
          type: METRIC_TYPE_FILE_SIZE,
        })),
      },
    };
  });

const createTotalByType = sources =>
  sources.map(({ loading, error, res }, index) => {
    if (loading || error) {
      return {};
    }

    return {
      label: `Run #${index}`,
      data: calculateTotals(res.assets || []),
    };
  });

const metricsMap = {};

const metaMap = {
  hash: 'hash',
};

const enhance = compose(
  withSources(),
  withRuns(metricsMap, metaMap),
  withProps(({ sources }) => ({
    assets: createAssets(sources),
    totalByType: createTotalByType(sources),
  })),
);

export default enhance;
