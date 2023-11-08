
export default function Categories({electronics,jewelery,mensClothing,womansClothing}){

    const addBackground = (e)=>{
        let li = Array.from(document.getElementsByTagName("li"));
        li.forEach(ele => {
            ele.classList.remove("background");
        })
        e.target.classList.add("background");
        
    }

    return(
        <div className="categories">
            <h4>Categories : </h4>
            <ul>
                <li onClick={(e)=>{addBackground(e);electronics()}}>Electronics</li>
                <li onClick={(e)=>{addBackground(e);jewelery()}}>jewelery</li>
                <li onClick={(e)=>{addBackground(e);mensClothing()}}>men's clothing</li>
                <li onClick={(e)=>{addBackground(e);womansClothing()}}>women's clothing</li>
            </ul>
            <div className="line"></div>
        </div>
    )
}