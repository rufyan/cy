import config from '../config';
import fetch from 'isomorphic-unfetch';

const getData = async () => {
  let itemTypes, titles, tags, items;
  const res = await fetch(config.endpoint)
  .then(res => res.json())
  .then(
  //console.log('res', res)
  //const itemjson = res.json()
    //Once data has come in, process it and set global var
    items = res.feed.entry.filter((item) => {
      item.tags = item.gsx$tags.$t.split(',').map((t) => (t.trim()));
      return  item.gsx$islive.$t === "1"
    })
  );
    itemTypes = [...new Set(
      items.map((item) => (
        item.gsx$itemtype.$t 
        )
      )
    )];

    titles = [...new Set(
      items.map((item) => (
        item.gsx$title.$t
      ))
    )].filter(x => x!='');

    const allTags = [];
    items.map((item) => (
      item.gsx$tags.$t.split(',')
    )).filter(x => x!='').forEach((t) => {
        t.forEach((r) => {
          allTags.push(r.trim())
        })
      }
    );

    tags = [...new Set(allTags)];
 
    dispatch({
      items,
      itemTypes,
      titles,
      loading: 'false',
      tags
    });
}

export default getData;