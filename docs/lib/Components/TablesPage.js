/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import PageTitle from '../UI/PageTitle';
import SectionTitle from '../UI/SectionTitle';

import TableExample from '../examples/Table';
import TableBorderedExample from '../examples/TableBordered';
import TableBorderlessExample from '../examples/TableBorderless';
import TableHoverExample from '../examples/TableHover';
import TableDarkExample from '../examples/TableDark';
import TableResponsiveExample from '../examples/TableResponsive';
import TableSizingExample from '../examples/TableSizing';
import TableStripedExample from '../examples/TableStriped';

const TableExampleSource = require('!!raw-loader!../examples/Table');
const TableBorderedExampleSource = require('!!raw-loader!../examples/TableBordered');
const TableBorderlessExampleSource = require('!!raw-loader!../examples/TableBorderless');
const TableHoverExampleSource = require('!!raw-loader!../examples/TableHover');
const TableDarkExampleSource = require('!!raw-loader!../examples/TableDark');
const TableResponsiveExampleSource = require('!!raw-loader!../examples/TableResponsive');
const TableSizingExampleSource = require('!!raw-loader!../examples/TableSizing');
const TableStripedExampleSource = require('!!raw-loader!../examples/TableStriped');

export default class TablesPage extends React.Component {
  render() {
    return (
      <div>
        <PageTitle title="Tables" />
        <hr />
        <div className="docs-example">
          <TableExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableExampleSource}
          </PrismCode>
        </pre>
        <h4>Properties</h4>
        <pre>
        <PrismCode className="language-jsx">
{`Table.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
size: PropTypes.string,
bordered: PropTypes.bool,
borderless: PropTypes.bool,
striped: PropTypes.bool,
dark: PropTypes.bool,
hover: PropTypes.bool,
responsive: PropTypes.bool,
// Custom ref handler that will be assigned to the "ref" of the inner <table> element
innerRef: PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.string,
  PropTypes.object
])
};`}
        </PrismCode>
        </pre>
        <SectionTitle>Dark table</SectionTitle>
        <div className="docs-example">
          <TableDarkExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableDarkExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Striped rows</SectionTitle>
        <div className="docs-example">
          <TableStripedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableStripedExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Bordered table</SectionTitle>
        <div className="docs-example">
          <TableBorderedExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableBorderedExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Borderless table</SectionTitle>
        <div className="docs-example">
          <TableBorderlessExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableBorderlessExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Hoverable rows</SectionTitle>
        <div className="docs-example">
          <TableHoverExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableHoverExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Small table</SectionTitle>
        <div className="docs-example">
          <TableSizingExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableSizingExampleSource}
          </PrismCode>
        </pre>
        <SectionTitle>Responsive table</SectionTitle>
        <div className="docs-example">
          <TableResponsiveExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {TableResponsiveExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
