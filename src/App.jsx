import './App.css'
import { useState } from 'react'
import { requestTogroq } from './Util/groq'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"


function App() {
  const [data, setdata] = useState("");

  const [userInput, setUserInput] = useState("");

  const change = (e) => {
    setUserInput(e.target.value);
  }
  const Click = async () => {
    const groq_ai = await requestTogroq(userInput);
    setdata(groq_ai);
    console.log(userInput);
    console.log({ groq_ai });
  }
  
  return (

    <main>

      {/* home */}
      <div className="home-container">
        {/* header */}
        <div className="header">
          <div className="main-head">
            <b className='title'>Kalkulator</b>
            <p className='subtitle'>intergated <b>Ai</b></p>
          </div>
          <div className='nav-bar'>
            <ul>
              <li><a href="">Home</a></li>
            </ul>
            <ul>
              <li><a href="">Aivar_AI</a></li>
            </ul>
            <ul>
              <li><a href="">Info</a></li>
            </ul>
          </div>
        </div>
        <div className="head-content">
          <h1>Hii,There</h1>
          <p>Halo! Saya adalah Aivar, saya adalah sebuah assistant chat yang dibuat oleh Meta AI yang dapat berkomunikasi dengan manusia.
            Saya dapat berbicara tentang berbagai topik, dari pengembangan teknologi hingga budaya populer. Saya juga dapat membantu Anda berbagai tugas,
            seperti conversational dialogue dan pertanyaan-pertanyaan lainnya.
            Saya tidak memiliki self-awareness, namun saya dapat memahami dan menjawab pertanyaan Anda dengan baik.
            Saya juga dapat membantu Anda dengan tugas-tugas dan proyek-proyek yang Anda miliki.
            Terserah, bagaimana Anda Hehe..</p>
          <div className="arrow">
            <h3>
              <span>Let&apos;s </span>
              <span> scroll</span>
              <span> out</span>
              <span> across</span>
              <span> the</span>
              <span> website</span>
            </h3>
          </div>
        </div>
      </div>

      {/* kalkulator */}

      <div className="kalkulator">
        <div className="kalkulat-head">
          <h1>Kalkulator</h1>
        </div>
        <div className="kalkulat-body">
          <div className="display-out">
            <div className="main-output">
              <input type="text" id="main-display" value={12345} disabled></input>
            </div>
            <div className="sub-output">
              <input type="text" id="sub-display" value={11} disabled></input>
            </div>
          </div>
          <div className="button-input-kalkulator">
            <div className="button-input">
              <ul>
                <li>
                <button onClick="clearDisplay()">AC</button>
                <button onClick="addNum('7')">7</button>
                <button onClick="addNum('8')">8</button>
                <button onClick="addNum('9')">9</button>
                <button onClick="addOprator('*')">x</button>
                </li>
              </ul> 
              <ul>
                <li>
                  <button onClick="clearDisplay()">Del</button>
                  <button onClick="addNum('7')">4</button>
                  <button onClick="addNum('8')">5</button>
                  <button onClick="addNum('9')">6</button>
                  <button onClick="addOprator('*')">-</button>
                </li>
              </ul> 
              <ul>
                <li>
                  <button onClick="clearDisplay()">+/-</button>
                  <button onClick="addNum('7')">1</button>
                  <button onClick="addNum('8')">2</button>
                  <button onClick="addNum('9')">3</button>
                  <button onClick="addOprator('*')">+</button>
                </li>
              </ul> 
              <ul>
                <li>
                  <button onClick="clearDisplay()">/</button>
                  <button onClick="addNum('7')">%</button>
                  <button onClick="addNum('8')">0</button>
                  <button onClick="addNum('9')">.</button>
                  <button onClick="addOprator('*')">=</button>
                </li>
              </ul> 
              
            </div>
            
            
          </div>
        </div>
      </div>


      {/* Ai */}
      <div className='Ai' style={{ backgroundColor: 'black', color: 'white' }}>
        <h1>AiVar</h1>
        <form>
          <input type="text" id="userInput" value={userInput}
            onChange={change} placeholder='Ask me anything'/>
          <button type="button" onClick={Click} onDragEnter={Click} className='submit'>Submit</button>
        </form>
        <div>
          <SyntaxHighlighter language='swift' style={atomDark} wrapLongLines={true}>
            {data}
          </SyntaxHighlighter>
        </div>
        
        {/* info */}
        <div className="information-container">
          <div className="head-information">
            <h1>Information</h1>
          </div>
          <div className="main-information">
            <h4>Developer</h4>
            <p>Hai, perkenalkan nama saya Farid Iskandar. Saya seorang Software Engineer yang tinggal di Bogor, Jawa Barat. Berikut ini adalah sedikit tentang saya: <a href="">Link Cv</a></p>
            <h4>Deskripsi</h4>
            <p>Proyek ini bertujuan untuk mengembangkan sebuah aplikasi web kalkulator yang tidak hanya mampu melakukan operasi aritmatika dasar tetapi juga dilengkapi dengan fitur chat bot berbasis kecerdasan buatan (AI). Fitur chat bot ini akan membantu pengguna dengan memberikan solusi untuk masalah matematika yang lebih kompleks, menjawab pertanyaan terkait matematika, dan memberikan bantuan umum tentang penggunaan kalkulator.</p>
            <h4>Contack</h4>
            <p>Farid iskandar</p>
            <div className="icon">
              <i className="bi bi-github"><a href="#"></a></i>
              <i className="bi bi-linkedin"><a href="#"></a></i>
              <i className="bi bi-instagram"><a href="#"></a></i>
          </div>
          </div>
          <div className="footer">
            <p>&copy; 2024. Frdiskndr.</p>
          </div>
        </div>
        
      </div>
    </main>
  );
}

export default App
