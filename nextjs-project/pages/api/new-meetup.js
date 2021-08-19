// /api/new-meetup
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const mongoPass = process.env.MONGO_PASS;

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      `mongodb+srv://Lance:${mongoPass}@cluster0.j7nwx.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
