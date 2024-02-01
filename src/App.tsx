import LogIn from '../src/assets/log-in.svg';
import Mail from '../src/assets/mail.svg';
import Lock from '../src/assets/lock.svg';
import Eye from '../src/assets/eye.svg';
import sideImage from '../src/assets/side-image.jpg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
  email: string;
  password: string;
}

const App = () => {
  const [password, setPassword] = useState<boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  function togglePassword() {
    setPassword((prevState) => !prevState);
  }

  const backgroundForm = {
    backgroundColor: '#24221F',
  };

  return (
    <div className="flex justify-between items-center h-screen">
      <div className="flex justify-center items-center flex-1">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          style={backgroundForm}
          className="p-20 flex flex-col gap-2 rounded"
        >
          <header className="mb-5">
            <div className="flex items-center gap-2">
              <img src={LogIn} alt="" />
              <h2 className="font-medium text-white text-2xl">
                Faça seu login
              </h2>
            </div>
            <p className="text-slate-400 mt-3 font-medium text-base">
              Entre com suas informações de cadastro.
            </p>
          </header>

          <div className="relative flex flex-col gap-2">
            <label className="block text-slate-400" htmlFor="email">
              Email
            </label>
            <input
              {...register('email', { required: true })}
              className="p-2 w-full text-white px-10 bg-transparent outline-yellow-400 border"
              type="text"
              placeholder="Digite seu email"
            />
            {errors.email && (
              <small className="text-red-400 font-medium">
                Por favor, insira o email
              </small>
            )}
            <img className="absolute left-3 top-11" src={Mail} alt="" />
          </div>

          <div className="relative flex flex-col gap-2">
            <label className="block text-slate-400" htmlFor="email">
              Senha
            </label>
            <input
              {...register('password', { required: true })}
              className="p-2 w-full text-white px-10 bg-transparent outline-yellow-400 border"
              type={password ? 'text' : 'password'}
              placeholder="Digite seu email"
            />
            {errors.password && (
              <small className="text-red-400 font-medium">
                Por favor, insira a senha
              </small>
            )}

            <img
              className="absolute left-3 top-11"
              src={Lock}
              alt="icone de cadeado"
            />
            <img
              onClick={togglePassword}
              className="absolute right-3 cursor-pointer top-11"
              src={Eye}
              alt="Olho para ver a senha"
            />
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1">
              <input id="remind" type="checkbox" className="h-4 w-4" />
              <label className="text-base text-slate-300" htmlFor="remind">
                Lembre-me
              </label>
            </div>

            <a className="text-yellow-300 text-sm font-medium" href="#">
              Esqueci minha senha
            </a>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 p-3 hover:bg-opacity-70 mt-3 transition-all text-black rounded"
          >
            Entrar
          </button>
          <a className="text-center text-yellow-400" href="#">
            Não tem conta? <strong>Registre-se</strong>
          </a>
        </form>
      </div>

      <img className='hidden md:block' src={sideImage} alt="" />
    </div>
  );
};

export default App;
