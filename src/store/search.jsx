
export default function Search({searchInput,resetInput}){
    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <div className="search-bar">
            <h2 className="search">Search :</h2>
            <form action="">
            <label>search</label>
            <input type="text" className="inputSearch"/>
            <input type="submit" value="Search" onClick={(e)=>{handleSubmit(e);searchInput()}} />
            <input type="reset" value="Reset" onClick={resetInput}/>
            </form>
            <div className="line"></div>
        </div>
    )
}



