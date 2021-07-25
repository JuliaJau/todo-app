import "./filterNavLink.css";
import filterNavLink from "./filterNavLink.html";
import filterNavLinkactive from "./filterNavLink-active.html";

export default {
  title: "Components/FilterNavLink",
  parameters: { layout: "fullscreen" },
};

export const link = () => filterNavLink;
export const linkactive = () => filterNavLinkactive;
