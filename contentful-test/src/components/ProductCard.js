const ProductCard = ({ title, image, price, currencyPerBatch, priceClarification, shortDescription, category, subcategory }) => {
    return (
        <div className="product-card" style={{
            width: "50%",
            display: "grid",
            gridTemplateRows: "repeat(3, 31%)",
            gridTemplateColumns: "repeat(6, 15%)",
            gridRowGap: "1%",
            gridColumnGap: "2%",
            borderRadius: "5px",
            border: "2px solid darkgray",
            padding: "0.5%",
            boxSizing: "border-box",
        }}>
            <img src={image} style={{ gridArea: "2/1/4/-6", maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }} />
            <div className="title" style={{ gridArea: "1/1/1/4", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", }}>{title}</div>
            <div classname="price" style={{ gridArea: "2/-2/-1/-1", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <span className="price_value">{price}</span>
                <span className="price_currency-per-batch">{currencyPerBatch}</span>
                <p className="price_clarification">{priceClarification}</p>
            </div>
            <div className="short-description" style={{ gridArea: "2/2/4/-2", justifyContent: "center", display: "flex", alignItems: "center", }}>{shortDescription}</div>
            <div className="categories" style={{ gridArea: "1/4/1/7", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", }}>
                <div className="category">{category}</div>
                <div className="subcategory">{subcategory}</div>
            </div>
        </div>
    )
}

export default ProductCard
