const streamIDs = {
  STREAM_IDS: [
    { name: 'Popular Mechanics', id: 23116280 },
    { name: 'Hacker News', id: 14335498 },
    { name: 'Brendan Eich', id: 9533042}
  ],
  getStreamIDs: () => {
    return streamIDs.STREAM_IDS.map(user => user.id).join(',');
  }
};

module.exports = streamIDs;