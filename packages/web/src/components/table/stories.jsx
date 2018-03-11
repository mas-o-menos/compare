/* global module */
import { storiesOf } from '@storybook/react';

import Table from './';


storiesOf('Components/Table', module)
  .add('default', () => {
    const rows = [
      {
        cells: ['a1', 'b1', 'c1'],
      },
      {
        cells: ['a2', 'b2', 'c2'],
      },
      {
        cells: ['a3', 'b3', 'c3'],
      },
    ];

    return <Table rows={rows} />;
  })
  .add('with headers', () => {
    const headers = ['Col A', 'Col B', 'Col C'];
    const rows = [
      {
        cells: ['a1', 'b1', 'c1'],
      },
      {
        cells: ['a2', 'b2', 'c2'],
      },
      {
        cells: ['a3', 'b3', 'c3'],
      },
    ];

    return <Table headers={headers} rows={rows} />;
  })
  .add('with row headers', () => {
    const rows = [
      {
        header: 'row 1',
        cells: ['a1', 'b1', 'c1'],
      },
      {
        header: 'row 2',
        cells: ['a2', 'b2', 'c2'],
      },
      {
        header: 'row 3',
        cells: ['a3', 'b3', 'c3'],
      },
    ];

    return <Table rows={rows} />;
  })
  .add('with custom alignment', () => {
    const headers = [
      '',
      {
        text: 'Col A (right)',
        options: {
          align: 'right',
        },
      },
      {
        text: 'Col B (center)',
        options: {
          align: 'center',
        },
      },
      'Col C',
    ];
    const rows = [
      {
        header: 'row 1',
        cells: ['a1', 'b1', 'c1'],
      },
      {
        header: 'row 2',
        cells: ['a2', 'b2', 'c2'],
      },
      {
        header: 'row 3',
        cells: ['a3', 'b3', 'c3'],
      },
    ];

    return <Table headers={headers} rows={rows} />;
  });
