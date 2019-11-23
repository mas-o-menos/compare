import React from 'react';
import { storiesOf } from '@storybook/react';
import { createJobs } from '@bundle-stats/utils';
import { merge, set } from 'lodash';

import baselineStats from '../../../__mocks__/webpack-stats.baseline.json';
import currentStats from '../../../__mocks__/webpack-stats.current.json';
import { getWrapperDecorator } from '../../stories';
import { BundleModules } from './bundle-modules';

const [currentJob, baselineJob] = createJobs([
  { webpack: currentStats },
  { webpack: baselineStats },
]);

const stories = storiesOf('Components/BundleModules', module);
stories.addDecorator(getWrapperDecorator());

stories.add('default', () => (
  <BundleModules jobs={[currentJob]} />
));

stories.add('multiple runs', () => (
  <BundleModules jobs={[currentJob, baselineJob]} />
));

stories.add('empty baseline', () => (
  <BundleModules jobs={[currentJob, null]} />
));

stories.add('no modules', () => (
  <BundleModules
    jobs={[
      set(merge({}, currentJob), 'metrics.webpack.modules', {}),
      set(merge({}, baselineJob), 'metrics.webpack.modules', {}),
    ]}
  />
));
