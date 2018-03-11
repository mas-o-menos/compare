import PropTypes from 'prop-types';

import Add from './add';
import List from './list';
import Example from './example';
import styles from './styles.css';

const Sources = ({
  sources,
  runs,
  exampleUrls,
  exampleText,
  addSource,
  removeSource,
}) => {
  const handleExamplesClick = urls => urls.forEach(addSource);

  return (
    <div class={styles.root}>
      <List
        sources={sources}
        runs={runs}
        removeSource={removeSource}
      />
      <Add onSubmit={addSource} />

      {sources.length === 0 && exampleUrls.length > 0 && (
        <Example
          urls={exampleUrls}
          text={exampleText}
          onLoadClick={handleExamplesClick}
        />
      )}
    </div>
  );
};

Sources.defaultProps = {
  sources: [],
  runs: [],
  exampleUrls: [],
  exampleText: '',
};

Sources.propTypes = {
  sources: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  runs: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  exampleUrls: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  exampleText: PropTypes.string,
  addSource: PropTypes.func.isRequired,
  removeSource: PropTypes.func.isRequired,
};

export default Sources;
