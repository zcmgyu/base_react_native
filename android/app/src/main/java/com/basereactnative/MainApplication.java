
package com.basereactnative;

import android.app.Activity;

import com.facebook.react.ReactPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.smixx.fabric.FabricPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            new ReactNativeConfigPackage(),
            new VectorIconsPackage(),
        new FabricPackage(),
    new RNDeviceInfo());
  }

  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();

  }

  @Override
  public boolean clearHostOnActivityDestroy(Activity activity) {
    return false;
  }

  @Override
  public String getJSMainModuleName() {
    return "index";
  }

}

// package com.basereactnative;
//
// import android.app.Application;
// import android.support.compat.BuildConfig;
//
//
// import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
// import com.oblador.vectoricons.VectorIconsPackage;
// import com.reactnativenavigation.NavigationApplication;
// import com.smixx.fabric.FabricPackage;
//
// import java.util.Arrays;
//
// public class MainApplication extends NavigationApplication {
//
//
// @Override
// public boolean isDebug() {
// // Make sure you are using BuildConfig from your own application
// return BuildConfig.DEBUG;
// }
//
// @Override
// public void onCreate() {
// super.onCreate();
// Fabric.with(this, new Crashlytics());
// }
//
// protected List<ReactPackage> getPackages() {
// // Add additional packages you require here
// // No need to add RnnPackage and MainReactPackage
// return Arrays.<ReactPackage>asList(
// new ReactNativeConfigPackage(),
// new VectorIconsPackage(),
// new FabricPackage()
// );
// }
//
// @Override
// public List<ReactPackage> createAdditionalReactPackages() {
// return getPackages();
// }
//
// @Override
// public String getJSMainModuleName() {
// return "index";
// }
// }