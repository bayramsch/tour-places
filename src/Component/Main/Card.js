

const Card = (data) => {
    console.log(data);
  return (
    <div className="cards">
        <h1 className="title">{data.title}</h1>
        <img src={data.image} alt="" />
        <div className="card-over">
            <p>{data.desc}</p>
        </div>
    </div>
  )
}

export default Card