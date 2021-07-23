import GetSingleEntry from "../GetSingleEntry";
import ProductCard from "./ProductCard";

const Product = ({ title, image, price, currencyPerBatch, priceClarification, shortDescription, description, category, subcategory }) => {

    function renderElement(e) {
        let value = ""
        if (e.nodeType === "embedded-entry-inline") {
            return <a href="#" className="embedded-entry-inline" >{e.data.target.fields.title}</a>
        }
        if (e.nodeType === "embedded-entry-block") {
            //should probably redirect to the product component
            return <ProductCard title={e.data.target.fields.title} image={"http:" + e.data.target.fields.productImage.fields.file.url} price={e.data.target.fields.price} currencyPerBatch={e.data.target.fields.currencyPerBatch} priceClarification={e.data.target.fields.priceClarification} shortDescription={e.data.target.fields.shortDescription} description={e.data.target.fields.description} category={e.data.target.fields.category} subcategory={e.data.target.fields.subcategory} />
        }

        if (e.nodeType === "embedded-asset-block") {
            value = "http:" + e.data.target.fields.file.url
            return <img
                width={e.data.target.fields.file.details.image.width / 10}
                height={e.data.target.fields.file.details.image.height / 10}
                className="image-asset" src={value} alt="embedded-asset-block"
            />
        }

        if (e.content) {
            value = e.content.map(renderElement)
        } else {
            value = e.value
        }



        switch (e.nodeType) {
            case "document":
                return <div>{value}</div>
                break;
            case "text":
                if (!e.marks.length) {
                    return <span>{value}</span>
                } else {
                    e.marks.map(m => {
                        switch (m.type) {
                            case "underline":
                                value = <u>{value}</u>
                                break;
                            case "bold":
                                value = <b>{value}</b>
                                break;
                            case "italic":
                                value = <i>{value}</i>
                                break;
                            case "code":
                                value = <code>{value}</code>
                                break;
                            default:
                                break;
                        }
                    })
                    return <span>{value}</span>
                }
                break;
            case "paragraph":
                return <p>{value}</p>
                break;
            case "hr":
                return <hr />
                break;
            case "blockquote":
                return <blockquote>{value}</blockquote>
                break;
            case "ordered-list":
                return <ol>{value}</ol>
                break;
            case "unordered-list":
                return <ul>{value}</ul>
                break;
            case "list-item":
                return <li>{value}</li>
                break;
            case "hyperlink":
                return <a href={e.data.uri}>{value}</a>
                break;
            case "asset-hyperlink":
                return <a href={e.data.target.fields.file.url} onMouseOver={() => { /*display mini image on hover*/ }}>{value}</a>
                break;
            case "entry-hyperlink":
                return <a href="#" >{value}</a>
                //must redirect to said item
                // return <GetSingleEntry id={e.data.target.sys.id} />
                break;
            case "heading-1":
                return <h1>{value}</h1>
                break;
            case "heading-2":
                return <h2>{value}</h2>
                break;
            case "heading-3":
                return <h3>{value}</h3>
                break;
            case "heading-4":
                return <h4>{value}</h4>
                break;
            case "heading-5":
                return <h5>{value}</h5>
                break;
            case "heading-6":
                return <h6>{value}</h6>
                break;
            default:
                break;
        }
    }

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
            {renderElement(description)}
            <br></br>
            <div className="category">{category}</div>
            <div className="subcategory">{subcategory}</div>
            <br></br>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
        </div>
    )
}

export default Product
