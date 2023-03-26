import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(0);

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setStep(0);
  }

  return (
    <>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" value={username} class="form-control" id="InputUsername" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div class="form-group">
        <label for="Password1">Password</label>
        <input type="password" value={password} class="form-control" id="InputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </div>
    </>
  );
}

export default App;
