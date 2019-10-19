import React from 'react';
import { get } from 'lodash';
import { storiesOf } from '@storybook/react';
import { modulesWebpackTransform, getModulesReport } from '@bundle-stats/utils';

import currentData from '../../../__mocks__/job.current.json';
import baselineData from '../../../__mocks__/job.baseline.json';
import { getWrapperDecorator } from '../../stories';
import { BundleChunkModules } from '.';

const currentJob = {
  ...currentData,
  modules: currentData.rawData.webpack.stats.modules.filter((i) => i.chunks.includes(1)),
};
const baselineJob = {
  ...baselineData,
  modules: baselineData.rawData.webpack.stats.modules.filter((i) => i.chunks.includes(1)),
};

const stories = storiesOf('Components/BundleChunkModules', module);
stories.addDecorator(getWrapperDecorator());

const RUNS_DEFAULT = [
  currentJob,
].map((job) => ({
  meta: job,
  ...modulesWebpackTransform(get(job, 'rawData.webpack.stats')),
}));

stories.add('default', () => (
  <BundleChunkModules
    name="vendor"
    id="1"
    runs={RUNS_DEFAULT}
    modules={getModulesReport(RUNS_DEFAULT)[1].modules}
  />
));

const RUNS_MULTIPLE = [
  currentJob,
  baselineJob,
].map((job) => ({
  meta: job,
  ...modulesWebpackTransform(get(job, 'rawData.webpack.stats')),
}));

stories.add('multiple jobs', () => (
  <BundleChunkModules
    name="vendor"
    id="1"
    runs={RUNS_MULTIPLE}
    modules={getModulesReport(RUNS_MULTIPLE)[1].modules}
  />
));

const RUNS_EMPTY_BASELINE = [
  currentJob,
  null,
].map((job) => ({
  meta: job,
  ...modulesWebpackTransform(get(job, 'rawData.webpack.stats')),
}));

stories.add('empty baseline', () => (
  <BundleChunkModules
    name="vendor"
    id="1"
    runs={RUNS_EMPTY_BASELINE}
    modules={getModulesReport(RUNS_EMPTY_BASELINE)[1].modules}
  />
));
