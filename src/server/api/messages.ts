import app from 'server/app';
import Message from 'server/models/Message';
import nearHandler from './near';

// type Payload = {
//   lat: any,
//   lng: any,
//   message: string,
// }

app.post('/api/messages/new', async function(req, res) {
  const data = req.body;
  console.log(req.body)

  try {
    const message = await Message.create(data);

    return res.status(200).send(message);
  } catch (err) {
    throw Error(err.message);
  }
})

app.get('/api/messages/all', async function(req, res) {
  try {
    const messages = await Message.find().lean().exec();

    return res.status(200).send(messages);
  } catch (err) {
    throw Error(err.message);
  }
})


app.get('/api/messages/near', nearHandler);
