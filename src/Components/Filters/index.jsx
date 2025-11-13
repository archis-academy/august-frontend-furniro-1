
import React, { useState } from "react";
import styles from "./filters.module.scss";

const colors = ["#333", "#555","#FF0000", "#ff6b35", "#4caf50","#001AFF", "#7000FF"];
const ratings = [5, 4, 3, 2, 1];

export default function Filters() {
  const [price, setPrice] = useState([0, 10000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const handleColorClick = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const handleRatingClick = (rating) => {
    setSelectedRatings((prev) =>
      prev.includes(rating)
        ? prev.filter((r) => r !== rating)
        : [...prev, rating]
    );
  };

  return (
    <div className={styles.filters}>
      <div className={styles.section}>
        <h3>Price</h3>
        <input
          type="range"
          min="0"
          max="10000"
          value={price[1]}
          onChange={(e) => setPrice([0, Number(e.target.value)])}
          className={styles.range}
        />
        <div className={styles.priceValues}>
          <span>${price[0]}</span>
          <span>${price[1].toLocaleString()}</span>
        </div>
        {price[1] < 10000 && (
          <div className={styles.tag}>
            ${price[0]} - ${price[1]} ✕
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h3>Color</h3>
        <div className={styles.colors}>
          {colors.map((color) => (
            <div
              key={color}
              className={`${styles.colorCircle} ${
                selectedColors.includes(color) ? styles.selected : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>

        <div className={styles.selectedTags}>
          {selectedColors.map((color) => (
            <div
              key={color}
              className={styles.tag}
              style={{ backgroundColor: color, color: "#fff" }}
              onClick={() => handleColorClick(color)}
            >
              ✕
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3>Customer Rating</h3>
        {ratings.map((rating, index) => (
          <label key={index} className={styles.ratingOption}>
            <input
              type="checkbox"
              checked={selectedRatings.includes(rating)}
              onChange={() => handleRatingClick(rating)}
            />
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`${styles.star} ${
                  i < rating ? styles.filled : ""
                }`}
              >
                ★
              </span>
            ))}
          </label>
        ))}
      </div>
    </div>
  );
}

