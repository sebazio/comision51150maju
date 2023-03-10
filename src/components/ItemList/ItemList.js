import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            {
                 products.map(product => {
                    return <Item {...product}/>
                })
            }
        </div>
    )
}

export default ItemList