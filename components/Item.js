import conf from '../config';

const Item = ((props) => {
  const link = props.gsx$link.$t.length > 0 ? <a className="link" href={props.gsx$link.$t} target="_blank"></a>
  : "Available on request";
  const date = new Date(props.gsx$datepublished.$t).getFullYear() ;
  return (
  <article key={props.id}>
    {
      link
    }
    <div className="image-holder">
      <img src={props.gsx$image.$t.startsWith('http') ? props.gsx$image.$t : conf.path + props.gsx$image.$t} alt={props.gsx$heading.$t} />
    </div>
    <div className="details">
    <h2>{props.gsx$heading.$t}</h2>

    <h3>{props.gsx$title.$t} <time>{date}</time></h3>
    <p>{props.gsx$description.$t}</p>
    
    
    
    {props.tags.length && 
      <div>
        {props.tags.map((t, i) => (
          t.length > 1 && (
          <span className="tag" key={i}>{t}</span>
          )
        ))
        }
      </div>
    }
    </div>
  </article>
  )
})

export default Item