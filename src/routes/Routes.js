import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListCreation from "../components/ListCreation";
import AddList from "../components/AddList";
import dummyData from "../dummy.json";
const RoutesComponent = () => {
  const [listData, setListData] = useState(dummyData);
  const [checkedId, setCheckedId] = useState([]);


  function arrangArray (array){
    let finalArray =[[],[]]
    for(let i=0;i<array.length;i++){
      const valueIndexArray = array[i].list_number - 1
      finalArray[valueIndexArray].push(array[i])
    }
    return finalArray
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://apis.ccbp.in/list-creation/lists"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        const finalArray = arrangArray(jsonData.lists)
        setListData(finalArray)
      } catch (error) {
      }
    };

    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/nextwaveproject"
          element={
            <ListCreation
              lists={listData}
              checkedId={checkedId}
              setCheckedId={setCheckedId}
            />
          }
        />
        <Route
          path="/addlist"
          element={
            <AddList
              listone={listData[checkedId[0]]}
              listtwo={listData[checkedId[1]]}
              addlist={setListData}
              checkedId={checkedId}
              listData={listData}
              setCheckedId={setCheckedId}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
