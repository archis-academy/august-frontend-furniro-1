import './categorycard.scss'
export const CategoryCard = ({ title, img }) => {
    return (
        <div className='category-card_item'>
            <img className='card-image' src={img} alt={title} />
            <span>{title}</span>
        </div>
    );
};

