## install

1. 地址栏输入：`chrome://extentions`
2. 下载该文件并解压至Chrome浏览器拓展程序

![安装](C:\Users\Administrator\Desktop\fe-plugins\file\安装.png)

## manifest.json

- "manifest_version": manifest的版本号，该号由google确定

- "name": 插件名称

- "version": 插件版本

- "description": 插件描述介绍

- "icons":  插件的图标，分为3种分辨率

  ```json
  "icons": {
      "16":"img/logo@16.png",
      "48":"img/logo@48.png",
      "128":"img/logo@128.png"
  }
  ```

- "browser_action": 浏览器右上角插件图标及其被点击时弹出的界面

  ```json
  "browser_action": {
      "default_icon":"img/logo.png",
      "default_popup":"popup.html"
  }
  ```


## deploy

文档至此就要结束了，至于原因你懂的！ :joy:

![发布](C:\Users\Administrator\Desktop\fe-plugins\file\发布.png)

## reference

- https://developer.chrome.com/docs/extensions/mv3/manifest
- https://open.chrome.360.cn/extension_dev/manifest.html