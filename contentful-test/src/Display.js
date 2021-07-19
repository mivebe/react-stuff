import { useEffect, useState, useContext } from "react";
import { ModelContext } from "./contexts/ModelContext";
import GetSingleEntry from "./GetSingleEntry";
import GetAllEntries from "./GetAllEntries";

const Display = () => {

    // const fromContext = useContext(ModelContext)

    const data = GetAllEntries()
    const entries = data.items
    // console.log(entries);


    // entries.map(e => {
    //     const descriptionArray = e.fields.description.content.map()
    // })


    return (
        <div>
            {entries && entries.map(e => (
                <div className="product">
                    <div className="title">{e.fields.title}</div>
                    <img src={"http:" + e.fields.productImage.fields.file.url} />
                    <div classname="price">
                        <p className="price_value">{e.fields.price}</p>
                        <p className="price_currency-per-batch">{e.fields.currencyPerBatch}</p>
                        <p className="price_clarification">{e.fields.priceClarification}</p>
                    </div>
                    <div className="short-description">{e.fields.shortDescription}</div>
                    <br></br>
                    <div className="description">{e.fields.description.content.map(p =>
                        <div>{p.content.map(ip =>
                            <div>{ip.value}</div>)}
                        </div>)}
                    </div>
                    <br></br>
                </div>
            ))}

        </div>
    )
}

export default Display
