import React, { useState, useEffect } from "react";
import { useCallback } from 'react';
import "../Style/catlogPriceFilter.css";

const CatlogPriceFilter = () => {
  const initialMinPrice = 30000;
  const initialMaxPrice = 500000;

  const [minVal, setMinVal] = useState(initialMinPrice);
  const [maxVal, setMaxVal] = useState(initialMaxPrice);
  const [isDragging, setIsDragging] = useState(false);

  const minGap = 5;

  const slideMin = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= initialMinPrice && maxVal - value >= minGap) {
      setMinVal(value);
    }
  };

  const slideMax = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= initialMaxPrice && value - minVal >= minGap) {
      setMaxVal(value);
    }
  };

  const setSliderTrack = useCallback(() => {
    const range = document.querySelector(".slider-track");
  
    if (range) {
      const minPercent = ((minVal - initialMinPrice) / (initialMaxPrice - initialMinPrice)) * 100;
      const maxPercent = ((maxVal - initialMinPrice) / (initialMaxPrice - initialMinPrice)) * 100;
  
      range.style.left = `${minPercent}%`;
      range.style.right = `${100 - maxPercent}%`;
    }
  }, [minVal, maxVal]);
  
  useEffect(() => {
    setSliderTrack();
  }, [minVal, maxVal, setSliderTrack]);

  const handleMinInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= initialMinPrice && value <= maxVal - minGap) {
      setMinVal(value);
    }
  };

  const handleMaxInput = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= minVal + minGap && value <= initialMaxPrice) {
      setMaxVal(value);
    }
  };

  const handleInputKeyDown = (e, type) => {
    if (e.key === "Enter") {
      const value = parseInt(e.target.value, 10);
      if (type === "min" && value >= initialMinPrice && value < maxVal - minGap) {
        setMinVal(value);
      } else if (type === "max" && value <= initialMaxPrice && value > minVal + minGap) {
        setMaxVal(value);
      }
    }
  };

  const startDrag = () => setIsDragging(true);
  const stopDrag = () => setIsDragging(false);

  return (
    <div className="double-slider-box">
      <div className="input-box">
        <div className="min-box">
          <input
            type="number"
            value={minVal}
            onChange={handleMinInput}
            onKeyDown={(e) => handleInputKeyDown(e, "min")}
            className="min-input"
            min={initialMinPrice}
            max={maxVal - minGap}
          />
        </div>
        <div className="max-box">
          <input
            type="number"
            value={maxVal}
            onChange={handleMaxInput}
            onKeyDown={(e) => handleInputKeyDown(e, "max")}
            className="max-input"
            min={minVal + minGap}
            max={initialMaxPrice}
          />
        </div>
      </div>
      <div className="range-slider">
        <div className="slider-track"></div>
        <input
          type="range"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={minVal}
          onChange={slideMin}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="min-val"
        />
        <input
          type="range"
          min={initialMinPrice}
          max={initialMaxPrice}
          value={maxVal}
          onChange={slideMax}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="max-val"
        />
        {isDragging && (
          <>
            <div className="min-tooltip">{minVal}</div>
            <div className="max-tooltip">{maxVal}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CatlogPriceFilter;
