const Twitter = require('twitter');
const env = require('dotenv').config().parsed;

const streamFilter = require('./streams/filters');
const streamError = require('./streams/error');
const streamIDs = require('./streams/ids');

const streamParameters = {
  follow: streamIDs.getStreamIDs()
};

const client = new Twitter({
  consumer_key: env.consumer_key,
  consumer_secret: env.consumer_secret,
  access_token_key: env.access_token,
  access_token_secret: env.access_token_secret
});


client.stream('statuses/filter', streamParameters, function(stream) {
  stream.on('data', streamFilter);
  stream.on('error', streamError);
});