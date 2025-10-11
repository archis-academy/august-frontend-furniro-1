import { CategoryCard } from '../../Components/CategoryCard';
import { categories } from '../../Components/ProductCategory/data';
import './topcategories.scss'

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