import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const barFiller = links.map((link) => {
    return (<a key={link} href={`#${link}`}>{link}</a>
   )})

  return <nav>{barFiller}</nav>;
}


export default NavBar;
