import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { ShoppingOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className={style.butunNavbar}>
      <div className={style.logoHisse}>
        <h1 className={style.fruit}>Fruitables</h1>
      </div>
      <div className={style.links}>
        <Link to="/home">Home</Link>
        <Link to="/shop?type=all">Shop</Link>
        <Link to="/pages">Pages</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className={style.navRight}>
        <div className={style.basket}>
          <ShoppingOutlined />
        </div>
        <div className={style.user}>
          {" "}
          <UserOutlined />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
