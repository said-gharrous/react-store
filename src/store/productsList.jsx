import { useEffect, useState } from "react";
import Search from "./search";
import Categories from "./categories";
import Product from "./product";

function ProductList(){
    const [productsList,setProductsList] = useState();

    // get api
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(result=>{setProductsList(result)})
    },[])

    // when you click on input submit
    const handleSearch = ()=>{
        let inputSearchValue = document.querySelector(".inputSearch").value;
        let tr = Array.from(document.getElementsByTagName("tr"));
        tr = tr.slice(1,tr.length)      
        tr.forEach((ele)=>{
            ele.classList.add("remove");
            if(ele.children[0].textContent == inputSearchValue || 
                ele.children[1].textContent.includes(inputSearchValue) ||
                ele.children[3].textContent.includes(inputSearchValue)) {
                ele.classList.remove("remove");
            }
            return <tr>
                <td>no items</td>
            </tr>
        }) 
    }

    // when you click on input reset
    const handleReset = ()=>{
        let tr = Array.from(document.getElementsByTagName("tr"));
        tr = tr.slice(1,tr.length);
        tr.forEach((ele)=>{
            ele.classList.remove("remove");
        })
        let li = Array.from(document.getElementsByTagName("li"));
        li.forEach(ele => {
            ele.classList.remove("background");
        })
    }

    // content in table
    const handleContentOfTable = ()=>{
        if(productsList && productsList.length > 0){
            return productsList.map((product,index)=>(
                <Product product={product} key={index}/>
            ))
        }
    }

    const addAndRemoveClassRemove = (i)=>{
        let category = document.querySelector(`ul li:nth-child(${i})`);
        let tr = Array.from(document.getElementsByTagName("tr"));
        tr = tr.slice(1,tr.length);
        tr.forEach((ele)=>{
            ele.classList.remove("remove");
            if(!ele.children[4].textContent.startsWith(category.innerHTML.toLowerCase())){
                console.log(ele);
                ele.classList.add("remove");
            }
        })

    // when you click on category
    }
    const handleElectronics = () =>{
        addAndRemoveClassRemove(1);
    }
    const handleJewelery = () =>{
        addAndRemoveClassRemove(2);
    }
    const handleMensClothing = () =>{
        addAndRemoveClassRemove(3);
    }
    const handleWomansClothing = () =>{
        addAndRemoveClassRemove(4);
    }


    return(
        <>
            <Search searchInput={handleSearch} resetInput={handleReset}/>
            <Categories electronics={handleElectronics} jewelery={handleJewelery} mensClothing={handleMensClothing} womansClothing={handleWomansClothing}/>
            <div className="products">
                <h1>Products :</h1>
                <table>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Rating</th>
                    </tr>
                    {handleContentOfTable()}
                </table>
            </div>
        </>
    )
}

export default ProductList;