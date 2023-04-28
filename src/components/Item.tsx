import {IItem} from '../types/Item';

interface ItemProps {
  item: IItem
}
  
  export const Item: React.FC<ItemProps> = ({item}: ItemProps) => {
  const link = item.link.length > 0 
    ? <a className="link" href={item.link} target="_blank" rel="noreferrer">{item.heading}</a>
    : item.heading;
  const tags = item.tags.split(',');
  const date = item.datePublished && new Date(item.datePublished).getFullYear();

  //live images
  const img = item.image 
    ? <img src={(item.image.startsWith('http') ? item.image : `/static/${item.image}`)} alt={`${item.heading} - ${item.title}`} />
    : '';
  const linkimg = item.link.length > 0 
    ? <a className="link" href={item.link} target="_blank" rel="noreferrer">{img} </a> 
    : img;  

  return (
    <article>
      <div className="image-holder">
      {linkimg}
      </div>
      <div className="details">
      <h2>{link}</h2>

      <h3>{item.title} <time>{date}</time></h3>
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
      <p>{item.description}</p>

      </div>
    </article>
  )
};