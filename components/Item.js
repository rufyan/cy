import conf from '../config';

const Item = ((props) => {
  const link = props.gsx$link.$t.length > 0 ? <a href={props.gsx$link.$t} target="_blank">{props.gsx$linktext.$t}</a>
  : "Available on request";
  return (
  <div key={props.id}>
<span>{props.gsx$title.$t}</span>
  <p>{props.gsx$heading.$t}</p>
  <p>{props.gsx$description.$t}</p>
  {
    link
  }
  
  
  {props.tags.length && 
    <div>
      {props.tags.map((t, i) => (
        <span className="tag" key={i}>{t}</span>
      ))
      }
    </div>
  }
      <img src={props.gsx$image.$t.startsWith('http') ? props.gsx$image.$t : conf.path + props.gsx$image.$t} alt={props.gsx$heading.$t} />
  </div>
  )
})

export default Item