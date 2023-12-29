import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Avatar } from "primereact/avatar";

const Navbar = () => {
  const items: MenuItem[] = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
    },
  ];

  return (
    <div>
      <Menubar
        className="bg-[#06727ce7] border-0 m-5 justify-between"
        start={
          <div className="flex items-center gap-3">
            <Avatar
              className="flex"
              image="/images/avatar.jpeg"
              size="large"
              shape="circle"
            />
            <h4 className="sm:text-xl md:text-2xl">Jaydeep Mithani</h4>
          </div>
        }
        model={items}
      />
    </div>
  );
};

export default Navbar;
