import { useEffect, useState, useContext } from "react";
import { ModelContext } from "./contexts/ModelContext";
import { EntriesContext } from "./contexts/EntriesContext";
import Product from "./components/Product";

const Display = () => {
    const entries = useContext(EntriesContext)
    const [isLoading, setIsLoading] = useState(true)

    const items = entries ? entries.items : []
    console.log("items ", items);
    items && console.log(items[0].fields.description);

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
        </div>
    )
}

export default Display
