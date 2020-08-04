import React, { useRef, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import SignatureScreen from 'react-native-signature-canvas';

const Sign = ({ text, onConfirm }) => {
    const ref = useRef();
    const [signature, setSignature] = useState(null);

    const handleSignature = signature => {
        // onOK(signature);
        setSignature(signature);
        onConfirm();
    };

    const handleEmpty = () => {
        console.log('Empty');
    };

    const handleClear = () => {
        setSignature(null);
        console.log('cleared signature')
    };

    const handleEnd = () => {
        ref.current.readSignature();
        console.log('stopped writing');
    };

    return (
        <>
            <View style={styles.preview}>
                {signature ? (
                    <Image
                      resizeMode={"contain"}
                      style={{ width: 335, height: 114 }}
                      source={{ uri: signature }}
                      />
                ) : null}
            </View>
          <SignatureScreen
            ref={ref}
            onEnd={handleEnd}
            onOK={handleSignature}
            oonEmpty={handleEmpty}
            onClear={handleClear}
            autoClear={false}
            descriptionText={text}
          />
          </>
    );
};

const styles = StyleSheet.create({
    preview: {
    width: 335,
    height: 114,
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
})

export default Sign;