import { google } from 'googleapis'
import { IItem } from '../../types/Item'

const getSheets = async (sheet: string) => {
    try{
      const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
      const jwt = new google.auth.JWT(
        process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        '',
        (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
        target
      );
      const sheets = google.sheets({ version: 'v4', auth: jwt });
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: sheet,
      });
      return response.data.values
    } catch (err) {
      console.log(err);
    }
    return [];
}

export const getCopy = async (page: string) => {
  const rows =  await getSheets('Copy');
  const content = rows.map((row) => ({
    page: row[0],
    html: row[1]
  }));
  return content.filter(r=>r.page=page)
}

export const getContent = async (itemType: string) : Promise<IItem[]> => {
  const rows =  await getSheets('Work');
  if (rows.length) {
      const items= rows.map((row) => ({
        itemType: row[0],
        title: row[1],
        publisher: row[2],
        datePublished:row[3],
        heading: row[4],
        image: row[5],
        description: row[6],
        link: row[7],
        linkText: row[8],
        isLive: row[9],
        tags: row[10]																	
      }));
      return items.filter(i =>i.itemType==itemType)
  }
  return [];
}
 
