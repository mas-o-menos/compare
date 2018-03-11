import { fill, map, mergeWith, omit } from 'lodash';

const mergeWithRuns = (index, count) => (objValue, srcValue) => {
  // if there are no runs, just create an array and fill it with null
  const res = objValue && objValue.runs
    ? [...objValue.runs]
    : fill(Array(count), null);

  res[index] = omit(srcValue, 'type');

  return {
    type: srcValue.type,
    runs: res,
  };
};

/*
 * Merge all assetsById
 */
const mergeRunsById = (runs) => {
  const runsCount = runs.length;

  const metricsById = runs.reduce(
    (aggregator, run, index) =>
      mergeWith(
        aggregator,
        run,
        mergeWithRuns(index, runsCount),
      ),
    {},
  );

  return map(metricsById, (value, key) => ({
    key,
    ...value,
  }));
};

export default mergeRunsById;
