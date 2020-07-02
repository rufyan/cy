import fetch from 'isomorphic-unfetch';

import config from '../config';

export const getData = async dispatch => {
  let itemTypes, titles, tags, items;
  // const data= fetch(config.endpoint)
  // .then(response => response.json());
  // console.log('fetch', data);

  const res = await fetch(config.endpoint);
  const itemjson = await res.json()
  //Once data has come in, process it and set global var
  items = itemjson.feed.entry.filter((item) => {
    item.tags = item.gsx$tags.$t.split(',').map((t) => (t.trim()));
    return process.env.NODE_ENV !== 'production' ? item : item.gsx$islive.$t === "1"
  });

  itemTypes = [...new Set(
    items.map((item) => (
      item.gsx$itemtype.$t
    ))
  )];

  titles = [...new Set(
    items.map((item) => (
      item.gsx$title.$t
    ))
  )].filter(x => x != '');

  const allTags = [];
  items.map((item) => (
    item.gsx$tags.$t.split(',')
  )).filter(x => x != '').forEach((t) => {
    t.forEach((r) => {
      allTags.push(r.trim())
    })
  });

  tags = [...new Set(allTags)];

  return dispatch({
    type: 'FETCH_DATA',
    payload: {
        items,
        itemTypes,
        titles,
        loading: 'false',
        tags
      }
  })
  // return {
  //   items,
  //   itemTypes,
  //   titles,
  //   loading: 'false',
  //   tags
  // };
}

export default getData;