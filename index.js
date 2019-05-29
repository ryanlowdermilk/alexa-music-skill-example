const Alexa = require('ask-sdk-core');

exports.handler = (event, context, callback) => {
  console.log(`event: ${JSON.stringify(event)}`);
  var jsonStr = null;
  if (event.header !== undefined && event.header.name == "GetPlayableContent") {
    jsonStr = `{
      "header": {
          "messageId": "00ef1e9a-140b-485c-bc2c-5b9556cee492",
          "namespace": "Alexa.Media.Search",
          "name": "GetPlayableContent.Response",
          "payloadVersion": "1.0"
      },
      "payload": {
          "content": {
              "id": "track.001",
              "metadata": {
                  "type": "TRACK",
                  "name": {
                      "speech": {
                          "type": "PLAIN_TEXT",
                          "text": "Double Violin Concerto 1st Movement by J.S. Bach"
                      },
                      "display": "Double Violin Concerto 1st Movement by J.S. Bach"
                  },
                  "art": {
                      "sources": [
                          {
                              "url": "https://example.com/images/cover/48x48-000000-80-0-0.jpg",
                              "size": "X_SMALL",
                              "widthPixels": 48,
                              "heightPixels": 48
                          },
                          {
                              "url": "https://example.com/images/cover/60x60-000000-80-0-0.jpg",
                              "size": "SMALL",
                              "widthPixels": 60,
                              "heightPixels": 60
                          },
                          {
                              "url": "https://example.com/images/cover/110x110-000000-80-0-0.jpg",
                              "size": "MEDIUM",
                              "widthPixels": 110,
                              "heightPixels": 110
                          },
                          {
                              "url": "https://example.com/images/cover/256x256-000000-80-0-0.jpg",
                              "size": "LARGE",
                              "widthPixels": 256,
                              "heightPixels": 256
                          },
                          {
                              "url": "https://example.com/images/cover/600x600-000000-80-0-0.jpg",
                              "size": "X_LARGE",
                              "widthPixels": 600,
                              "heightPixels": 600
                          }
                      ]
                  }
              },
              "controls": [
                  {
                      "type": "COMMAND",
                      "name": "NEXT",
                      "enabled": true
                  },
                  {
                      "type": "COMMAND",
                      "name": "PREVIOUS",
                      "enabled": false
                  }
              ]            
          }
      }
  }`;
  }
  else if (event.header !== undefined && event.header.name == "Initiate") {
    jsonStr = `{
      "header": {
          "messageId": "8582881e-8cee-40e5-88d0-b26d59b23fd0",
          "namespace": "Alexa.Media.Playback",
          "name": "Initiate.Response",
          "payloadVersion": "1.0"
      },
      "payload": {
          "playbackMethod": {
              "type": "ALEXA_AUDIO_PLAYER_QUEUE",
              "id": "76f325d5-a648-4e8f-87ad-6e53cf99e4c7",
              "rules": {
                  "feedback": {
                      "type": "PREFERENCE",
                      "enabled": true
                  }
              },
              "firstItem": {
                  "id": "e73befbe-8c27-4e4b-ab0c-9865ce8516f0",
                  "playbackInfo": {
                      "type": "DEFAULT"
                  },
                  "metadata": {
                      "type": "TRACK",
                      "name": {
                          "speech": {
                              "type": "PLAIN_TEXT",
                              "text": "Double Violin Concerto 1st Movement by J.S. Bach"
                          },
                          "display": "Double Violin Concerto 1st Movement by J.S. Bach"
                      },
                      "art": {
                          "sources": [
                              {
                                  "url": "https://example.com/images/cover/48x48-000000-80-0-0.jpg",
                                  "size": "X_SMALL",
                                  "widthPixels": 48,
                                  "heightPixels": 48
                              },
                              {
                                  "url": "https://example.com/images/cover/60x60-000000-80-0-0.jpg",
                                  "size": "SMALL",
                                  "widthPixels": 60,
                                  "heightPixels": 60
                              },
                              {
                                  "url": "https://example.com/images/cover/110x110-000000-80-0-0.jpg",
                                  "size": "MEDIUM",
                                  "widthPixels": 110,
                                  "heightPixels": 110
                              },
                              {
                                  "url": "https://example.com/images/cover/256x256-000000-80-0-0.jpg",
                                  "size": "LARGE",
                                  "widthPixels": 256,
                                  "heightPixels": 256
                              },
                              {
                                  "url": "https://example.com/images/cover/600x600-000000-80-0-0.jpg",
                                  "size": "X_LARGE",
                                  "widthPixels": 600,
                                  "heightPixels": 600
                              }
                          ]
                      }
                  },
                  "controls": [
                      {
                          "type": "COMMAND",
                          "name": "NEXT",
                          "enabled": true
                      },
                      {
                          "type": "COMMAND",
                          "name": "PREVIOUS",
                          "enabled": false
                      }
                  ],
                  "rules": {
                      "feedbackEnabled": false
                  },
                  "stream": {
                      "id": "STREAMID_92",
                      "uri": "https://www.dropbox.com/s/hanc82lmgvc7myt/Double%20Violin%20Concerto%201st%20Movement%20-%20J.S.%20Bach.mp3?dl=1"
                  }
              }
          }
      }
  }`;
  }
  else if (event.header !== undefined && event.header.name == "GetNextItem") {
    jsonStr = `{
      "header": {
          "messageId": "8582881e-8cee-40e5-88d0-b26d59b23fd0",
          "namespace": "Alexa.Audio.PlayQueue",
          "name": "GetNextItem.Response",
          "payloadVersion": "1.0"
      },
      "payload": {
          "isQueueFinished": false,
          "item": {
              "id": "e73befbe-8c27-4e4b-ab0c-9865ce8516f0",
              "playbackInfo": {
                  "type": "DEFAULT"
              },
              "metadata": {
                  "type": "TRACK",
                  "name": {
                      "speech": {
                          "type": "PLAIN_TEXT",
                          "text": "Scherzo No. 1 by Chopin "
                      },
                      "display": "Scherzo No. 1 by Chopin "
                  },
                  "art": {
                      "sources": [
                          {
                              "url": "https://example.com/images/cover/48x48-000000-80-0-0.jpg",
                              "size": "X_SMALL",
                              "widthPixels": 48,
                              "heightPixels": 48
                          },
                          {
                              "url": "https://example.com/images/cover/60x60-000000-80-0-0.jpg",
                              "size": "SMALL",
                              "widthPixels": 60,
                              "heightPixels": 60
                          },
                          {
                              "url": "https://example.com/images/cover/110x110-000000-80-0-0.jpg",
                              "size": "MEDIUM",
                              "widthPixels": 110,
                              "heightPixels": 110
                          },
                          {
                              "url": "https://example.com/images/cover/256x256-000000-80-0-0.jpg",
                              "size": "LARGE",
                              "widthPixels": 256,
                              "heightPixels": 256
                          },
                          {
                              "url": "https://example.com/images/cover/600x600-000000-80-0-0.jpg",
                              "size": "X_LARGE",
                              "widthPixels": 600,
                              "heightPixels": 600
                          }
                      ]
                  }
              },
              "controls": [
                  {
                      "type": "COMMAND",
                      "name": "NEXT",
                      "enabled": true
                  },
                  {
                      "type": "COMMAND",
                      "name": "PREVIOUS",
                      "enabled": false
                  }
              ],
              "rules": {
                  "feedbackEnabled": false
              },
              "stream": {
                  "id": "STREAMID_93",
                  "uri": "https://www.dropbox.com/s/50x942t5j886h4w/Scherzo%20No1_%20Chopin.mp3?dl=1"
              }
          }
      }
  }`;
  }
  callback(null, JSON.parse(jsonStr));
};