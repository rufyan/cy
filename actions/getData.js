import fetch from 'isomorphic-unfetch';
import config from '../config';

export const getItemData = async dispatch => {
  let itemTypes, titles, tags, items;
  const res = await fetch(config.endpoint);
  const itemjson = await res.json();

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
    type: 'FETCH_ITEM_DATA',
    payload: {
        items,
        itemTypes,
        titles,
        loading: 'false',
        tags
      }
  });
}

export default getItemData;

export const getContentData = async dispatch => {
  let homecontent, contentcreation;
  const endpoint = config.endpoint.replace('od6', 2);
  const res = await fetch(endpoint);
  const itemjson =await res.json()
  itemjson.feed.entry.filter((item) => {
    
    if(item.gsx$page.$t ==='home' ){
      homecontent = item.gsx$html.$t ;
    }
    if(item.gsx$page.$t ==='content' ){
      contentcreation = item.gsx$html.$t ;
    }

  });

  return dispatch ({
    type: 'FETCH_CONTENT_DATA',
    payload: {
      homecontent,
      contentcreation
    }
  });
 
}

export const getRecentData = async dispatch => {
  //'3' refers to the 'recent' sheet - not currently used, but should be
  let recent;
  const endpointrecent = config.endpoint.replace('od6', 3);
  const resrecent = await fetch(endpointrecent);
  const itemrecentjson =await resrecent.json();

  recent =
    itemrecentjson.feed.entry.map((item) => {
      return {
        logo: item.gsx$company.$t,
        image: item.gsx$image.$t,
      }
    })

  return dispatch({
    type: 'FETCH_RECENT_DATA',
    payload: {
      recent
    }
  });
}