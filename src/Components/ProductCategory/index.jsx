import { useState } from 'react';
import { categories } from './data';
import './pcategory.scss';

export const CategoryFilter = ({
  title,
  options,
  isOpen,
  onToggle,
  selectedOptions,
  onChangeOption,
}) => {
  return (
    <section className={`category ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="category_click"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className='filter-title'>
          {title}{' '}
          {selectedOptions.length > 0 && (
            <span className="count">{selectedOptions.length}</span>
          )}
        </span>

        <span className="plus">{isOpen ? '-' : '+'}</span>
      </button>

      <div className={`category_panel ${isOpen ? 'show' : ''}`}>
        {options.map((option) => {
          const id = `${title}-${option}`.replace(/\s+/g, '-').toLowerCase();
          const checked = selectedOptions.includes(option);

          return (
            <div key={id} className="option">
              <label htmlFor={id}>{option}</label>
              <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={() => onChangeOption(option)}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Filters = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selected, setSelected] = useState({}); // { "Living Room": ["TV Units", "Sofas"], ... }

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  const handleOptionChange = (categoryTitle, option) => {
    setSelected((prev) => {
      const prevOptions = prev[categoryTitle] || [];
      const isSelected = prevOptions.includes(option);

      return {
        ...prev,
        [categoryTitle]: isSelected
          ? prevOptions.filter((o) => o !== option)
          : [...prevOptions, option],
      };
    });
  };

  return (
    <div className="filters">
      {categories.map((c, i) => (
        <CategoryFilter
          key={c.title}
          title={c.title}
          options={c.options}
          isOpen={openIndex === i}
          onToggle={() => toggle(i)}
          selectedOptions={selected[c.title] || []}
          onChangeOption={(option) => handleOptionChange(c.title, option)}
        />
      ))}
    </div>
  );
};

export default Filters;
