# Expo DocumentPicker Android Promise Hang

This repository demonstrates a bug in the Expo DocumentPicker API on Android.  The promise returned by `DocumentPicker.getDocumentAsync()` fails to resolve after a file is selected, causing the application to hang. This issue does not occur on iOS.

## Steps to Reproduce

1. Run the application on an Android emulator or device.
2. Tap the "Select File" button.
3. Select a file from the DocumentPicker.
4. The application will hang, and the promise will never resolve.

## Expected Behavior

The promise returned by `DocumentPicker.getDocumentAsync()` should resolve with the selected file's URI.

## Actual Behavior

The promise never resolves, and the application hangs.

## Solution (see bugSolution.js)

The solution involves using a timeout to handle the potentially non-resolving promise.  While not ideal, this prevents the app from freezing.  A more robust fix requires investigation into the root cause within the Expo DocumentPicker library.