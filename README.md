# rn-bottom-sheet-modal

A lightweight and customizable **Bottom Sheet Modal** component for **React Native**, built with pure JS and no dependencies.

## ✨ Features

- **Simple and customizable**
- Overlay over whole app (displayed on top of the app)
- **Pure JS** implementation (no native code needed)
- **Smooth animations**
- Tap outside to close

[![Bottom Sheet Demo](https://firebasestorage.googleapis.com/v0/b/todolist-swift-5d3c7.appspot.com/o/150314d7-51fd-4b69-a365-3d657a9cc836.jpg?alt=media&token=1b55133c-6c20-424e-b5cd-e47e44f45632$0)](https://firebasestorage.googleapis.com/v0/b/todolist-swift-5d3c7.appspot.com/o/Simulator%20Screen%20Recording%20-%20iPhone%2016%20Pro%20-%202025-04-15%20at%2015.54.25.mp4?alt=media&token=493fa9e9-8f03-494a-b85e-3781d43f83d9)

<br />

## 📦 Installation

```bash
npm install rn-bottom-sheet-modal
```

<br />

## Example

```javascript
import React, { useState } from "react";
import { View, Text, Pressable, Button } from "react-native";
import { BottomSheetModal } from "rn-bottom-sheet-modal";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Show Bottom Sheet"
        onPress={() => setIsModalVisible(true)}
      />

      <BottomSheetModal
        modalVisible={isModalVisible}
        onClose={handleModalClose}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        >
          <Text>Done</Text>
          <View style={{ height: 30 }} />
          <Pressable
            onPress={() => setIsModalVisible(false)}
            style={{
              width: "100%",
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "white", paddingVertical: 12 }}>Hide</Text>
          </Pressable>
          <View style={{ height: 30 }} />
        </View>
      </BottomSheetModal>
    </View>
  );
};

export default App;
```

## Usage

| Parameter      | Type                         | Description                                                         |
| :------------- | :--------------------------- | :------------------------------------------------------------------ |
| `modalVisible` | `boolean`                    | **Required**. Controls whether the modal is visible                 |
| `onClose`      | `(visible: boolean) => void` | **Required**. Callback that updates visibility when modal is closed |
| `children`     | `React.ReactNode`            | **Required**. Content to display inside the bottom sheet            |

<br />

## Usage

<br />

If this repo is helpful to you, buy me a coffee,thank you very much!😄


<a href="https://buymeacoffee.com/bilalyuu" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174">
</a>
