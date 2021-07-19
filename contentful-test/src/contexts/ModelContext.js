import React, { useState, useEffect, createContext, useContext } from 'react'
const contentful = require('contentful')

export const ModelContext = createContext()

export const ModelProvider = ({ children }) => {
    const [contentModel, setContentModel] = useState([]);

    useEffect(async () => {

        const client = contentful.createClient({
            space: "71egf922wdjc",
            environment: "master",
            accessToken: "YN5GcZZI0cz3dHPejqgJQfvjKfouvAQSeW6jGs24yoE"
        });

        const contentTypes = await client.getContentTypes()

        setContentModel(contentTypes)
        // console.log("from context", contentTypes);

    }, [])

    return (
        <ModelContext.Provider value={contentModel} >
            {children}
        </ModelContext.Provider>
    )
}
