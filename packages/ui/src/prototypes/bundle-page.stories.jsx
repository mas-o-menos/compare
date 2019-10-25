import React from 'react';
import { storiesOf } from '@storybook/react';
import { createJob } from '@bundle-stats/utils';

import currentData from '../../__mocks__/job.current.json';
import baselineData from '../../__mocks__/job.baseline.json';
import {
  Box, Container, Logo, Tabs,
} from '../ui';
import { Header, Footer } from '../layout';
import { BundleAssets } from '../components/bundle-assets';
import { BundleAssetsTotalsTable } from '../components/bundle-assets-totals-table';
import { BundleAssetsTotalsChartBars } from '../components/bundle-assets-totals-chart-bars';
import { BundleModules } from '../components/bundle-modules';
import { Summary } from '../components/summary';
import { DuplicatePackagesWarning } from '../components/duplicate-packages-warning';
import { getWrapperDecorator } from '../stories';
import css from './bundle-page.module.css';

const stories = storiesOf('Prototypes/BundlePage', module);
stories.addDecorator(getWrapperDecorator());

const baselineJob = createJob(baselineData.rawData);
const currentJob = createJob(currentData.rawData, baselineJob);

const JOBS = [currentJob, baselineJob];

const PageHeader = () => (
  <Header
    className={css.header}
    renderLeft={(sideProps) => (
      <div {...sideProps}>
        <Logo kind="logo" className={css.headerLogo} />
        <Logo kind="logotype" className={css.headerLogotype} />
      </div>
    )}
  />
);

stories.add('totals', () => (
  <>
    <PageHeader />
    <main className={css.main}>
      <Container>
        <Summary data={currentJob.summary} />
      </Container>
      {currentJob.warnings && currentJob.warnings.duplicatePackages && (
        <Container>
          <DuplicatePackagesWarning duplicatePackages={currentJob.warnings.duplicatePackages} />
        </Container>
      )}
      <Container>
        <Tabs>
          <span isTabActive>Totals</span>
          <span>Assets</span>
          <span>Modules</span>
        </Tabs>
      </Container>
      <Container>
        <BundleAssetsTotalsChartBars jobs={JOBS} />
      </Container>
      <Container>
        <Box>
          <BundleAssetsTotalsTable jobs={JOBS} />
        </Box>
      </Container>
    </main>
    <Footer className={css.footer} />
  </>
));

stories.add('assets', () => (
  <>
    <PageHeader />
    <main className={css.main}>
      <Container>
        <Summary data={currentJob.summary} />
      </Container>
      {currentJob.warnings && currentJob.warnings.duplicatePackages && (
        <Container>
          <DuplicatePackagesWarning duplicatePackages={currentJob.warnings.duplicatePackages} />
        </Container>
      )}
      <Container>
        <Tabs>
          <span>Totals</span>
          <span isTabActive>Assets</span>
          <span>Modules</span>
        </Tabs>
      </Container>
      <Container>
        <Box>
          <BundleAssets jobs={JOBS} />
        </Box>
      </Container>
    </main>
    <Footer className={css.footer} />
  </>
));

stories.add('modules', () => (
  <>
    <PageHeader />
    <main className={css.main}>
      <Container>
        <Summary data={currentJob.summary} />
      </Container>
      {currentJob.warnings && currentJob.warnings.duplicatePackages && (
        <Container>
          <DuplicatePackagesWarning duplicatePackages={currentJob.warnings.duplicatePackages} />
        </Container>
      )}
      <Container>
        <Tabs>
          <span>Totals</span>
          <span>Assets</span>
          <span isTabActive>Modules</span>
        </Tabs>
      </Container>
      <Container>
        <BundleModules jobs={JOBS} />
      </Container>
    </main>
    <Footer className={css.footer} />
  </>
));
