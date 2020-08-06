import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PERMISSIONS, check, request, RESULTS } from 'react-native-permissions';
import AudioRecord from 'react-native-audio-record';

const options = {
  sampleRate: 16000,
  channels: 1,
  bitsPerSample: 16,
  audioSource: 6,
  wavFile: 'breathing.wav',
};

const DogsPage3 = ({ navigation }) => {
  const [microphoneGranted, setMicrophoneGranted] = useState(false);

  const handleMicrophonePermission = async () => {
    const res = await check(PERMISSIONS.ANDROID.RECORD_AUDIO)
    if (res === RESULTS.GRANTED) {
      setMicrophoneGranted(true);
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.ANDROID.RECORD_AUDIO)
      res2 === RESULTS.GRANTED
        ? setMicrophoneGranted(true)
        : setMicrophoneGranted(false)
    }
  }

  const handleStartRecording = () => {
    AudioRecord.init(options);
    AudioRecord.start();
    AudioRecord.on('data', data)
  }

  const handleStopRecording = () => {
    AudioRecord.stop();
  }

  useEffect(() => {
    handleMicrophonePermission();
  }, []);

    return (
        <View style={styles.container}>
            {microphoneGranted
              ? <Text style={styles.text}>Record your dog breathing</Text>
              : <Text style={styles.text}>Please enable the microphone</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C28021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});

export default DogsPage3;