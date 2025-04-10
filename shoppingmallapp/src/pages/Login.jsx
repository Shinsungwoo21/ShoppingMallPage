// import React from 'react';
// import Form from 'react-bootstrap/Form';
// import { Container } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setAuthenticate }) => {

//   const navigate = useNavigate();

//   const loginUser = (e) => {
//     e.preventDefault();
//     setAuthenticate(true);
//     navigate("/");
//   };

//   return (
//     <Container>
//         <Form onSubmit={(e) => loginUser(e)}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//             <Form.Text className="text-muted">
//               We'll never share your email with anyone else.
//             </Form.Text>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             로그인
//           </Button>
//       </Form>
//     </Container>
//   )
// }

// export default Login;
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container className='d-flex justify-content-center'>
      <div
        style={{
          width: "500px",
          height: "300px",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.05)",
          backgroundColor: "#fff"
        }}
      >
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" style={{ marginTop: '15px'}}>
            로그인
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
