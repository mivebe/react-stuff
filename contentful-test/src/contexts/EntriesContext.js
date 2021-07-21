import { createContext, useEffect, useState } from "react"
const contentful = require('contentful')

export const EntriesContext = createContext()

export const EntriesProvider = ({ children }) => {

    const [entries, setEntries] = useState({})



    useEffect(async () => {

        const client = contentful.createClient({
            space: "71egf922wdjc",
            environment: "master",
            accessToken: "YN5GcZZI0cz3dHPejqgJQfvjKfouvAQSeW6jGs24yoE"
        });

        const data = await client.getEntries()

        var sortArray = data.items.map(function (data, idx) {
            return { idx: idx, data: data }
        })

        sortArray.sort(function (a, b) {
            if (!a.data.fields.order && !b.data.fields.order) return a.idx - b.idx;
            if (!a.data.fields.order) return -1;
            if (!b.data.fields.order) return 1;
            if (a.data.fields.order < b.data.fields.order) return -1;
            if (a.data.fields.order > b.data.fields.order) return 1;
            return a.idx - b.idx
        });

        var answer = sortArray.map(function (val) {
            return val.data
        });
        console.log("answer ", answer);
        const sortedData = { ...data, items: answer }
        setEntries(sortedData)
        console.log("many entries data", data);
    }, [])

    return (
        <EntriesContext.Provider value={entries} >
            {children}
        </EntriesContext.Provider>
    )
}
