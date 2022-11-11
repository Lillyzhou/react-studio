// TODO: create a component that displays a single bakery item

export default function BakeryItem({item, setCart, setPrice}) {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p >
            <h4>{item.price}</h4>
            < img src={item.image} />
            <p><button onClick={() => setCart((prevCart) => [...prevCart, item])}>Add to Cart</button></p >
        </div>
    )
}