import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:geolocator/geolocator.dart';

class DeviceLocationController extends GetxController{




  @override
  void onInit() {
    // TODO: implement onInit
    super.onInit();
    determinePosition();
  }


  /// Determine the current position of the device.
  ///
  /// When the location services are not enabled or permissions
  /// are denied the `Future` will return an error.
  Future<Position> determinePosition() async {
    bool serviceEnabled;
    LocationPermission permission;

    // Check if location service is enabled
    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      // Open location settings for the user
      await Geolocator.openLocationSettings();
      return Future.error(
          'Location services are disabled. Please enable them.');
    }

    // Check permission
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        return Future.error('Location permissions are denied.');
      }
    }

    if (permission == LocationPermission.deniedForever) {
      return Future.error(
          'Location permissions are permanently denied. Please enable them in app settings.');
    }

    // Permissions are granted, get location

    // Position position = await Geolocator.getCurrentPosition();
    // print('DevicePosition: $position');

    Position? position = await Geolocator.getLastKnownPosition();
    if (position != null) {
      print('Last Known Position: $position');
    } else {
      position = await Geolocator.getCurrentPosition(
        desiredAccuracy: LocationAccuracy.high,
      );
      Future.delayed(Duration(seconds: 5));
      print('Current Position: $position');
      print('Current Position: ${position.latitude}');
    }
    return position;
  }

}