import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

  const {  onInputChange, username,email,password, onResetForm} = useForm({ //reutilizo el custom hook, desetrucuturo
    username: '', //initialForm
    email: '',
    password: ''
  })

//const {username, email, password} = formState;  //no es necesario esto ya uso EL  ...formState en el custom hook


  return (
    <>
      <h1>Formulario con custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fernando@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2 ">reset</button>





    </>
  )
}




