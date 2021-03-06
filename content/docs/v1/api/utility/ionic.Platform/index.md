---
layout: "docs_api"
version: "1.3.3"
versionHref: "/docs/v1"
path: "api/utility/ionic.Platform/"

title: "ionic.Platform"
header_sub_title: "Utility in module ionic"
doc: "ionic.Platform"
docType: "utility"
---

<div class="improve-docs">
<a href='https://github.com/ionic-team/ionic-v1/blob/master/js/utils/platform.js#L17'>
View Source
</a>
&nbsp;
<a href='http://github.com/ionic-team/ionic/edit/1.x/js/utils/platform.js#L17'>
Improve this doc
</a>
</div>




<h1 class="api-title">

ionic.Platform



</h1>





A set of utility methods that can be used to retrieve the device ready state and
various other information such as what kind of platform the app is currently installed on.









## Usage
```js
angular.module('PlatformApp', ['ionic'])
.controller('PlatformCtrl', function($scope) {

  ionic.Platform.ready(function(){
    // will execute when device is ready, or immediately if the device is already ready.
  });

  var deviceInformation = ionic.Platform.device();

  var isWebView = ionic.Platform.isWebView();
  var isIPad = ionic.Platform.isIPad();
  var isIOS = ionic.Platform.isIOS();
  var isAndroid = ionic.Platform.isAndroid();
  var isWindowsPhone = ionic.Platform.isWindowsPhone();

  var currentPlatform = ionic.Platform.platform();
  var currentPlatformVersion = ionic.Platform.version();

  ionic.Platform.exitApp(); // stops the app
});
```


  

  
## Methods

<div id="ready"></div>
<h2>
  <code>ready(callback)</code>

</h2>

Trigger a callback once the device is ready, or immediately
if the device is already ready. This method can be run from
anywhere and does not need to be wrapped by any additonal methods.
When the app is within a WebView (Cordova), it'll fire
the callback once the device is ready. If the app is within
a web browser, it'll fire the callback after `window.load`.
Please remember that Cordova features (Camera, FileSystem, etc) still
will not work in a web browser.



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        callback
        
        
      </td>
      <td>
        
  <code>function</code>
      </td>
      <td>
        <p>The function to call.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="setGrade"></div>
<h2>
  <code>setGrade(grade)</code>

</h2>

Set the grade of the device: 'a', 'b', or 'c'. 'a' is the best
(most css features enabled), 'c' is the worst.  By default, sets the grade
depending on the current device.



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        grade
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>The new grade to set.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="device"></div>
<h2>
  <code>device()</code>

</h2>

Return the current device (given by cordova).






* Returns: 
  <code>object</code> The device object.




<div id="isWebView"></div>
<h2>
  <code>isWebView()</code>

</h2>








* Returns: 
  <code>boolean</code> Check if we are running within a WebView (such as Cordova).




<div id="isIPad"></div>
<h2>
  <code>isIPad()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on iPad.




<div id="isIOS"></div>
<h2>
  <code>isIOS()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on iOS.




<div id="isAndroid"></div>
<h2>
  <code>isAndroid()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on Android.




<div id="isWindowsPhone"></div>
<h2>
  <code>isWindowsPhone()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on Windows Phone.




<div id="isEdge"></div>
<h2>
  <code>isEdge()</code>

</h2>








* Returns: 
  <code>boolean</code> Whether we are running on MS Edge/Windows 10 (inc. Phone)




<div id="platform"></div>
<h2>
  <code>platform()</code>

</h2>








* Returns: 
  <code>string</code> The name of the current platform.




<div id="version"></div>
<h2>
  <code>version()</code>

</h2>








* Returns: 
  <code>number</code> The version of the current device platform.




<div id="is"></div>
<h2>
  <code>is(Platform)</code>

</h2>





<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        Platform
        
        
      </td>
      <td>
        
  <code>string</code>
      </td>
      <td>
        <p>name.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>






* Returns: 
  <code>boolean</code> Whether the platform name provided is detected.




<div id="exitApp"></div>
<h2>
  <code>exitApp()</code>

</h2>

Exit the app.









<div id="showStatusBar"></div>
<h2>
  <code>showStatusBar(shouldShow)</code>

</h2>

Shows or hides the device status bar (in Cordova). Requires `ionic cordova plugin add cordova-plugin-statusbar`



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        shouldShow
        
        
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to show the status bar.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>









<div id="fullScreen"></div>
<h2>
  <code>fullScreen([showFullScreen],&nbsp;[showStatusBar])</code>

</h2>

Sets whether the app is fullscreen or not (in Cordova).



<table class="table" style="margin:0;">
  <thead>
    <tr>
      <th>Param</th>
      <th>Type</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>
        showFullScreen
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to set the app to fullscreen. Defaults to true. Requires <code>ionic cordova plugin add cordova-plugin-statusbar</code></p>

        
      </td>
    </tr>
    
    <tr>
      <td>
        showStatusBar
        
        <div><em>(optional)</em></div>
      </td>
      <td>
        
  <code>boolean</code>
      </td>
      <td>
        <p>Whether or not to show the device&#39;s status bar. Defaults to false.</p>

        
      </td>
    </tr>
    
  </tbody>
</table>








  
  
<h2 id="properties">Properties</h2>

<div id="isReady"></div>
* <h3>
  <code>boolean</code> <code>isReady</code></h3>

  Whether the device is ready.

  



<div id="isFullScreen"></div>
* <h3>
  <code>boolean</code> <code>isFullScreen</code></h3>

  Whether the device is fullscreen.

  



<div id="platforms"></div>
* <h3>
  <code>Array(string)</code> <code>platforms</code></h3>

  An array of all platforms found.

  



<div id="grade"></div>
* <h3>
  <code>string</code> <code>grade</code></h3>

  What grade the current platform is.

  



<div id="ua"></div>
* <h3>
  <code>string</code> <code>ua</code></h3>

  What User Agent is.

  








