import React, {createContext, useState} from 'react'

export const renderContext = createContext()

export const RenderProvider = (props) => {
    const [renderProductList, setRenderProductList] = useState(false)

    return (
        <renderContext.Provider value={{
            renderProductList, 
            setRenderProductList
        }}>
            {props.children}
        </renderContext.Provider>
    )
}