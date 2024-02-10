import "../styles/styles.css";
const Lists = (list) => {
  const handleRightButtonClick = (event) => {
    const { id } = event.target;
    if (list.vis != "") {
      list.setNewList([...list.newList, list.data[id]]);
      list.setList(
        list.data.filter((item) => item.name !== list.data[id].name)
      );
    } else {
      list.setListtwo([list.data[id], ...list.listtwoo]);
      list.setNewList(
        list.data.filter((item) => item.name !== list.data[id].name)
      );
    }
  };
  const handleLeftButtonClick = (event) => {
    const { id } = event.target;
    if (list.vis != "") {
      list.setNewList([...list.newList, list.data[id]]);
      list.setList(
        list.data.filter((item) => item.name !== list.data[id].name)
      );
    } else {
      list.setListone([list.data[id], ...list.listonee]);
      list.setNewList(
        list.data.filter((item) => item.name !== list.data[id].name)
      );
    }
  };

  const handleCheckbox = (event) => {
    const { id, checked } = event.target;
    list.onCheckboxChange(parseInt(id) - 1, checked);
  };
  const length = list.data ? list.data.length : 0;
  const index = list.index && isFinite(list.index) ? list.index : 0;
  return (
    <div className="list-container" >
      <div className="checkbox-container">
        <input type="checkbox" id={list.index} onChange={handleCheckbox} />
        <label htmlFor="list1" style={{ fontWeight: "bold" }}>
          List {index} ({length})
        </label>
      </div>
      {list.data?.map((val, index) => {
        return (
          <div className="list-box" id={val.id}>
            <div className="boxPadding">
              <h4>{val.name}</h4>
              <p>{val.description}</p>
            </div>
            <div className="button-container">
              {" "}
              <button
                className="arrow-button left"
                onClick={handleLeftButtonClick}
                id={index}
                style={{
                  display:
                    list.vis && list.vis.includes("left")
                      ? "none"
                      : "inline-block",
                }}
              >
                🡰
              </button>
              <button
                className="arrow-button right"
                onClick={handleRightButtonClick}
                id={index}
                style={{
                  display:
                    list.vis && list.vis.includes("right")
                      ? "none"
                      : "inline-block",
                }}
              >
                🡲
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Lists;
