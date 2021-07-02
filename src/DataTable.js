import React, { useState } from 'react';

import './App.css';

import { Button, ButtonGroup, Navbar, Alignment, Menu, MenuItem, MenuDivider, Tabs, Tab, Divider, Card, Elevation } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { EditableCell, EditableName, Cell, Column, Table } from "@blueprintjs/table";

const SAMPLE_DATA = {
  columns: [
    {
      id: "name",
      name: "Name",
      type: "string"
    },
    {
      id: "age",
      name: "Age",
      type: "integer"
    },
    {
      id: "breed",
      name: "Breed",
      type: "string"
    },
    {
      id: "isCool",
      name: "Is Cool?",
      type: "boolean"
    },
  ],
  rows: [
    {
      name: "Rex",
      age: 1,
      breed: "terrier",
      isCool: true
    },
    {
      name: "Lucy",
      age: 5,
      breed: "shiba inu",
      isCool: false
    },
    {
      name: "Ben",
      age: 2,
      breed: "mutt",
      isCool: false
    },
    {
      name: "Bread",
      age: 9,
      breed: undefined,
      isCool: true
    },
    {
      name: "Suzan",
      age: 3,
      breed: "golden retriever",
      isCool: true
    },
  ]
};

function DataTable() {
  const cellRenderers = {
    string:  r => <EditableCell value={ r }/>,
    integer: r => <EditableCell>{ r }</EditableCell>,
    boolean: r => <EditableCell>{ r ? "TRUE" : "FALSE" }</EditableCell>,
  };
  return <> 
    <Table 
      className="data-table"
      numRows={SAMPLE_DATA.rows.length}
      enableGhostCells={true}
      
      enableRowReordering={true}
      enableColumnReordering={true}
      
      onColumnsReordered={(oldIndex, newIndex) => {
        const tmp = SAMPLE_DATA.columns[oldIndex];
        SAMPLE_DATA.columns[oldIndex] = SAMPLE_DATA.columns[newIndex]
        SAMPLE_DATA.columns[newIndex] = tmp;
      }}
      >
      {
        SAMPLE_DATA.columns.map((c, ci) => (
          <Column key={ci} name={<EditableName>c.name</EditableName>} cellRenderer={i => cellRenderers[c.type](SAMPLE_DATA.rows[i][c.id])}/>
        ))
      }
    </Table>
  </>;
}

export default DataTable;
