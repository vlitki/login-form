import React, {useState, useEffect } from "react"
import logo from './logo.svg';
import './App.css';


function App() {

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [location, setLocation] = useState('')
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')
  const [input, setInput ] = useState('')

  useEffect(() => {
    fetch("https://api.github.com/users/example")
    .then(res => res.json())
    .then(data => {
      setData(data);
    })

  }, []);

  const setData = ({avatar_url, name, login, location, bio}) => {
    setName(name)
    setUserName(login)
    setLocation(location)
    setAvatar(avatar_url)
    setBio(bio)

  }
  const handleSearch = (e) => {
    setInput(e.target.value)
  }


  return (
    <div>
      <div className='navbar'>Github Search</div>
      <div className="search">
        <form>
          <formwrap>
            <input placeholder="Github user" name="github-user" />
            <button content="Submit">Submit</button> 
            <img src={avatar} />
            <div>{bio} Bio</div> 
          </formwrap>
        </form>
      </div>
    </div>
  );
}

export default App;
