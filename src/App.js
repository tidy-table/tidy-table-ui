import React, { useState } from 'react';

import './App.css';

import { Button, ButtonGroup, Navbar, Alignment, Menu, MenuItem, MenuDivider, Tabs, Tab, Divider, Card, Elevation } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { Cell, Column, Table } from "@blueprintjs/table";

import DataTable from './DataTable';



function HomeMenu() {
  return <>
    <Menu>
      <MenuItem icon="plus" onClick={null} text="New Table" />
      <MenuItem icon="new-object" onClick={null} text="Open Table" />
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
            placement="bottom"
            >
            <Button 
              className="bp3-minimal" 
              // icon="home" 
              text="Home" 
              />
          </Popover2>
          <Popover2
            content={<FilesMenu />}
            placement="bottom"
            >
            <Button 
              className="bp3-minimal" 
              // icon="document" 
              text="Files" 
              />
          </Popover2>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading>TidyTable</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  </>;
}

function App() {
  const [tabId, setTabId] = useState("home");
  return (
    <div className="App">
      <MyNav />
      <div className="menu-tab-button-group">
        <Tabs selectedTabId={tabId} onChange={setTabId}>
          <Tab key={1} id="home" title="Home Tab" panel={
            <>
              <ButtonGroup 
                minimal={true} 
                >
                <Button>A1</Button>
                <Button>A2</Button>
                <Button>A3</Button>
                <Divider/>
                <Button>B1</Button>
                <Button>B2</Button>
                <Button>B3</Button>
              </ButtonGroup>
            </>
          }/>
          <Tab key={2} id="edit" title="Edit Tab" panel={
            <div style={{ display: "flex" }}>
              <Card style={{ margin: "10px" }}>
                <h1>Hello, world</h1>
                <p>Hello, also again.</p>
              </Card>
              <Card style={{ margin: "10px" }}>
                <h1>Hello, React</h1>
              </Card>
            </div>
          }/>
        </Tabs>
      </div>
      <Divider/>
      <DataTable />
    </div>
  );
}

export default App;
