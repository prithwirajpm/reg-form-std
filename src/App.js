import './App.css';
import { TextField,Stack,Button } from '@mui/material';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const firstName = document.getElementById("standard-basic1").value;
    const email = document.getElementById("standard-basic2").value;
    const password = document.getElementById("standard-basic3").value;
    const confirmPassword = document.getElementById("standard-basic4").value;
  
    // Check if passwords match
    if (password === confirmPassword) {
      // Passwords match, display details in an alert
      alert(`Name: ${firstName}\nEmail: ${email}\nPassword: ${password}`);
    } else {
      // Passwords don't match, display an error
      alert('Passwords do not match. Please try again.');
    }
  };
  return (
    <div className="App">
      <div className='row d-flex justify-content-center align-items-center vh-100 gradiant'>
        <div className='col-md-3 bg-secondary-subtle  shadow rounded p-4 text-format'>
          <h2 className='text-center mt-5 mb-5'>REGISTER</h2>
          <div>
          <form onSubmit={handleSubmit}>
      <div className='m-3'>
        <TextField
          className='w-100'
          id="standard-basic1"
          required
          label="First Name"
          variant="standard"
          inputProps={{ pattern: '^[a-zA-Z]+$', title: 'Only letters are allowed.' }}
        />
      </div>
      <div className='m-3'>
        <TextField
          className='w-100'
          id="standard-basic2"
          label="E-Mail"
          type="email"
          variant="standard"
          required
          inputProps={{ pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', title: 'Enter a valid email address.' }}
        />
      </div>
      <div className='m-3'>
        <TextField
          className='w-100'
          id="standard-basic3"
          label="Password"
          required
          variant="standard"
          type="password"
          inputProps={{
            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
            title: 'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).'

          }}
        />
      </div>
      <div className='m-3'>
        <TextField
          className='w-100'
          id="standard-basic4"
          label="Confirm Password"
          variant="standard"
          required
          type="password"
          inputProps={{
            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$',
            title: 'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one digit, and one special character (@$!%*?&).'

          }}
        />
      </div>
      <div>
        <Stack className='m-5'>
          <Button type='submit'  className='btn-primary rounded' variant="outlined">Sign Up</Button>
        </Stack>
      </div>
      <div className='text-center m-5'>
        <h6>Have an account? <span><a href='#' className='text-decoration-none'>Login Here</a></span></h6>
      </div>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
