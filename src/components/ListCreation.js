import React, { useState } from "react";
import Lists from "./Lists";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const ListCreation = ({ lists, checkedId, setCheckedId }) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const handleCheckboxChange = (id, isChecked) => {
    if (isChecked && !checkedId.includes(id)) {
      // If checkbox is checked, add ID to the state
      setCheckedId([...checkedId, id]);
    } else {
      // If checkbox is unchecked, remove ID from the state
      setCheckedId(checkedId.filter((checkedId) => checkedId !== id));
    }
  };
  const handleClick = (event) => {
  
    const check = "here";
    if (checkedId.length == 2) {
      setErrorMessage(false);
    } else {
      event.preventDefault();
      setErrorMessage(true);
    }
  };
  return (
    <div>
      <div className="header container">
        <h1>List Creation</h1>
        <Link
          to={{
            pathname: "/addlist",
          }}
        >
          <button className="button-Style" onClick={handleClick}>
            Create a new list
          </button>
        </Link>
        <div
          className="error-message"
          style={{ color: "red", minHeight: "30px" }}
        >
          {errorMessage
            ? "You should select exactly two lists to make a new list."
            : ""}
        </div>
      </div>

      <div className="lists-container-parent">
        {lists.map((list, index) => {
          return (
            <Lists
              data={list}
              index={index + 1}
              onCheckboxChange={handleCheckboxChange}
              isChecked={checkedId.includes(list.id)}
              vis="rightleft"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListCreation;
