import React from 'react';
import { storiesOf } from '@storybook/react';

import { getWrapperDecorator } from '../../stories';
import { Table } from '.';

const stories = storiesOf('UI/Table', module);
stories.addDecorator(getWrapperDecorator());

stories.add('default', () => (
  <Table>
    <tbody>
      <Table.Tr>
        <Table.Td>a1</Table.Td>
        <Table.Td>b1</Table.Td>
        <Table.Td>c1</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>a2</Table.Td>
        <Table.Td>b2</Table.Td>
        <Table.Td>c2</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>a3</Table.Td>
        <Table.Td>b3</Table.Td>
        <Table.Td>c3</Table.Td>
      </Table.Tr>
    </tbody>
  </Table>
));

// @TODO add specific prop
stories.add('empty', () => <Table rows={[]} />);
stories.add('empty with custom element', () => (
  <Table
    rows={[]}
    emptyMessage={(
      <p style={{ outline: '1px solid lightgray' }}>
        No items available
      </p>
    )}
  />
));

stories.add('with headers', () => (
  <Table>
    <thead>
      <Table.Tr>
        <Table.Th>Col A</Table.Th>
        <Table.Th>Col B</Table.Th>
        <Table.Th>Col C</Table.Th>
      </Table.Tr>
    </thead>
    <tbody>
      <Table.Tr>
        <Table.Td>a1</Table.Td>
        <Table.Td>b1</Table.Td>
        <Table.Td>c1</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>a2</Table.Td>
        <Table.Td>b2</Table.Td>
        <Table.Td>c2</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>a3</Table.Td>
        <Table.Td>b3</Table.Td>
        <Table.Td>c3</Table.Td>
      </Table.Tr>
    </tbody>
  </Table>
));

stories.add('with multiple rows header', () => (
  <Table>
    <thead>
      <Table.Tr>
        <Table.Th> </Table.Th>
        <Table.Th colSpan={2}>Colspan</Table.Th>
      </Table.Tr>
      <Table.Tr>
        <Table.Th>Col A</Table.Th>
        <Table.Th>Col B</Table.Th>
        <Table.Th>Col C</Table.Th>
      </Table.Tr>
    </thead>
    <tbody>
      <Table.Tr>
        <Table.Td>a1</Table.Td>
        <Table.Td>b1</Table.Td>
        <Table.Td>c1</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>a2</Table.Td>
        <Table.Td>b2</Table.Td>
        <Table.Td>c2</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>a3</Table.Td>
        <Table.Td>b3</Table.Td>
        <Table.Td>c3</Table.Td>
      </Table.Tr>
    </tbody>
  </Table>
));

stories.add('with row headers', () => (
  <Table>
    <tbody>
      <Table.Tr>
        <Table.Th>row 1</Table.Th>
        <Table.Td>a1</Table.Td>
        <Table.Td>b1</Table.Td>
        <Table.Td>c1</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Th>row 2</Table.Th>
        <Table.Td>a2</Table.Td>
        <Table.Td>b2</Table.Td>
        <Table.Td>c2</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Th>row 3</Table.Th>
        <Table.Td>a3</Table.Td>
        <Table.Td>b3</Table.Td>
        <Table.Td>c3</Table.Td>
      </Table.Tr>
    </tbody>
  </Table>
));

stories.add('with custom content and attributes', () => (
  <Table>
    <thead>
      <Table.Tr>
        <Table.Th> </Table.Th>
        <Table.Th style={{ textAlign: 'right' }}>Col A (right)</Table.Th>
        <Table.Th style={{ textAlign: 'center' }}>Col B (center)</Table.Th>
        <Table.Th style={{ textDecoration: 'underline' }}>Col C(undefiner)</Table.Th>
      </Table.Tr>
    </thead>
    <tbody>
      <Table.Tr>
        <Table.Th><strong>row 1</strong></Table.Th>
        <Table.Td style={{ textAlign: 'right' }}>a1</Table.Td>
        <Table.Td style={{ textAlign: 'center', color: 'red' }}>b1</Table.Td>
        <Table.Td style={{ textDecoration: 'underline' }}>c1</Table.Td>
      </Table.Tr>
      <Table.Tr style={{ color: 'blue', fontSize: '1.5em' }}>
        <Table.Th><strong>row 2</strong></Table.Th>
        <Table.Td style={{ textAlign: 'right' }}>a2</Table.Td>
        <Table.Td style={{ textAlign: 'center'}}>b2</Table.Td>
        <Table.Td style={{ textDecoration: 'underline' }}>c2</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Th><strong>row 3</strong></Table.Th>
        <Table.Td style={{ textAlign: 'right' }}>a3</Table.Td>
        <Table.Td style={{ textAlign: 'center'}}>b3</Table.Td>
        <Table.Td style={{ textDecoration: 'underline' }}>c3</Table.Td>
      </Table.Tr>
    </tbody>
  </Table>
));
