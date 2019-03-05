import endpoint from '../config';

const getData = () => {
  let itemTypes, titles, tags, items;
  const res = await fetch(endpoint);
  const itemjson =await res.json()
    //Once data has come in, process it and set global var
    items = itemjson.feed.entry.filter((item) => {
      item.tags = item.gsx$tags.$t.split(',').map((t) => (t.trim()));
      return  item.gsx$islive.$t === "1"
    });
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

export { getData };