import Link from 'next/link';

const Item = ((props) => {
  const link = props.gsx$link.$t.length > 0 ? <a className="link" href={props.gsx$link.$t} target="_blank">{props.gsx$heading.$t}</a>
  : props.gsx$heading.$t;
  const date = new Date(props.gsx$datepublished.$t).getFullYear();
  //live images
  const img = props.gsx$image.$t ? <img src={(props.gsx$image.$t.startsWith('http') ? props.gsx$image.$t : `/static/${props.gsx$image.$t}`)} alt={props.gsx$heading.$t} />
    : '';
return (
  <article key={props.id}>
    <div className="image-holder">
    <a className="link" href={props.gsx$link.$t} target="_blank">
      {img}
    </a>
    </div>
    <div className="details">
    <h2>{link}</h2>

    <h3>{props.gsx$title.$t} <time>{date}</time></h3>
    {props.tags.length && 
      <div className="tags">
        {props.tags.map((t, i) => (
          t.length > 1 && (
          <span className="tag" key={i} >
            {/*TO DO: handle tag click from callback to items.js*/} 
          {/* <Link  as={`/articles/${t}`} href={{pathname: '/articles', query: {
            title: 'Article',
            tag : t
            }}}> */}
          {t}
          {/* </Link> */}
          </span>
          )
        ))
        }
      </div>
    }
    <p>{props.gsx$description.$t}</p>

    </div>
  </article>
  )
})

export default Item