import React from 'react'
import './projects.css'
import { useRecoilState } from 'recoil';
import { ai, fullStackAI, web } from './atoms';

function Projects() {

  const [AI, setAI] = useRecoilState(ai);
  const [WEB, setWEB] = useRecoilState(web);
  const [FS, setFS] = useRecoilState(fullStackAI);

  function changeAI() {
    setAI(true);
    setWEB(false);
    setFS(false);
  }

  function changeFS() {
    setAI(false);
    setWEB(false);
    setFS(true);
  }

  function changeWEB() {
    setAI(false);
    setWEB(true);
    setFS(false);
  }
  return (
    <div className='projects'>
        <div className="titleProj">
            <h1>Projects</h1>
            <div>
                <button onClick={changeWEB}>Web Development</button>
                <button onClick={changeAI}>Artificial Intelligence</button>
                <button onClick={changeFS}>Full Stack AI</button>
            </div>
        </div>
        <div className='InfoProj'>
                {AI ? <div>
                  <ul>
                    <li><h1>Vision Transformer for Products - Computer Vision</h1><p>Finetuned OpenAI Whisper to speak in Marwadi dialect.</p></li>
                    <li><h1>CNN for Musical Chord Progression - Computer Vision</h1><p>Made a Multimodal AI</p></li>
                    <li><h1>Yolo from Scratch w/o PyTorch - Computer Vision</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Object Detection using Yolov8 - Computer Vision</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Finetuned OpenAI Whisper - NLP</h1><p>Custom finetuned OpenAI Whisper with huggingface and inferenced.</p></li>
                  </ul>
                </div>: <div></div>}
                {WEB ? <div>
                  <ul>
                    <li><h1>Students </h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Project1</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Project1</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Project1</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                  </ul>
                </div>: <div></div>}
                {FS ? <div>
                  <ul>
                    <li><h1>Project1</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Project1</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Project1</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                    <li><h1>Project1</h1><p>Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World</p></li>
                  </ul>
                </div>: <div></div>}
        </div>
    </div>
  )
}

export default Projects;