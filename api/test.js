const uuid = require('uuid').v4;
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.pusher_app_id,
  key: process.env.pusher_key,
  secret: process.env.pusher_secret,
  cluster: process.env.pusher_cluster,
});


module.exports = async (req, res) => {
  const resp = await pusher.trigger("channel-id-here", "message", {
    currentItem: {
        id: uuid(),
        title: `Sample Title - Task number ${Math.floor(Math.random() * 10000).toFixed(0)}`,
        description: 'No Description provided',
        votes: [
            {user: uuid(), vote: 1},
            {user: uuid(), vote: 2},
            {user: uuid(), vote: 3},
        ],
        state: 'hidden'
    }
  });

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
