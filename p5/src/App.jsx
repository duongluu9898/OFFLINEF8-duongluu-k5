import React, { useRef, useEffect } from "react";

export default function App() {
  const data = ["Checkbox 01", "Checkbox 02", "Checkbox 03", "Checkbox 04"];
  const checkItemRef = useRef([]);
  const checkAllRef = useRef();
  const checkCountRef = useRef(0);
  const handleCheckAll = ({ target }) => {
    const status = target.checked;
    checkItemRef.current.forEach((checkItem) => {
      checkItem.checked = status;
    });
    checkCountRef.current = status ? checkItemRef.current.length : 0;
  };

  const handleCheckItem = (target) => {
    const status = target.checked;
    if (status) {
      checkCountRef.current++;
    } else {
      checkCountRef.current--;
    }

    checkAllRef.current.checked =
      checkCountRef.current === checkItemRef.current.length;
  };
  useEffect(() => {
    console.log(checkItemRef);
  });
  return (
    <div>
      <div>
        <label>
          <input type="checkbox" onChange={handleCheckAll} ref={checkAllRef} />
          Check All
        </label>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              ref={(ref) => {
                checkItemRef.current.push(ref);
              }}
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
