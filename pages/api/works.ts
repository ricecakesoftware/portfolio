import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../libs/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method } = req
    switch (method) {
      case 'GET':
        const { db } = await connectToDatabase()
        const data = await db.collection('Works').find().sort({ id: -1 }).toArray() //連想配列化
        res.status(200).json(data) // json 形式でデータを取得
        break
      default:
        res.setHeader('Allow', ['GET'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
