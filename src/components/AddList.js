import React, { useState, useEffect } from "react";
import Lists from "./Lists";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/styles.css";

import dummyData from "../dummy.json";

const AddList = ({
  listone,
  listtwo,
  addlist,
  checkedId,
  listData,
  setCheckedId,
}) => {
  const [newList, setNewList] = useState([]);
  const [listonee, setListone] = useState(listone);
  const [listtwoo, setListtwo] = useState(listtwo);
  const maxValue = Math.max(...checkedId) + 1;
  const handleUpdate = (event) => {
    if (newList.length > 0) {
      addlist([...listData, newList]);
      setCheckedId([]);
    }
  };
  const handleCancel = () => {
    setCheckedId([]);
  };

  return (
    <div>
      <div className="lists-container-parent">
        <Lists
          data={listonee}
          index={checkedId[0] + 1}
          vis="left"
          setNewList={setNewList}
          newList={newList}
          setList={setListone}
        />
        
        <Lists
          data={newList}
          index={maxValue + 1}
          vis=""
          setNewList={setNewList}
          listonee={listonee}
          listtwoo={listtwoo}
          setListtwo={setListtwo}
          setListone={setListone}
        />
        
        <Lists
          data={listtwoo}
          index={checkedId[1] + 1}
          vis="right"
          setNewList={setNewList}
          newList={newList}
          setList={setListtwo}
        />
        
        
      </div>
      <div className="header">
          <Link to="/nextwaveproject">
            <button className="button-Style-cancel" onClick={handleCancel}>
              Cancel
            </button>
          </Link>
          <Link to="/nextwaveproject">
            <button className="button-Style" onClick={handleUpdate}>
              Update
            </button>
          </Link>
        </div>
    </div>
  );
};

export default AddList;
