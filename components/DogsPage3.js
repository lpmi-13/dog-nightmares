import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { PERMISSIONS, check, request, RESULTS } from 'react-native-permissions';
import AudioRecord from 'react-native-audio-record';
//import { Buffer } from 'buffer';

const options = {
  sampleRate: 16000,
  channels: 1,
  bitsPerSample: 16,
  audioSource: 6,
  //wavFile: 'breathing.wav',
};

const handleStartRecording = () => {
  //let chunk;
  AudioRecord.init(options);
  AudioRecord.start();
  //AudioRecord.on('data', data => {
  //  chunk = Buffer.from(data, 'base64');
  //  console.log(chunk);
  //});
  console.log('started recording')
}

const handleStopRecording = () => {
  AudioRecord.stop();
  console.log('stopped recording')
}

const RecordBreathingComponent = ({ navigation }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
      style={({pressed}) => [
            {
              backgroundColor: pressed ? 'red' : 'blue',
            },
            styles.button,
          ]}
        onPressIn={() => {
          handleStartRecording(),
          setPressed(true)
        }}
        onPressOut={() => {
          handleStopRecording(),
          setPressed(false),
          navigation.navigate('DogsPage4')
        }}
        >
        <Text>Record Your Dog Breathing</Text>
      </Pressable>
      <Text style={styles.recording}>{pressed ? 'Recording now!' : null}</Text>
    </View>
  )
}

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


  useEffect(() => {
    handleMicrophonePermission();
  }, []);

    return (
        <View style={styles.container}>
            {microphoneGranted
              ? <RecordBreathingComponent navigation={navigation} />
              : <Text style={styles.text}>Please enable the microphone</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#C28021',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  recording: {
    fontSize: 20, 
  },
  text: {
    color: '#fff',
    fontSize: 20,
  }
});

export default DogsPage3;