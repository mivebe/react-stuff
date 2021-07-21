import { useEffect, useState } from 'react';
import Product from './components/Product';

const contentful = require('contentful')

const GetSingleEntry = ({ id }) => {
    const [entry, setEntry] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(async () => {

        const client = contentful.createClient({
            space: "71egf922wdjc",
            environment: "master",
            accessToken: "YN5GcZZI0cz3dHPejqgJQfvjKfouvAQSeW6jGs24yoE"
        });

        const data = await client.getEntry(id)
        setEntry(data)
        console.log("single entry data", data);
    }, [])

    useEffect(() => {
        if (entry) {
            setIsLoading(false)
        }
    }, [entry])

    return (
        <div>
            {isLoading ?
                <div>Loading</div> :
                entry && entry.fields && <Product
                    title={entry.fields.title}
                    image={"http:" + entry.fields.productImage.fields.file.url}
                    price={entry.fields.price}
                    currencyPerBatch={entry.fields.currencyPerBatch}
                    priceClarification={entry.fields.priceClarification}
                    shortDescription={entry.fields.shortDescription}
                    description={entry.fields.description}
                    category={entry.fields.category}
                    subcategory={entry.fields.subcategory}
                />
            }
        </div>
    )
}

export default GetSingleEntry
