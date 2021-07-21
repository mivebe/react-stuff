const ProductCard = ({ title, image, price, currencyPerBatch, priceClarification, shortDescription, category, subcategory }) => {
    return (
        <div className="product">
            <div className="title">{title}</div>
            <img src={image} />
            <div classname="price">
                <p className="price_value">{price}</p>
                <p className="price_currency-per-batch">{currencyPerBatch}</p>
                <p className="price_clarification">{priceClarification}</p>
            </div>
            <div className="short-description">{shortDescription}</div>
            <br></br>

            <br></br>
        </div>
    )
}

export default ProductCard
