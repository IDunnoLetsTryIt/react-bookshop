import { useState } from "react";
import TopMenuLink from "./TopmenuLink";

export default function Topmenu({ currentItem, setPage, setTestValue }) {
  const [isOpen, setOpen] = useState(true);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const linkClicked = (event) => {
    const link = event.target;
    const id = link.id;

    setPage(id);
  };

  return (
    <div className="top-menu">
      {isOpen === false ? (
        ""
      ) : (
        <nav className="top-menu__navigation">
          <TopMenuLink
            url=""
            label="Home"
            currentItem={currentItem}
            setPage={setPage}
            setTestValue={setTestValue}
          />

          <TopMenuLink
            url=""
            label="About"
            currentItem={currentItem}
            setPage={setPage}
            setTestValue={setTestValue}
          />
          <TopMenuLink
            url=""
            label="Contact"
            currentItem={currentItem}
            setPage={setPage}
            setTestValue={setTestValue}
          />

          <a
            className={
              "link" + (currentItem === "books" ? " link--highlighted" : "")
            }
            href={"#books"}
            onClick={linkClicked}
            id="books"
          >
            Books
          </a>

          <a
            className={
              "link" + (currentItem === "authors" ? " link--highlighted" : "")
            }
            href={"#authors"}
            onClick={() => {
              setPage("authors");
            }}
          >
            Authors
          </a>
        </nav>
      )}
      <div className="top-menu__burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
