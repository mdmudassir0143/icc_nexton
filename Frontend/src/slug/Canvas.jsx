import React, { useRef, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../components/Model";
import PageHead from "../components/PageHead";
// import Background from "../components/Background";
import axios from "axios";

const CustomCanvas = () => {
  const canvasRef = useRef(null);
  let mediaRecorderRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const startRecording = () => {
    setLoading(true);

    var chunks = [];
    var canvas_stream = canvasRef?.current.captureStream(30); // fps
    // Create media recorder from canvas stream
    // Record data in chunks array when data is available
    // eslint-disable-next-line
    mediaRecorderRef = new MediaRecorder(canvas_stream, {
      mimeType: "video/webm; codecs=vp9"
    });

    mediaRecorderRef.ondataavailable = (evt) => {
      console.log({ test: evt.data });
      chunks.push(evt.data);
    };
    // Provide recorded data when recording stops
    mediaRecorderRef.onstop = () => {
      stopRecording(chunks);
    };
    // Start recording using a 1s timeslice [ie data is made available every 1s)
    mediaRecorderRef.start(1);

    setTimeout(() => {
      mediaRecorderRef.stop();
    }, 6000);
  };

  const stopRecording = async (chunks) => {
    // Gather chunks of video data into a blob and create an object URL
    var blob = new Blob(chunks, { type: "video/webm" });

    // const res = await getSignedURL({
    //   data: [
    //     {
    //       filename: "Yuvraj_1",
    //       contentType: "video/webm"
    //     }
    //   ],
    //   num: 1
    // });

    // const resData = await axios.put(res.data[0].uploadUrl, media, {
    //   headers: {
    //     "Content-Type": "video/webm"
    //   }
    // });

    // console.log(
    //   "Uploaded url",
    //   res.data[0].resourceUrl,
    //   res.data[0].transcodedUrl
    // );
    setLoading(false);
    const recording_url = URL.createObjectURL(blob);
    // Attach the object URL to an <a> element, setting the download file name
    const a = document.createElement("a");
    a.style = "display: none;";
    a.href = recording_url;
    a.download = "video.webm";
    document.body.appendChild(a);
    // Trigger the file download
    a.click();
    setTimeout(() => {
      // Clean up - see https://stackoverflow.com/a/48968694 for why it is in a timeout
      URL.revokeObjectURL(recording_url);
      document.body.removeChild(a);
      setLoading(false);
    }, 0);
  };

  // useEffect(() => {
  //   if (moves.length > 0) setData((prev) => ({ ...prev, move: moves[0] }));
  // }, [moves]);

  // console.log(activeMove, "Parent");

  return (
    <>
    <PageHead title="3D Model" />
    <div className="canvas" style={{ height: "85vh"}}>
      <Canvas
        ref={canvasRef}
        camera={{ fov: 75, near: 1, far: 1000, position: [0, 0, 5] }}
      >
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="park" background />
          <ambientLight intensity={1} />
          <directionalLight />
          {/* <Background /> */}
        </Suspense>
      </Canvas>

      {/* <button
        id="record-video"
        onClick={() => startRecording()}
        disabled={loading}
      >
        {loading ? "Recording..." : "Download preview video"}
      </button> */}
    </div>
    </>
  );
};

export default CustomCanvas;
