import {
  faAddressBook,
  faBriefcase,
  faFile,
  faHouse,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";

export const pages = [
  { id: "home", icon: faHouse, title: "Home", path: "/" },
  { id: "resume", icon: faFile, title: "Resume", path: "/resume" },
  { id: "work", icon: faBriefcase, title: "Work", path: "/work" },
  { id: "languages", icon: faLanguage, title: "Languages", path: "/languages" },
  { id: "contact", icon: faAddressBook, title: "Contact", path: "/contact" },
];
