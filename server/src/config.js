﻿var config = {
    port: 8650,
    allowOrigin: 'http://127.0.0.1:8000',
    maxRooms: 100,
    serverName: 'A Myomyw Server',
    version: '0.4',

    defaultLCol: 6,
    defaultRCol: 6,
    maxLCol: 10,
    maxRCol: 10,
    minLCol: 3,
    minRCol: 3,
    maxMovementTimes: 5,
    timeLimit: 20000,//超时时间
    maxInterval: 5000,//两次移动之间的最大间隔
}

module.exports = config;
