import { useState } from 'react';
import './techstack.css'


function TechStack() {
  const [web, setWeb] = useState(true);
  const [AI, setAI] = useState(false);
  const [hardware, setHardware] = useState(false);

  function dispAI() {
    setAI(!(AI));
    setHardware(false);
    setWeb(false);
  }

  function dispHardware() {
    setHardware(!(hardware));
    setAI(false);
    setWeb(false);
  }

  function dispWeb() {
    setWeb(!(web));
    setHardware(false);
    setAI(false);
  }
  return(
    <div className="allStack">
      <div className='wrapper'>
        <h1 style={{fontWeight: "500", fontSize: "6vw", letterSpacing: "0.1vw"}}>Tech Stack</h1>
        <p>My skills includes Python, C++, TensorFlow, PyTorch, MERN, Next.js, TypeScript, AWS, Firebase, Docker, HuggingFace and others building end-to-end AI solutions from models to production.</p>
      </div>
      <div className="cardsStack" style={{marginTop: "3vw"}}>
          <button className="stacker" onClick={dispAI}>Artificial Intelligence</button>
          <button className="stacker" onClick={dispWeb}>Web Development</button>
          <button className="stacker" onClick={dispHardware}>Languages</button>
      </div>
      <div className="iconsStack">

        {web ? 
        <div className='logos'>
        <div className='logoI'>
          <img src="/icons/mongo.svg" alt="MongoDB" className='mongo'/>
          <img src="/icons/express.webp" alt="ExpressJS" className='express' style={{borderRadius: "1vw"}}/>
          <img src="/icons/react.svg" alt="ReactJS" className='react'/>
          <img src="/icons/js.png" alt="JS" className="js" style={{borderRadius: "2vw"}}/>
        </div>
        <div>
          <img src="/icons/motion.png" alt="Motion" className="html" />
          <img src="/icons/vercel.png" alt="Vercel" className='vercel' style={{borderRadius: "2.5vw"}}/>
          <img src="/icons/lambda.svg" alt="lambda" className="lambda" />
          <img src="/icons/cloudfared.png" alt="cloudfared" className="cloudfared" />
        </div>
        <div>
          <img src="/icons/prisma.jpg" alt="Prisma" className="prisma" />
          <img src="/icons/android.webp" alt="Android" className='android'/>
          <img src="/icons/apple.png" alt="Apple" className="apple"/>
          <img src="/icons/tailwind.png" alt="tailwind" className="tailwind" />
        </div>

        </div>
        : <div style={{backgroundColor: "#090909"}}></div>
        }

        {AI ? 
        <div className='logos'>
        <div className='logoI'>
          <img src="/icons/pytorch.png" alt="Pytorch" className="pytorch" />
          <img src="/icons/tensorflow.png" alt="Tensorflow" className='tensorflow' style={{borderRadius: "2vw"}}/>
          <img src="/icons/huggingface.svg" alt="Huggingface" className='huggingface'/>
          <img src="/icons/openai.webp" alt="OpenAI" className="openai" style={{borderRadius: "2vw"}}/>
        </div>
        <div>
          <img src="/icons/fastapi.svg" alt="FastAPI" className="fastapi" />
          <img src="/icons/docker.png" alt="Docker" className="docker" />
          <img src="/icons/kubernetes.png" alt="Kubernetes" className='kubernetes' />
          <img src="/icons/dvc.png" alt="DVCForML" className="dvc" />
        </div>
        <div>
          <img src="/icons/onnx.webp" alt="ONNX" className="onnx" />
          <img src="/icons/roboflow.png" alt="Roboflow" className='roboflow'/>
          <img src="/icons/python.png" alt="Python" className="python"/>
          <img src="/icons/azureML.png" alt="AzureML" className="azure" />
        </div>

        </div>
        : <div style={{backgroundColor: "#090909"}}></div>
        }

        {hardware ? 
        <div className='logos'>
        <div className='logoI'>
          <img src="/icons/cplus.webp" alt="Rasberry" className='rasberry'/>
          <img src="/icons/python.png" alt="CUDA" className='cuda'/>
          <img src="/icons/java.webp" alt="RFID" className='rfid'/>
          <img src="/icons/ts.png" alt="Runpod" className="runpod" />
        </div>
        <div>
          <img src="/icons/js.png" alt="AWS" className="aws" />
          <img src="/icons/html.svg" alt="VM" className='vm' />
          <img src="/icons/css.webp" alt="PCB" className="pcb" />
          <img src="/icons/matlab.png" alt="Camera" className="camera" />
        </div>

        </div>
        : <div style={{backgroundColor: "#090909"}}></div>
        }
      </div>

      <div className="iconsStack">
      </div>
      
      
    
    </div>
  )
}

export default TechStack