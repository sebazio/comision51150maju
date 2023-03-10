import { useEffect, useState } from 'react'
import { getProducts } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [productsState, setProductsState] = useState([])

    useEffect(() => {
        getProducts()
            .then(products => {
                setProductsState(products)
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={productsState}/>
        </div>
    )
}

export default ItemListContainer