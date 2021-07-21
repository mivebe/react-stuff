import GetSingleEntry from "../GetSingleEntry";

const Product = ({ title, image, price, currencyPerBatch, priceClarification, shortDescription, description, category, subcategory }) => {

    function renderElement(e) {
        let value = ""
        if (e.nodeType === "embedded-entry-inline") {
            return <a href="#" className="embedded-entry-inline" >{e.data.target.fields.title}</a>
        }
        if (e.nodeType === "embedded-entry-block") {
            //generate product card component
            return
        }

        if (e.nodeType === "embedded-asset-block") {
            value = "http:" + e.data.target.fields.file.url
            return <img className="image-asset" src={value} alt="embedded-asset-block" />
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
                return <span>{value}</span>
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
        </div>
    )
}

export default Product
