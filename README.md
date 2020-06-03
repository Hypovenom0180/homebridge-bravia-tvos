<p align="center">
    <img src="https://i.imgur.com/xnQyZaU.png" height="200">
</p>


# Sony Bravia

This is a plugin for [Homebridge](https://github.com/nfarina/homebridge) to control your **Sony Bravia Android TV**. 

This plugin supports following functions:

- **Power Switch** (on/off)
- **Inputs** like HDMI, Scart, CEC Devices, AV, WIFI, DVB:T, DVB:C etc.
- **Apps** like YouTube, Prime Video etc.
- **Channels:** Your favourite channels as inputs.
- **Remote control:** native iOS Remote control
- **Login** with PSK or without PSK (for older models)
- **WOL** support Wake on Lan

## Installation instructions

After [Homebridge](https://github.com/nfarina/homebridge) has been installed:

-  ```sudo npm i -g git://github.com/Hypovenom0180/homebridge-sony-bravia.git```

## Preparing the TV (PSK)

- Set **Remote start** to **ON** _(Settings -> Network -> Remote Start)_
- Change **Authentication** to **Normal and Pre-Shared Key** _(Settings -> Network -> IP Control -> Authentication)_
- Enter a **Pre-Shared Key** _(Settings -> Network -> IP control -> Pre-Shared Key)_


## Preparing the TV (without PSK)

- Set **Remote start** to **ON** _(Settings -> Network -> Remote Start)_
- Change **Authentication** to **Normal** _(Settings -> Network -> IP Control -> Authentication)_


## Configuration

 ```
{
 "bridge": {
   ...
},
 "accessories": [
   ...
],
 "platforms": [
    {
      "platform": "SonyBravia",
      "tvs": [
        {
          "name": "Sony Lounge",
          "ip": "192.168.178.3",
          "port": 80,
          "psk": "lipsum555"
        }
      ],
      "interval": 10
    }
 ]
}

 ```

You can also configure the plugin through the Homebridge UI. At this stage, only some options are avaliable to configure via the Homebridge UI.
 
 
 ## Options

| **Attributes** | **Required** | **Usage** |
|------------|----------|-------|
| name | **Yes** | **Unique Name** for the TV Accessory.   |
| ip | **Yes** | IP adress from your Sony Bravia Android TV |
| mac | **No** | MAC address from TV (required if using WOL!) |
| port | **No** | If you have problems with connecting to the TV, try a different port _(Default: 80)_ |
| psk | **No** | Your PRE SHARED KEY _(see preparing the TV above)_ |
| extraInputs | **No** | Inputs for "Scart, Composite, Wifidisplay" _(Default: false)_ |
| cecInputs | **No** | Inputs for connected cec devices like Apple TV _(Default: false)_ |
| channelInputs | **No** | An Array of Channel input types (DVBT/DVBC/DVBS/ANALOG) _(Default: false)_ |
| channels | **No** | List of your favourite channels (channel numbers from tv and source) to display these as inputs in the TV accessory _(Default: false)_ |
| apps | **No** | List of your favourite apps to display as inputs in the TV accessory  _(Default: false)_ |
| wol | **No** | Wake On Lan  _(Default: false)_ |
| customSpeaker | **No** | If true, an extra speaker accessory will be published to HomeKit  _(Default: false)_ |
| speakerType | **No** | Type of the custom speaker (switch, lightbulb, speaker) _(Default: speaker)_ |
| interval | **No** | Polling interval in seconds _(Default: 10s)_ |


## External Accessories

Please note that all TVs will be published as "external accessories"! That means, you need to add these TVs manually to HomeKit. It will be not exposed via the bridge. This is necessary due to handling of the TVs via Apple Homekit.


## Contributing

You can contribute to this homebridge plugin in following ways:

- Report issues.
- Contribute bug fixes.
- Contribute changes to extend the capabilities.

## Credit

A Huge thank you to SeydX and their homebridge-bravia-tvos plugin!
https://github.com/SeydX/homebridge-bravia-tvos#readme
