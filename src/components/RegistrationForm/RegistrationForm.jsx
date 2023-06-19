import { useEffect, useState } from 'react';

export const Registration = () => {
  const [email, setEmail] = useState(() => {
    return JSON.parse(window.localStorage.getItem('email')) ?? '';
  });

  const [password, setPassword] = useState(() => {
    return JSON.parse(window.localStorage.getItem('password')) ?? '';
  });

  useEffect(() => {
    window.localStorage.setItem('email', JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    window.localStorage.setItem('password', JSON.stringify(password));
  }, [password]);

  const handleChange = event => {
    const { value, name } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <form
    // onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          onChange={handleChange}
          value={email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleChange}
          value={password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

// export class Registration extends Component {
//   state = {
//     email: '',
//     password: '',
//     // isChecked: false,
//     // gender: 'male',
//   };

//   handleChange = ({ target }) => {
//     this.setState({
//       [target.name]: target.value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.createUser({
//       email: this.state.email,
//       password: this.state.password,
//     });
//     this.setState({
//       email: '',
//       password: '',
//     });
//     this.props.closeModal();
//   };

//   // handleChecked = e => {
//   //   this.setState({
//   //     isChecked: e.target.checked,
//   //   });
//   // };

//   // handelRadio = e => {

//   //   this.setState({ gender: e.target.value });
//   // };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input
//             name="email"
//             type="email"
//             className="form-control"
//             id="exampleInputEmail1"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//           <div id="emailHelp" className="form-text">
//             We'll never share your email with anyone else.
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             name="password"
//             type="password"
//             className="form-control"
//             id="exampleInputPassword1"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </div>
//         {/* <div className="mb-3 form-check">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="exampleCheck1"
//             checked={this.state.isChecked}
//             onChange={this.handleChecked}
//           />
//           <label className="form-check-label">I agree</label>
//         </div>

//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="radio"
//             value="male"
//             id="flexCheckChecked1"
//             checked={this.state.gender === 'male'}
//             onChange={this.handelRadio}
//           />
//           <label className="form-check-label">Male</label>
//         </div>
//         <div className="form-check">
//           <input
//             className="form-check-input"
//             type="radio"
//             value="female"
//             id="flexCheckChecked"
//             checked={this.state.gender === 'female'}
//             onChange={this.handelRadio}
//           />
//           <label className="form-check-label">Female</label>
//         </div> */}
//         <button
//           type="submit"
//           // disabled={!this.state.isChecked}
//           className="btn btn-primary"
//         >
//           Submit
//         </button>
//       </form>
//     );
//   }
// }
