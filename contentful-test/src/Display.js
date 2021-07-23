import { useEffect, useState, useContext } from "react";
import { ModelContext } from "./contexts/ModelContext";
import { EntriesContext } from "./contexts/EntriesContext";
import Product from "./components/Product";
import ProductCard from "./components/ProductCard";

const Display = () => {
    const entries = useContext(EntriesContext)
    const [isLoading, setIsLoading] = useState(true)

    const items = entries ? entries.items : []
    // console.log("items ", items);
    // items && console.log(items[0].fields.description);


    useEffect(() => {
        if (items) {
            setIsLoading(false)
        }
    }, [items])

    return (
        <div>
            {isLoading ?
                <div>Loading</div> :
                items && items.map(e =>
                    <Product
                        title={e.fields.title}
                        image={"http:" + e.fields.productImage.fields.file.url}
                        price={e.fields.price}
                        currencyPerBatch={e.fields.currencyPerBatch}
                        priceClarification={e.fields.priceClarification}
                        shortDescription={e.fields.shortDescription}
                        description={e.fields.description}
                        category={e.fields.category}
                        subcategory={e.fields.subcategory}
                    />
                )}
            {/* <div style={{
                fontsSize: "20px",
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}>
                {items && <ProductCard title={items[0].fields.title} image={"http:" + items[0].fields.productImage.fields.file.url} price={items[0].fields.price} currencyPerBatch={items[0].fields.currencyPerBatch} priceClarification={items[0].fields.priceClarification} shortDescription={items[0].fields.shortDescription} description={items[0].fields.description} category={items[0].fields.category} subcategory={items[0].fields.subcategory} />}
                {items && <ProductCard title={items[0].fields.title} image={"http:" + items[0].fields.productImage.fields.file.url} price={items[0].fields.price} currencyPerBatch={items[0].fields.currencyPerBatch} priceClarification={items[0].fields.priceClarification} shortDescription={items[0].fields.shortDescription} description={items[0].fields.description} category={items[0].fields.category} subcategory={items[0].fields.subcategory} />}
                {items && <ProductCard title={items[0].fields.title} image={"http:" + items[0].fields.productImage.fields.file.url} price={items[0].fields.price} currencyPerBatch={items[0].fields.currencyPerBatch} priceClarification={items[0].fields.priceClarification} shortDescription={items[0].fields.shortDescription} description={items[0].fields.description} category={items[0].fields.category} subcategory={items[0].fields.subcategory} />}
                {items && <ProductCard title={items[0].fields.title} image={"http:" + items[0].fields.productImage.fields.file.url} price={items[0].fields.price} currencyPerBatch={items[0].fields.currencyPerBatch} priceClarification={items[0].fields.priceClarification} shortDescription={items[0].fields.shortDescription} description={items[0].fields.description} category={items[0].fields.category} subcategory={items[0].fields.subcategory} />}
            </div> */}
        </div>
    )
}

export default Display
