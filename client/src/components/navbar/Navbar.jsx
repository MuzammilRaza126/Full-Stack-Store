import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  // const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/pk1.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>PKR</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="catItem">
            <div className="item">
              <Link className="link" href="/products/1">Women</Link>
            </div>
            <div className="item">
              <Link className="link" href="/products/2">Men</Link>
            </div>
            <div className="item">
              <Link className="link" href="/products/3">Children</Link>
            </div>
          </div>
        </div>
        <div className="center">
          <Link className="link" href="/">E-STORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" href="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className="link" href="/">About</Link>
          </div>
          <div className="item">
            <Link className="link" href="/">Contact</Link>
          </div>
          <div className="item">
            <Link className="link" href="/">Stores</Link>
          </div>
        <div className="iconSec">
          {/* <SearchIcon />
          <PersonOutlineOutlinedIcon />
          <FavoriteBorderOutlinedIcon /> */}
          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon />
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
