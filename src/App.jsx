import './App.css'
import Calculator from './calculate'
import { useState } from 'react'
import { requestTogroq } from './Util/groq'
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import audio from './assets/Aivar.mp3'
import image from './image/aivar.jpg'

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
    setUserInput ('');
  }
  alert('Aivar: Mulai? ');


  return (

    <main>

      {/* home */}
      <div className="home-container">
        {/* header */}
        <div className="header">
          <div className="main-head">
            <b className='title'>Kalkulator</b>
            <p className='subtitle'>intergated <b>Ai</b></p>
            <div className="audio">
              <audio src={audio} autoPlay></audio>
            </div>
          </div>
          <div className='nav-bar'>
            <ul>
              <li><a href="">Service</a></li>
            </ul>
          </div>
        </div>
        <div className="head-content">
          <h1>Hii, Friend!</h1>
          <p>Saya adalah Aivar, saya adalah sebuah assistant chat yang dibuat oleh Meta AI yang dapat berkomunikasi dengan manusia.
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
        <Calculator/>
      </div>


      {/* Ai */}
      <div className='Ai' style={{ backgroundColor: 'black', color: 'white' }}>
        
        <img src={image} alt="image" />
        <h1>Ai <b>Var</b></h1>

        <form>
          <input type="text" id="userInput" value={userInput}
            onChange={change} placeholder='Ask me anything' />
          <button type="button" onClick={Click}  className='submit'>Submit</button>
        </form>
        <div>
          <h6 style={{ textAlign: 'start' }}>{userInput}</h6>
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
            <p>fariditb159@gmail.com</p>
            <div className="icon">
              <a href="https://github.com/frdiskandr"  target='blank'><i className="bi bi-github"></i></a>
              <a href="https://www.linkedin.com/in/faridiskandar/" target='blank'><i className="bi bi-linkedin"></i></a>
            <a href="https://www.instagram.com/qwfrdzy_/" target='blank'><i className="bi bi-instagram"></i></a>
            </div>
          </div>
          <div className="footer">
            <p>&copy; 2024. Frdiskndr.</p>
          </div>
        </div>

      </div>
      <audio src="./assets/sound.mp3"></audio>
    </main>
  );
}

export default App

