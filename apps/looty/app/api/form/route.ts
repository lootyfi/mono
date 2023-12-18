import type { NextApiRequest, NextApiResponse } from 'next'
import {google} from "googleapis";

type SheetForm = {
  
  email: string
  
}
export default async function handler(req: NextApiRequest,
  res: NextApiResponse){
  if (req.method !== 'POST') {
      return res.status(405).send({ message: 'Only POST requests allowed' })
  }

  const body = req.body as SheetForm
console.log(body)
  try {
    const auth = new google.auth.GoogleAuth({
        credentials: {
        client_email: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets'
]
})
const sheets = google.sheets({
  auth,
  version: 'v4'
});
console.log(sheets)
const response = await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_ID,
  range: 'A1:B1',
  valueInputOption: 'USER_ENTERED',
  requestBody: {
      values: [
          [body.email]
      ]
  }
});
console.log(response)
return res.status(201).json({
  data: response.data
})
}catch (e) {
return res.status(e.code).send({message: e.message})
}

}