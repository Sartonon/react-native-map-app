import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocations = increment => {
  return {
    timestamp: 100000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 25.83969448270734 + increment * tenMetersWithDegrees,
      latitude: 62.235637808163624 + increment * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocations(counter)
  });
  counter++;
}, 1000);
