
export default function Product({product,index}){

    return(
        <tr>
            <td key={index}>{product.id}</td>
            <td key={index}>{product.title}</td>
            <td key={index}>
                <span style={{
                backgroundColor:"red",
                color:"white",
                padding:"5px",
                borderRadius:"10px"
                }}>{product.price}</span>
            </td>
            <td key={index}>{product.description.slice(0,40)}</td>
            <td key={index}><span style={{
                backgroundColor:"black",
                color:"white",
                padding:"5px",
                borderRadius:"10px"
                }}>{product.category}</span>
            </td>
            <td key={index}><img src={product.image} alt="" /></td>
            <td key={index}><span style={{
                backgroundColor:"black",
                color:"white",
                fontSize:"15px",
                padding:"5px",
                borderRadius:"10px"
                }}>{product.rating.rate}/{product.rating.count}</span>
            </td>
        </tr>
    )
}