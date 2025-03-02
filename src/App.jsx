
import './App.css'
import { useState,useRef } from "react";
import Lottie from "lottie-react";
import letter from './assets/letter.json'
import couple from './assets/couple.json'
import heart from './assets/heart.json'
import { motion } from "framer-motion";
import audioFile from './song.mp3'
import tripti from './assets/tripti.jpg'

function App() {
  const [asked, setAsked] = useState(false);
  const [response, setResponse] = useState(null);
  const audioRef = useRef(null);

  const askOut = (answer) => {
    setAsked(true);
    setResponse(answer);
    if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
  };

  return (
    <>
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#940808", padding: "20px",gap:"20px",minHeight: "100vh",
  maxWidth: "100vw",
  overflow: "hidden",boxSizing:'border-box' }}>
    <motion.div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
     <motion.h1
        style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px",textDecoration: "underline"}}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi Tripti!
      </motion.h1>

      <Lottie animationData={heart} style={{ width: "100px", margin: "auto"}} />
      </motion.div>
    <motion.img src={tripti} initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{height:"200px", border:"solid #e56b6b 2px"}} />

      <motion.h1
        style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Will You Go on a Date With Me?
      </motion.h1>
      <div style={{ width: "300px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", borderRadius: "12px", textAlign: "center", padding: "20px", backgroundColor: "#e56b6b" }}>
        {!asked ? (
          <>
            <Lottie animationData={letter} style={{ width: "300px", margin: "auto" }} />
            <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
              <motion.button
                onClick={() => askOut("Yes!")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: "#28a745", color: "white", padding: "12px 24px", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", transition: "0.3s" }}
              >
                Yes ❤️
              </motion.button>
              <motion.button
                onClick={() => askOut("No :(")}
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                style={{ backgroundColor: "#dc3545", color: "white", padding: "12px 24px", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", transition: "0.3s" }}
              >
                No 😢
              </motion.button>
            </div>
          </>
        ) : (
          <motion.p
            style={{ fontSize: "24px", fontWeight: "bold", marginTop: "20px" }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Lottie animationData={couple} style={{ width: "150px", margin: "auto" }} />
            {response}
          </motion.p>
        )}
      </div>
    </div>
     <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </>
  )
}

export default App
