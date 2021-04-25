const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.pusher_app_id,
  key: process.env.pusher_key,
  secret: process.env.pusher_secret,
  cluster: process.env.pusher_cluster,
});

module.exports = async (req, res) => {
  console.log(pusher);

  const resp = await pusher.trigger("channel-id-here", "message", {
    message: "hello world"
  });

  console.log("Repsonse", resp);

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
  });
};
