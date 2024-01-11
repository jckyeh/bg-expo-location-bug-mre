# Expo Location Tracking Bug - iOS Minimal Reproducible Example

This repository contains a minimal reproducible example demonstrating a bug with `expo-location` and `expo-task-manager` on iOS, where `Location.startLocationUpdatesAsync` fails to initiate location tracking on the first launch of the app.

## Overview

The primary focus of this example is to illustrate the issue where location tracking, initialized by `Location.startLocationUpdatesAsync`, does not start as expected on the first launch of the development build on iOS devices. The issue is resolved on subsequent launches after force quitting the app.

### Steps to Reproduce
1. Launch the development build on a physical iOS device.
2. Invoke `Location.startLocationUpdatesAsync` by tapping "Enable background location" button and accepting foreground and background permissions.
3. Observe that location tracking does not start (no logs in console).
4. Force quit the app and restart the development build.
5. Location tracking starts functioning as expected on the second launch (see console logs of location object).

### Additional Context
- This issue seems to be specific to iOS and does not affect Android.
