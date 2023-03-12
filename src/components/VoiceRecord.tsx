import { AudioRecorder } from "react-audio-voice-recorder";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import app from "../firebaseConfig";

interface VoiceRecordProps {
  name: string;
}

const VoiceRecord = ({ name }: VoiceRecordProps) => {
  const storage = getStorage(app);

  const addAudioElement = (blob: Blob) => {
    const audioRef = ref(storage, `audio/${name}-${new Date().valueOf()}`);
    uploadBytes(audioRef, blob).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });

    // const url = URL.createObjectURL(blob);
    // const audio = document.createElement("audio");
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
  };

  return (
    <div>
      <h2>Click to Start Voice Record</h2>
      <div className="voice-box_recorder">
        <AudioRecorder onRecordingComplete={addAudioElement} />
      </div>
    </div>
  );
};

export default VoiceRecord;
