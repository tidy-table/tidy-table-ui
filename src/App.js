import logo from './logo.svg';
import './App.css';

import { Button, Navbar, Alignment, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import { Popover2, PopperPlacements } from "@blueprintjs/popover2";

function HomeMenu() {
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

function FilesMenu() {
  return <> </>;
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
          <Button className="bp3-minimal" icon="document" text="Files" />
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Heading>MySheets</Navbar.Heading>
      </Navbar.Group>
    </Navbar>
  </>;
}

function App() {
  return (
    <div className="App">
      <MyNav />
      <Button intent="success" text="Button Content" onClick={undefined} />
    </div>
  );
}

export default App;
