# Expo Location Tracking Bug - iOS Minimal Reproducible Example

This repository contains a minimal reproducible example demonstrating a bug with `expo-location` and `expo-task-manager` on iOS, where `Location.startLocationUpdatesAsync` fails to initiate location tracking on the first launch of the app.

## Overview

The primary focus of this example is to illustrate the issue where location tracking, initialized by `Location.startLocationUpdatesAsync`, does not start as expected on the first launch of the development build on iOS devices. The issue is resolved on subsequent launches after force quitting the app.
