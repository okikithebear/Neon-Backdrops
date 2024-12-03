import React from "react";


const SizeChart = ({ sizes }) => (
  <div>
   
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border p-2">Size</th>
          <th className="border p-2">width</th>
          <th className="border p-2">height</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map((size, index) => (
          <tr key={index}>
            <td className="border p-2">{size.label}</td>
            <td className="border p-2">{size.width}</td>
            <td className="border p-2">{size.height}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SizeChart;
