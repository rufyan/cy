import Link from 'next/link';

const Item = ((props) => {
  const link = props.link.length > 0 ? <a className="link" href={props.link} target="_blank">{props.heading}</a>
  : props.heading;
  
  const date = props.datepublished && new Date(props.datepublished).getFullYear();
  //live images
  const img = props.image ? <img src={(props.image.startsWith('http') ? props.image : `/static/${props.image}`)} alt={`${props.heading} - ${props.title}`} />
    : '';
    const linkimg = props.link.length > 0 ? <a className="link" href={props.link} target="_blank">{img} </a> : img;  
return (
  <article key={props.id}>
    <div className="image-holder">
    {linkimg}
    </div>
    <div className="details">
    <h2>{link}</h2>

    <h3>{props.title} <time>{date}</time></h3>
    {props.tags && props.tags.length && 
      <div className="tags">
        {props.tags.map((t, i) => (
          t.length > 1 && (
          <span className="tag" key={i} >
          {t}
          </span>
          )
        ))
        }
      </div>
    }
    <p>{props.description}</p>

    </div>
  </article>
  )
})

export default Item