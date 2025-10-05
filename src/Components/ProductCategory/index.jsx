import { useState } from 'react';
import { categories } from './data';
import './pcategory.scss'
export const CategoryFilter = ({ title, options, isOpen, onToggle }) => {
    return (
        <section className={`category ${isOpen ? "open" : ""}`}>
            <button
                type='button'
                className='category_click'
                aria-expanded={isOpen}
                onClick={onToggle}
            >
                <span>{title}</span>
                <span className='plus'>{isOpen ? "-" : "+"}</span>
            </button>
            <div className={`category_panel ${isOpen ? "show" : ""}`}>
                    {options.map((option) => {
                        const id = `${title}-${option}`.replace(/\s+/g, '-').toLowerCase();
                        return (
                            <div key={id} className='option'>
                                <label htmlFor={id}>{option}</label>
                                <input type="checkbox" id={id} />
                            </div>
                        );
                    })}
                </div>
        </section>
    );
};

const Filters = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (i) => {
        setOpenIndex((prev) => (prev === i ? null : i));
    };
    return (
        <div className='filters'>
            {categories.map((c, i) => (
                <CategoryFilter
                    key={c.title}
                    title={c.title}
                    options={c.options}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                />
            ))}
        </div>
    );
}

export default Filters

