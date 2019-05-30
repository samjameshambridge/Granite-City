import React from "react";

function SizeOptions() {
  return (
    <div className="modal-size-options d-flex align-items-baseline text-theme-blue">
      <label htmlFor="size">Size: </label>
      <select className="form-control w-75">
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
      </select>
    </div>
  );
}

export default SizeOptions;
