/*
    Adobe ES環境下で Object app が予約されているので、先行で判定を行い
    同名のメソッドを下げる  20250701
*/
if(typeof app == "undefined"){
    var app = {};
};
    app.initialize = function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    };

    app.onDeviceReady = function() {
        console.log('device ready');
        this.getDeviceUUID();
    };

    app.getDeviceUUID = function() {
        const platformId = window.cordova.platformId;
        const deviceInfo = document.getElementById('device-info');
        let uuid = null;
        if (device && device.uuid && ['ios', 'android', 'electron'].indexOf(platformId) >= 0) {
            // get uuid from cordova-plugin-device
            uuid = device.uuid;
        } else {
            // other platforms such as browser, ...
            uuid = `The ${platformId} platform is not supported.`;
        }
        if (uuid) deviceInfo.innerHTML = `Device UUID: ${uuid}<br>`;
        deviceInfo.innerHTML += window.navigator.userAgent;
    };
    
/*---------------------*/
app.initialize();