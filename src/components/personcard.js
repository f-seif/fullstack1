function Personcard({cardProps, list, setList, deleteCard}) {

    

    return (
        <div className="card m-2" style={{width: "18rem"}}>
          <img src={cardProps.imageUrl} className="card-img-top" alt="..." style={{maxHeight: "9rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{cardProps.name}</h5>
            <p className="card-text">{cardProps.mail}</p>
            <p className="card-text">age : {cardProps.age}</p>
            <p className="card-text">Is premium ? : {cardProps.premium ? "true" : "false"}</p>
          </div>
          {/* <button onClick={(e)  => {
            deleteCard()}}>delete</button> */}
        </div>
    );
  }
  
  export default Personcard;