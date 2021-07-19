import { useEffect, useState } from "react"
const contentful = require('contentful')

const GetAllEntries = () => {

    const [entries, setEntries] = useState([])

    useEffect(async () => {

        const client = contentful.createClient({
            space: "71egf922wdjc",
            environment: "master",
            accessToken: "YN5GcZZI0cz3dHPejqgJQfvjKfouvAQSeW6jGs24yoE"
        });

        const data = await client.getEntries()
        setEntries(data)
        console.log("many entries data", data);
    }, [])

    return (
        // <div>
        //     {entries && JSON.stringify(entries)}
        // </div>
        entries
    )
}

export default GetAllEntries
