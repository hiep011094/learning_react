import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";

const SelectOptions = ({ data }) => {
  const [isToggle, setIstoggle] = useState(false);

  const customSelect = useRef();

  const handelCustomSelect = (e) => {
    const $this = e.target;
    if (!isToggle) {
      $this.nextSibling.style.height = 200 + "px";
    } else {
      $this.nextSibling.style.height = 0;
    }
    setIstoggle(!isToggle);
    // console.log(e.target.nextSibling);
  };

  const handleClickOtion = (e) => {
    const $this = e.target;
    const data = $this.getAttribute("rel");
    console.log($this.parentNode.previousSibling.previousSibling);
    $this.parentNode.previousSibling.previousSibling.value = data;
    // console.log($this.getAttribute("rel"));
    $this.parentNode.style.height = 0;
    setIstoggle(false);
  };
  //   console.log(customSelect.current.previousSibling.value);
  useEffect(() => {
    const clickOutline = (e) => {
      console.log(customSelect.current.previousSibling.value);
      //   console.log(customSelect.current.nextSibling.children[0]);

      //   if (
      //     e.target !== customSelect.current &&
      //     e.target !== customSelect.current.nextSibling &&
      //     e.target !== customSelect.current.nextSibling.childNode
      //   ) {
      //     customSelect.current.nextSibling.style.height = 0;
      //     setIstoggle(false);
      //   }
    };
    document.addEventListener("mousedown", clickOutline);
    return () => {
      document.removeEventListener("mousedown", clickOutline);
    };
  });

  return (
    <>
      <div
        ref={customSelect}
        className="custom-select"
        onClick={handelCustomSelect}
      >
        HTML
      </div>
      <ul className="c-select-options">
        {data &&
          data.map((el, id) => (
            <li
              onClick={handleClickOtion}
              key={id}
              rel={el
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")}
            >
              {el}
            </li>
          ))}
      </ul>
    </>
  );
};

const SelectEl = ({ data, name }) => {
  return (
    <div className="c-select">
      <select name={name}>
        {data &&
          data.map((el, id) => (
            <option
              key={id}
              value={el
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")}
            >
              {el}
            </option>
          ))}
      </select>
      <SelectOptions data={data} />
    </div>
  );
};

export default SelectEl;
