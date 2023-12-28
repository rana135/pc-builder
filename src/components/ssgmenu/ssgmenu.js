import { Menu } from "antd";
import Link from "next/link";

const Ssgmenu = ({ user }) => {
  const data = [
    { id: 1, title: "Ram", url: "/category/ram" },
    { id: 2, title: "Cpu", url: "/category/cpu" },
    { id: 3, title: "Motherboard", url: "/category/motherboard" },
    { id: 4, title: "Power-supply-unit", url: "/category/power-supply-unit" },
    { id: 5, title: "Storage", url: "/category/storage" },
    { id: 6, title: "Monitor", url: "/category/monitor" },
    { id: 7, title: "Casing", url: "/category/casing" },
    { id: 8, title: "KeyBoard", url: "/category/keyboard" },
    { id: 9, title: "Mouse", url: "/category/mouse" },
  ];
  return (
    <Menu theme="dark" mode="horizontal">
      {data.map((item) => (
        <Menu.Item key={item.id}>
          <Link href={item.url}>{item.title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default Ssgmenu;
