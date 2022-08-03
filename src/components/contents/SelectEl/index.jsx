import React, { useEffect, useState } from 'react'
import "./styles.scss";

function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            console.log(ref.current)
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const SelectOptions = ({ data }) => {

    const [heightSelect, setHeightSelect] = useState(0)


    const handelCustomSelect = (e) => {
        setHeightSelect(200)
        const $this = e.target
        $this.nextSibling.style.height = heightSelect + "px"
        console.log(e.target.nextSibling)
    }   

    return (
        <>
            <div className="custom-select" onClick={handelCustomSelect}>HTML</div>
            <ul className="c-select-options" style={{ height: heightSelect + "px" }}>
                {data && data.map((el, id) => <li key={id} rel={el.toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')}>{el}</li>)}

            </ul>
        </>
    )
}

const SelectEl = ({ data, name, refOutSize }) => {
    console.log(refOutSize)
    useOutsideAlerter(refOutSize.current)
    return (
        <div className="c-select">
            <select name={name}>
                {data && data.map((el, id) => <option key={id} value={el.toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, '')}>{el}</option>)}
            </select>
            <SelectOptions data={data} />
        </div>
    )
}

export default SelectEl