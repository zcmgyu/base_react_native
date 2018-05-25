envConfig=$(echo $CONFIGURATION | tr '[:upper:]' '[:lower:]')

if [[ -z $CRASHLYTICS_API_TOKEN || -z $CRASHLYTICS_BUILD_SECRET ]]; then
    echo "CRASHLYTICS_API_TOKEN and CRASHLYTICS_BUILD_SECRET are undefined"
    envConfigFile=$envConfig
    if [ $envConfigFile == 'debug' ]; then
        echo "In debug mode. Read config from .env.dev file instead of .env.debug"
        envConfigFile="dev"
    fi
    envFilePath=$(dirname "$SRCROOT")/.env.$envConfigFile
    echo "Read environment variables from $envFilePath"
    if [ ! -f "$envFilePath" ]; then
        echo "Could not find $envFilePath"
        exit 1
    else
        export $(cat $envFilePath | grep -v ^# | xargs)
    fi
fi

if [[ -z $CRASHLYTICS_API_TOKEN || -z $CRASHLYTICS_BUILD_SECRET ]]; then
    if [ $envConfig == 'debug' ]; then
        echo "warning: Invalid CRASHLYTICS_API_TOKEN and CRASHLYTICS_BUILD_SECRET. Skip running Fabric script."
    else
        echo "error: Invalid CRASHLYTICS_API_TOKEN and CRASHLYTICS_BUILD_SECRET"
        exit 1
    fi
else
    "${PODS_ROOT}/Fabric/run" $CRASHLYTICS_API_TOKEN $CRASHLYTICS_BUILD_SECRET
fi
