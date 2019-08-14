import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container, Logo } from '../ui';
import { getWrapperDecorator } from '../stories';
import { Header, SubHeader } from '../layout';
import content from './typography.md';
import css from './typography.module.css';

const stories = storiesOf('Prototypes/Styleguide', module);
stories.addDecorator(getWrapperDecorator());

stories.add('typography', () => (
  <>
    <Header
      className={css.header}
      renderLeft={(sideProps) => (
        <div {...sideProps}>
          <h1 className={css.headerTitle}>
            <Logo className={css.headerLogo} />
            <span>BundleStats</span>
          </h1>
        </div>
      )}
    />
    <SubHeader
      className={css.subheader}
      title="HTML Ipsum presents"
      subtitle="Documentation"
    />
    <main className={css.main}>
      <Container dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  </>
));

// eslint-disable-next-line react/prop-types
const Item = ({ colorName, valueName = 'normal' }) => {
  const colorFullName = valueName === 'normal'
    ? colorName
    : [colorName, valueName].join('-');

  return (
    <div
      style={{
        background: `var(--color-${colorFullName})`,
        color: 'var(--color-light)',
        padding: '12px',
        flex: '1 1 20%',
      }}
    >
      {`${colorName} ${valueName}`}
    </div>
  );
};

const COLORS = [
  'blue',
  'red',
  'green',
  'yellow',
  'gray',
];

const NAMES = [
  'ultra-light',
  'light',
  'normal',
  'dark',
  'ultra-dark',
];

stories.add('color sheme', () => (
  <Container>
    <Item colorName="branding" valueName="light" />
    <Item colorName="branding" />
    <Item colorName="branding" valueName="dark" />

    <hr />

    <Item colorName="dark" />

    <hr />

    {COLORS.map((colorName) => (
      <div style={{ display: 'flex', marginBottom: '24px' }}>
        {NAMES.map((valueName) => (
          <Item
            key={`${colorName}-${valueName}`}
            colorName={colorName}
            valueName={valueName}
          />
        ))}
      </div>
    ))}
  </Container>
));
