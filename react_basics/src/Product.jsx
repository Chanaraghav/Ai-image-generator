function Product(props)
{
    console.log(props)
    return(
        <>
        <p>{props.title}</p>
        <p>{props.price}</p>
        </>
    )
}
export default Product