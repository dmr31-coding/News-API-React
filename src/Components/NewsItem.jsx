

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:"https://assets1.cbsnewsstatic.com/hub/i/r/2024/07/05/d3dc36c4-e369-4b0d-a639-1f91325c4112/thumbnail/1200x630/910b2947e5de8e01b76581c5da883376/new-les-multiple-peds-s-wcbsar17-hi-res-still.jpg?v=57e8061b2038d609da26e467de5ddfb8"} style={{height:"200px", width:"325px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Cancer fear is strong even as cancer deaths decline and therapies have gotten better."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem