import React from "react"; // import ทุกครั้งที่แยกไฟล์

const Cell = ({ isInitial, number, onChange }) => (
  <div
    onClick={(e) => {
      if (isInitial) {
        return;
      }
      onChange((number + 1) % 5);
    }} // ? ถ้ามี ให้ add initial เข้าไป ถ้าไม่มี add : "" เข้าไป
    className={`cell ${isInitial ? "initial" : ""}`}
  >
    {number !== 0 && number}
  </div>
);

export default Cell;
