import { categories } from '../ProductCategory/data';
import './categorycard.scss'
export const CategoryCard = ({ title, img }) => {
    return (
        <div className='category-card_item'>
            <img className='card-image' src={img} alt={title} />
            <span>{title}</span>
        </div>
    );
};

export const TopCategories = () => {
    return (
        <div className='category-card'>
            <div className='category-text'>
                <h4>Browse The Range</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='category-card_grid'>
                {categories
                    .filter(c => !!c.img)
                    .map(c => {
                        const shortTitle = c.title.split(" ")[0];
                        return <CategoryCard key={c.title} title={shortTitle} img={c.img} />;
                    })}
            </div>
        </div>
    );
};