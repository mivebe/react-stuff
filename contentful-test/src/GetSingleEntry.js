import { useEffect, useState } from 'react';

const contentful = require('contentful')

const GetSingleEntry = ({ id }) => {
    const [entry, setEntry] = useState({})

    useEffect(async () => {

        const client = contentful.createClient({
            space: "71egf922wdjc",
            environment: "master",
            accessToken: "YN5GcZZI0cz3dHPejqgJQfvjKfouvAQSeW6jGs24yoE"
        });

        const data = await client.getEntry(id)
        setEntry(data)
        // console.log("single entry data", data);
    }, [])

    return (
        <div>
            {entry && JSON.stringify(entry.fields)}
        </div>
    )
}

export default GetSingleEntry
