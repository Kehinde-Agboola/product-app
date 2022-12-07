import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({
    getProductDetails: () => {},
    movieList: [],
})

const GlobalState = ({children}) =>{
    const [productList, setProductList] = useState([])
    const [productDetail, setProductDetails] = useState({})

    const getProductDetails = async () => {
        const url = await fetch("https://dummyjson.com/products");
        const data = await url.json()
        if (data) {
            setProductDetails(data);
        }
    }
    useEffect(() => {
        const getData = JSON.parse(sessionStorage.getItem('productList'));
        if (getData !== null ) {
            setProductList(getData)
        }
    }, [])

    const contextValue = {
        getProductDetails,
        productDetail,
        productList,
    }
    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
