This solution includes a timeout to handle the potentially non-resolving promise.  It's a workaround, not a true fix.  A better solution requires debugging the Expo library itself.

```javascript
import * as DocumentPicker from 'expo-document-picker';

const selectFile = async () => {
  try {
    const result = await Promise.race([
      DocumentPicker.getDocumentAsync({type: 'application/pdf'}),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
    ]);
    console.log(result);
  } catch (error) {
    console.error("Error selecting file:", error);
  }
};
```