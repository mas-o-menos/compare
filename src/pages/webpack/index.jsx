import Router from 'preact-router';
import Match from 'preact-router/match';
import PropTypes from 'prop-types';
import { Container, Summary, Tabs } from '@relative-ci/ui';
import { isEmpty } from 'lodash';

import Helmet from '../../components/helmet';
import Sources from '../../components/sources';
import * as URLS from '../../utils/urls';
import Totals from './totals';
import Assets from './assets';
import Modules from './modules';
import config from './config.json';
import locale from './locale.json';
import enhance from './container';
import css from './styles.css';

const Webpack = (props) => {
  const {
    sources,
    addSource,
    removeSource,
    runs,
    jobs,
  } = props;

  return (
    <div className={css.root}>
      <Helmet
        title={locale.title}
        description={locale.description}
      />

      <Sources
        sources={sources}
        runs={runs}
        exampleUrls={config.exampleUrls}
        exampleText={locale.loadExample}
        addSource={addSource}
        removeSource={removeSource}
      />

      {!isEmpty(jobs) && (
        <div className={css.main}>
          <Container>
            <Summary data={jobs[0].summary} />
          </Container>
          <Container>
            <Match>
              {({ path }) => (
                <Tabs>
                  <a
                    href={URLS.getWebpackUrl(URLS.WEBPACK_TOTALS_SLUG)}
                    isTabActive={path === URLS.getWebpackPath(URLS.WEBPACK_TOTALS_SLUG)}
                  >
                    {locale.totals}
                  </a>
                  <a
                    href={URLS.getWebpackUrl(URLS.WEBPACK_ASSETS_SLUG)}
                    isTabActive={path === URLS.getWebpackPath(URLS.WEBPACK_ASSETS_SLUG)}
                  >
                    {locale.assets}
                  </a>
                  <a
                    href={URLS.getWebpackUrl(URLS.WEBPACK_MODULES_SLUG)}
                    isTabActive={path === URLS.getWebpackPath(URLS.WEBPACK_MODULES_SLUG)}
                  >
                    {locale.modules}
                  </a>
                </Tabs>
              )}
            </Match>
          </Container>
          <Router>
            <Totals jobs={jobs} path={URLS.getWebpackPath(URLS.WEBPACK_TOTALS_SLUG)} />
            <Assets jobs={jobs} path={URLS.getWebpackPath(URLS.WEBPACK_ASSETS_SLUG)} />
            <Modules jobs={jobs} path={URLS.getWebpackPath(URLS.WEBPACK_MODULES_SLUG)} />
          </Router>
        </div>
      )}
    </div>
  );
};

Webpack.defaultProps = {
  sources: [],
  runs: [],
  jobs: [],
};

Webpack.propTypes = {
  sources: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  addSource: PropTypes.func.isRequired,
  removeSource: PropTypes.func.isRequired,
  runs: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  jobs: PropTypes.arrayOf(PropTypes.shape({
    internalBuildNumber: PropTypes.number,
    rawData: PropTypes.shape({
      webpack: PropTypes.shape({
        assets: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          size: PropTypes.number,
        })),
      }),
    }),
  })),
};

export default enhance(Webpack);
