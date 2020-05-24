import PropTypes from 'prop-types';
import { Box } from '@bundle-stats/ui/lib-esm/ui/box';
import { Container } from '@bundle-stats/ui/lib-esm/ui/container';
import { JobsHeader } from '@bundle-stats/ui/lib-esm/components/jobs-header';
import { DuplicatePackagesWarning } from '@bundle-stats/ui/lib-esm/components/duplicate-packages-warning';
import { Summary } from '@bundle-stats/ui/lib-esm/components/summary';
import { BundleAssets } from '@bundle-stats/ui/lib-esm/components/bundle-assets';
import { BundleAssetsTotalsChartBars } from '@bundle-stats/ui/lib-esm/components/bundle-assets-totals-chart-bars';
import { Footer } from '@bundle-stats/ui/lib-esm/layout/footer';
import { BundleAssetsTotalsTable } from '@bundle-stats/ui/lib-esm/components/bundle-assets-totals-table';
import { BundleModules } from '@bundle-stats/ui/lib-esm/components/bundle-modules';
import { BundlePackages } from '@bundle-stats/ui/lib-esm/components/bundle-packages';

import { Header } from './header';
import css from './styles.module.css';

const StandaloneAppLayout = (props) => (
  <div className={css.root}>
    <Header className={css.header} />
    <div
      className={css.main}
      {...props}
    />
    <Footer source="bundle-stats">
      <p className={css.footerInfo}>
        <a
          href={`https://github.com/relative-ci/bundle-stats/releases/tag/v${__VERSION__}`}
        >
          {`Version: ${__VERSION__}`}
        </a>
      </p>
    </Footer>
  </div>
);

const StandaloneApp = ({ jobs }) => {
  if (jobs.length === 0) {
    return (
      <StandaloneAppLayout>
        <Container>
          <div className={css.empty}>
            No data available.
          </div>
        </Container>
      </StandaloneAppLayout>
    );
  }

  const insights = jobs && jobs[0] && jobs[0].insights;
  const duplicatePackagesInsights = insights
    && insights.webpack
    && insights.webpack.duplicatePackages;

  return (
    <StandaloneAppLayout>
      <Container>
        <JobsHeader jobs={jobs} />
      </Container>
      <Container>
        <Summary
          data={jobs[0].summary}
          showSummaryItemDelta={jobs.length !== 1}
          showSummaryItemBaselineValue={jobs.length !== 1}
        />
      </Container>
      {duplicatePackagesInsights && (
        <Container>
          <DuplicatePackagesWarning duplicatePackages={duplicatePackagesInsights.data} />
        </Container>
      )}
      <Container>
        <BundleAssetsTotalsChartBars jobs={jobs} />
      </Container>
      <Container>
        <h2>
          <a
            href="#totals"
            id="totals"
            className={css.anchor}
          >
            Totals
          </a>
        </h2>
        <Box outline space="none">
          <BundleAssetsTotalsTable jobs={jobs} />
        </Box>
      </Container>
      <Container>
        <h2>
          <a
            id="assets"
            href="#assets"
            className={css.anchor}
          >
            Assets
          </a>
        </h2>
        <Box outline space="none">
          <BundleAssets jobs={jobs} />
        </Box>
      </Container>
      <Container>
        <h2>
          <a
            id="modules"
            href="#modules"
            className={css.anchor}
          >
            Modules
          </a>
        </h2>
        <BundleModules jobs={jobs} />
      </Container>
      <Container>
        <h2>
          <a
            id="packages"
            href="#packages"
            className={css.anchor}
          >
            Packages
          </a>
        </h2>
        <Box outline space="none">
          <BundlePackages jobs={jobs} />
        </Box>
      </Container>
    </StandaloneAppLayout>
  );
};

StandaloneApp.defaultProps = {
  jobs: [],
};

StandaloneApp.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    internalBuildNumber: PropTypes.number,
    insights: PropTypes.object,
    summary: PropTypes.object,
  })),
};

export default StandaloneApp;
