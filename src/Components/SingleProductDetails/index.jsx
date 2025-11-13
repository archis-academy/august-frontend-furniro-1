import './singleproduct.scss'
import { useState } from 'react'

function Stars({ value = 0, max = 5 }) {
    const full = Math.floor(value);
    const half = value - full >= 0.5 ? 1 : 0;
    const empty = max - full - half;

    return (
        <span className="pd__stars" aria-label={`Rating: ${value} / ${max}`}>
            {"★".repeat(full)}
            {half ? "☆" : ""}
            {"✩".repeat(empty)}
        </span>
    );
}
const socialLinks = [
    { id: 1, name: "Facebook", url: "/assets/icons/social/facebook.svg" },
    { id: 2, name: "LinkedIn", url: "/assets/icons/social/linkedin.svg" },
    { id: 3, name: "Twitter", url: "/assets/icons/social/twitter.svg" },
];

const SingleProductDetails = ({ product }) => {
    const {
        name,
        price,
        currencySymbol = "$",
        rating,
        description,
        colorOptions = [],
        sku,
        category,
        tags = [],
    } = product;

    const [selectedColor, setSelectedColor] = useState(colorOptions[0]?.name || "");
    const [qty, setQty] = useState(1);

    const handleAdd = () => {
        const payload = { product, qty, selectedColor };
        onAddToCart ? onAddToCart(payload) : console.log("ADD_TO_CART", payload);
    };
    return (
        <section className='pd-section'>
            <h3>{name?.replace(/-/g, " ")}</h3>
            <p className='pd__price'>{currencySymbol} {Number(price || 0).toLocaleString("tr-TR")}</p>
            <div className='pd__rating_wrapper'>
                {rating && (
                    <span className="pd__rating">
                        <Stars value={rating.stars} />
                        <span className="pd__reviews">{rating.reviewText}</span>
                    </span>
                )}
            </div>
            {description && <p className="pd__desc">{description}</p>}
            {colorOptions.length > 0 && (
                <div className="pd__colors">
                    <span className="pd__label">Color</span>
                    <div className="pd__swatches">
                        {colorOptions.map((c) => (
                            <button
                                key={c.name}
                                className={`pd__swatch${selectedColor === c.name ? " is-active" : ""}`}
                                style={{ backgroundColor: c.hexCode }}
                                onClick={() => setSelectedColor(c.name)}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>
            )}
            <div className="pd__actions">
                <div className="pd__qty">
                    <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
                    <input
                        type="number"
                        min="1"
                        value={qty}
                        onChange={(e) => setQty(Math.max(1, Number(e.target.value || 1)))}
                        aria-label='Quantity'
                    />
                    <button onClick={() => setQty((q) => q + 1)}>+</button>
                </div>

                <button className="pd__btn" onClick={handleAdd}>
                    Add To Cart
                </button>
                <button
                    className="pd__btn"
                    onClick={() => (onCompare ? onCompare(product) : console.log("COMPARE", product))}
                >
                    +  Compare
                </button>
            </div>
            <div className="pd__meta">
                <div className="pd__meta_info"><span>SKU</span><span>: {sku}</span></div>
                <div className="pd__meta_info"><span>Category</span><span>: {category}</span></div>
                {!!tags.length && (
                    <div className="pd__meta_info"><span>Tags</span><span>: {tags.join(", ")}</span></div>
                )}
                <div className="pd__meta_info">
                    <span>Share </span>
                    <span className="pd__share">:
                        {socialLinks.map((link) => (
                            <a key={link.name} href={link.href || "#"} title={link.name} aria-label={link.name}>
                                <img src={link.url} alt={link.name} />
                            </a>
                        ))}
                    </span>
                </div>
            </div>

        </section >
    )
}

export default SingleProductDetails