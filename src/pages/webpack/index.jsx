import PropTypes from 'prop-types';

import Helmet from '../../components/helmet';
import Sources from '../../components/sources';
import Assets from '../../components/webpack/assets';
import TotalByTypeTable from '../../components/webpack/total-by-type-table';
import config from './config.json';
import locale from './locale.json';
import enhance from './container';
import styles from './styles.css';

const Webpack = (props) => {
  const {
    sources,
    addSource,
    addSources,
    removeSource,
    assets,
    totalByType,
  } = props;

  return (
    <div>
      <Helmet
        title={locale.title}
        description={locale.description}
      />

      <Sources
        sources={sources}
        exampleUrls={config.exampleUrls}
        exampleText={locale.loadExample}
        onAddFormSubmit={addSource}
        onSourceRemove={removeSource}
        addSources={addSources}
      />

      {totalByType.length > 0 && (
        <div className={styles.totalByType}>
          <TotalByTypeTable runs={totalByType} />
        </div>
      )}

      {assets.length > 0 && (
        <div className={styles.assets}>
          <Assets
            runs={assets}
            className={styles.assets}
          />
        </div>
      )}
    </div>
  );
};

Webpack.defaultProps = {
  sources: [],
  totalByType: [],
  assets: [],
};

Webpack.propTypes = {
  sources: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  addSource: PropTypes.func.isRequired,
  addSources: PropTypes.func.isRequired,
  removeSource: PropTypes.func.isRequired,
  totalByType: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  assets: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

export default enhance(Webpack);
