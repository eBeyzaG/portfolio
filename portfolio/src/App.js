import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const works = [
    {
      title: "numord",
      tags: ["iOS", "Swift", "Turkish"],
      link: "https://apps.apple.com/tr/app/numord/id1644536437?l=tr",
      desc: "A word game where you guess the word with the given alphabetic order. This is a project I made to get familiar with Swift and App Store development environment.",
      github: null
    },
    {
      title: "e-Wall",
      tags: ["React", "Redux Toolkit", "Bootstrap", "English"],
      link: "https://ebeyzag.github.io/e-Wall/#/setTimer",
      desc: "A timer app for users to set to do lists and time to complete them. At the end of the time, the app prints the results of the session showing which tasks are done and which are not. This is a project I made to get familiar with Redux Toolkit.",
      github: "https://github.com/eBeyzaG/e-Wall"
    },
    {
      title: "focus",
      tags: ["Python", "PyQt5", "Node.js", "JavaScript", "Firebase", "English"],
      link: "//youtu.be/td8XkzCMGBM",
      desc: "As a team with my 2 friends, we made a system for teachers to keep track of students in online education. focus, collects students information from video via artificial intelligence algorithms like face detection and sends them to teachers real time. It has two frontends: one in JavaScript for teachers and one for students in Pythons. Server operations are done in Node.js and Firebase. This project won  us a competition.",
      github: null
    },
    {
      title: "Trigger Tracker",
      tags: ["JavaScript", "Firebase", "English"],
      link: "https://ebeyzag.github.io/BLM19305E/Project/TriggerTracker.html",
      desc: "This is a university project I made with Vanilla JS and Firebase FireStore. Trigger Tracker, tracks chronic ilness's most probable causes according to user input. It calculates most probable cause with correlation coefficient. To try the app you can use the sample account: Email: trigtra@outlook.com Password: passw123",
      github: null
    },
    {
      title: "Pythor",
      tags: ["Python", "PyGame", "English"],
      link: "",
      desc: "This school project was my first full Python project. It is a spaceship game where at the end of the each level you have to answer Python questions correctly to proceed to next level. ",
      github: "https://github.com/eBeyzaG/Pythor-Game/blob/master/main.py"
    },



  ]

  const [showWorks, setShowWorks] = useState(works)

  const [search, setSearch] = useState("")

  const onChange = (e) => {

    setSearch(e.target.value)
   
    const res = works.filter(work => work.tags.map(tag => tag.toLowerCase()).includes(e.target.value.toLowerCase()))

    if (res.length == 0) {
      setShowWorks(works)
    }else{
      setShowWorks(res)
    }
    

  }


  return (
    <div className='text-sky-900 bg-slate-800 h-fit '>
      <br></br>
      <br></br>
      <div className='w-8/12 m-auto mb-10 text-lg  text-sky-100  rounded-lg'>

        <div className='flex flex-cols-2'>
          <div className='text-9xl'>
            <p>Beyza Gürer</p>
          </div>
          <div className='flex items-end'>
            <a className='text-sky-100 text-md mx-2 underline' href='https://github.com/eBeyzaG'>GitHub</a>
            <a className='text-sky-100 text-md underline' href='mailto:beyzagurer@hotmail.com'> E-Mail</a>
          </div>

        </div>

        <br></br>

        <p>I am currently pursuing my Master's Degree in Computer Engineering.</p>
        <p>I mainly study on deep learning for my studies in university and I work on projects with React & Django in my free time.</p>
        <p>Here I display some of my projects, more projects are in my Github.</p>

      </div>


      <div className='w-8/12  mx-auto text-lg  rounded-lg'>

        <h3 className='text-6xl text-sky-100'>Projects</h3>

        <br></br>
        <div>
          <input onChange={e => onChange(e)} value={search} className='rounded-lg p-0.5' placeholder='Search keyword...' />
        </div>


        <div className='flex flex-wrap flex-col-2 justify-between'>
          {showWorks.map((work) => (
            <div key={work.title} className='my-5 p-2 mr-4  bg-slate-50 text-slate-800 w-5/12 h-96 rounded-md '>

              <h1 className='text-center bg-slate-200 h-10 rounded-t-none mt-0 pt-0 rounded-lg pl-1 text-3xl '>{work.title}</h1>



              <div className='m-3 flex justify-evenly'>
                {work.link ?
                  <a className='text-slate-600 underline  object-scale-down' href={work.link}>
                    Project
                  </a>
                  : ""
                }

                {work.github ?
                  <a className='text-slate-600 underline' href={work.github}> Github</a>
                  : ""
                }
              </div>

              <div className='overflow-auto  h-36'>
                <p >{work.desc}</p>
              </div>


              <div className='flex flex-wrap align-bottom'>
                {work.tags.map(tag =>
                  <div key={tag} className='w-fit rounded-md border-2 ml-0 m-1 p-1'> #{tag} </div>
                )}
              </div>
            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default App;
