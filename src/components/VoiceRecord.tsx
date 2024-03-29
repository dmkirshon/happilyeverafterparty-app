import { useAudioRecorder } from "react-audio-voice-recorder";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import app from "../firebaseConfig";
import { useState } from "react";

interface VoiceRecordProps {
  name: string;
}

const VoiceRecord = ({ name }: VoiceRecordProps) => {
  const storage = getStorage(app);
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
  } = useAudioRecorder();
  const [isRecordingNoteSaved, setIsRecordingNoteSaved] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploadInProgress, setIsUploadInProgress] = useState(false);

  const uploadVoiceNote = async () => {
    const audioRef = ref(
      storage,
      `audio/${name}/${name}-${new Date().valueOf()}`
    );
    const uploadResult = await uploadBytes(audioRef, recordingBlob!);
    console.log(uploadResult);
    setIsUploadInProgress(false);
    setIsUploaded(true);
  };

  const timeFormat = (time: number) => {
    const isExtraZeroSecondsNeeded = time % 60 < 10;
    const secondsFormatted = isExtraZeroSecondsNeeded
      ? `0${time % 60}`
      : time % 60;
    const isExtraZeroMinutesNeeded = Math.floor(time / 60) < 10;
    const minutesFormatted = isExtraZeroMinutesNeeded
      ? `0${Math.floor(time / 60)}`
      : Math.floor(time / 60);
    return `${minutesFormatted}:${secondsFormatted}`;
  };

  return (
    <div className="voice-recorder">
      {!isRecording && (
        <h2 className="voice-box_recorder_heading">
          Click Below to Begin Recording Voice
        </h2>
      )}
      <div className="voice-box_recorder">
        {!isRecording && (
          <div className="recording_upload">
            <button
              className="voice-box_record"
              onClick={() => {
                setIsUploaded(false);
                startRecording();
              }}
            >
              {recordingBlob ? "Re-record Voice Note" : "Record Voice Note"}
            </button>
            {recordingBlob && isRecordingNoteSaved && (
              <div className="recording_upload">
                {isUploaded ? (
                  <div className="upload_done">
                    {!isUploadInProgress
                      ? "Thank You! Your Upload has been submitted!"
                      : "Uploading Now, Please Do Not Leave Page"}
                  </div>
                ) : isUploadInProgress ? (
                  <div className="upload_progress">
                    Uploading Now, Please Do Not Leave Page
                  </div>
                ) : (
                  <button
                    className="upload_button"
                    onClick={() => {
                      setIsUploadInProgress(true);
                      uploadVoiceNote();
                    }}
                  >
                    Upload Voice Note
                  </button>
                )}
                <div className="upload_preview">
                  Listen to your recording:
                  <audio
                    controls
                    src={URL.createObjectURL(recordingBlob!)}
                  ></audio>
                </div>
              </div>
            )}
          </div>
        )}
        {isRecording && (
          <div className="voice-box_recording">
            <button
              className=""
              onClick={() => {
                setIsRecordingNoteSaved(true);
                stopRecording();
              }}
            >
              Save Recording
            </button>
            <button
              className=""
              onClick={() => {
                setIsRecordingNoteSaved(false);
                stopRecording();
              }}
            >
              Trash Recording
            </button>
            <button className="" onClick={togglePauseResume}>
              {isPaused ? "Continue Recording" : "Pause Recording"}
            </button>
            <div className="recording_status">
              {isPaused ? "" : <div className="recording_icon"></div>}
              <p className="recording_time">
                Time: {timeFormat(recordingTime)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceRecord;
