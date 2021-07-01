import './App.css';

import { Button, Navbar, Alignment, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { Cell, Column, Table } from "@blueprintjs/table";



const SAMPLE_DATA = {
  columns: [
    {
      id: "name",
      name: "Name",
      index: 0,
      type: "string"
    },
    {
      id: "age",
      name: "Age",
      index: 1,
      type: "integer"
    },
    {
      id: "breed",
      name: "Breed",
      index: 2,
      type: "string"
    },
    {
      id: "isCool",
      name: "Is Cool?",
      index: 3,
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
    string:  r => <Cell>{ r }</Cell>,
    integer: r => <Cell>{ r }</Cell>,
    boolean: r => <Cell>{ r ? "TRUE" : "FALSE" }</Cell>,

  };
  return <> 
    <Table numRows={SAMPLE_DATA.rows.length}>
      {
        SAMPLE_DATA.columns.map((c, ci) => (
          <Column key={ci} name={c.name} cellRenderer={i => cellRenderers[c.type](SAMPLE_DATA.rows[i][c.id])}/>
        ))
      }
    </Table>
  </>;
}



function HomeMenu() {
  return <>
    <Menu>
      <MenuItem icon="plus" onClick={null} text="New Spreadsheet" />
      <MenuItem icon="new-object" onClick={null} text="New object" />
      <MenuItem icon="new-link" onClick={null} text="New link" />
      <MenuDivider />
      <MenuItem text="Settings..." icon="cog">
          <MenuItem icon="tick" text="Save on edit" />
          <MenuItem icon="blank" text="Compile on edit" />
      </MenuItem>
    </Menu>
  </>;
}

function FilesMenu() {
  return <>
    <Menu>
      <MenuItem icon="new-text-box" onClick={null} text="New text box" />
      <MenuItem icon="new-object" onClick={null} text="New object" />
      <MenuItem icon="new-link" onClick={null} text="New link" />
      <MenuDivider />
      <MenuItem text="Settings..." icon="cog">
          <MenuItem icon="tick" text="Save on edit" />
          <MenuItem icon="blank" text="Compile on edit" />
      </MenuItem>
    </Menu>
  </>;
}
 
function MyNav() {
  return <> 
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
          <Popover2
            content={<HomeMenu />}
            placement="right"
            >
            <Button className="bp3-minimal" icon="home" text="Home" />
          </Popover2>
          <Popover2
            content={<FilesMenu />}
            placement="right"
            >
            <Button className="bp3-minimal" icon="document" text="Files" />
          </Popover2>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading>TidyTable</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  </>;
}

function App() {
  return (
    <div className="App">
      <MyNav />
      <h1>Hello, world!</h1>
      <Button intent="success" text="Button Content" onClick={undefined} />
      <DataTable />
    </div>
  );
}

export default App;
