import { CategoryCard } from '../../Components/CategoryCard';
import { categories } from '../../Components/ProductCategory/data';
import './topcategories.scss';

export const TopCategories = () => {
  const order = ['Dining Room', 'Living Room', 'Bedroom'];

  const sortedCategories = [...categories]
    .filter((c) => !!c.img)
    .sort((a, b) => {
      const indexA = order.indexOf(a.title);
      const indexB = order.indexOf(b.title);

      // Order'da olmayanlar sona atılsın
      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    });

  return (
    <div className="category-card">
      <div className="category-text">
        <h4>Browse The Range</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="category-card_grid">
        {sortedCategories.map((c) => {
          const shortTitle = c.title.split(' ')[0];
          return <CategoryCard key={c.title} title={shortTitle} img={c.img} />;
        })}
      </div>
    </div>
  );
};
