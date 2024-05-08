const  Serviceimg = ({img,altimg,title,description})=>{
    return(
        <>
            <div className="spt">
                <div className='center'>
                    <img src={img}  className="spt-image" alt={altimg}/>
                </div>
                <div className="spt-body">
                    <p className="spt-text">{title}</p>
                    <p className='hiddentext'>{description}</p>
                </div>
            </div>
        </>
    )
}
export default Serviceimg;