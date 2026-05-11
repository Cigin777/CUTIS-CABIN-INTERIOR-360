var APP_DATA = {
  "scenes": [
    {
      "id": "0-cabin-view-1",
      "name": "CABIN VIEW 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.10329597031960347,
        "pitch": -0.03893695063936775,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": -0.5078947326857985,
          "pitch": 0.04108496816298768,
          "rotation": 0,
          "target": "1-cabin-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cabin-view-2",
      "name": "CABIN VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.49677156899531383,
        "pitch": -0.034067021500950645,
        "fov": 1.417305062686052
      },
      "linkHotspots": [
        {
          "yaw": 0.3631048171860538,
          "pitch": 0.01727118032700048,
          "rotation": 0,
          "target": "0-cabin-view-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CUTIS CABIN",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
