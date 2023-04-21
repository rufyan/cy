import {IItem} from '../types/Item';
interface ItemProps {
  item: IItem
}
  
  export const Item: React.FC<ItemProps> = (props: IItem) => {

  const link = props.link.length > 0 
    ? <a className="link" href={props.link} target="_blank">{props.heading}</a>
    : props.heading;
  const tags = props.tags.split(',');
  const date = props.datePublished && new Date(props.datePublished).getFullYear();

  //live images
  const img = props.image 
    ? <img src={(props.image.startsWith('http') ? props.image : `/static/${props.image}`)} alt={`${props.heading} - ${props.title}`} />
    : '';
  const linkimg = props.link.length > 0 
    ? <a className="link" href={props.link} target="_blank">{img} </a> 
    : img;  

  return (
    <article key={props.id}>
      <div className="image-holder">
      {linkimg}
      </div>
      <div className="details">
      <h2>{link}</h2>

      <h3>{props.title} <time>{date}</time></h3>
      {tags && tags.length && 
        <div className="tags">
          {tags.map((t, i) => (
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
};