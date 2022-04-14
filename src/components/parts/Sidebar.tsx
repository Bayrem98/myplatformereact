import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const Sidebar = () => {
  return (
    <>
      <ProSidebar>
        <h1>Les Categories</h1>
        <Menu iconShape="square">
          <SubMenu title="Arabic">
            <MenuItem>Tunisien</MenuItem>
            <MenuItem>Egyptien</MenuItem>
            <MenuItem>Algerien</MenuItem>
            <MenuItem>Marocain</MenuItem>
          </SubMenu>
          <SubMenu title="American">
            <MenuItem>American</MenuItem>
            <MenuItem>Canadien</MenuItem>
          </SubMenu>
          <SubMenu title="European">
            <MenuItem>Français</MenuItem>
            <MenuItem>Espagnol</MenuItem>
            <MenuItem>Italien</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      ;
    </>
  );
};
export default Sidebar;
