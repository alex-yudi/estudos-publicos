import { useState } from 'react';
import './style.css';


import Hero from '../../components/Hero/Hero';
import RegistrationComplete from '../../components/RegistrationComplete/RegistrationComplete'


import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import closeEye from '../../assets/close-eye.svg';
import openEye from '../../assets/open-eye.svg';


const initialFormState = {
  nome: '',
  email: '',
  senha: ''
}

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [alertInputs, setAlertInputs] = useState('');
  const [formConcluded, setFormConcluded] = useState(false);

  const setInput = (newValue) => {
    setForm({
      ...form,
      ...newValue
    })
  }

  const handleForm = (event) => {
    event.preventDefault();

    setAlertInputs('');

    if (!form.nome.trim() ||
      !form.email.trim() ||
      !form.senha.trim()
    ) {
      return setAlertInputs('Preencha todos os campos!');
    }

    setFormConcluded(true);
  }

  const handleCancelForm = (event) => {
    setAlertInputs('');

    setForm(
      {
        nome: '',
        email: '',
        senha: ''
      }
    )
  }


  return (
    <div className='container'>

      {formConcluded ? <RegistrationComplete />
        :
        <form onSubmit={handleForm}>
          <h1>Cadastre-se</h1>

          <div>
            <Input
              name='nome'
              type='text'
              placeholder='Nome'
              value={form.nome}
              onChange={(event) => { setInput({ nome: event.target.value }) }}
            />

            <Input
              name='email'
              type='email'
              placeholder='E-mail'
              value={form.email}
              onChange={(event) => { setInput({ email: event.target.value }) }}
            />
            <div>
              <Input
                name='senha'
                type={showPassword ? 'text' : 'password'}
                placeholder='Senha'
                value={form.senha}
                onChange={(event) => { setInput({ senha: event.target.value }) }}
              />
              <img
                src={showPassword ? openEye : closeEye}
                alt="mostrar senha"
                className='show-password-img'
                onClick={() => { setShowPassword(!showPassword) }}
              />
              <span className='alert-fill-inputs'>
                {alertInputs}
              </span>
            </div>
          </div>

          <div>
            <Button
              className='blue'
            >
              Cadastrar
            </Button>
            <Button
              className='red'
              type='button'
              onClick={handleCancelForm}
            >
              Cancelar
            </Button>
          </div>

          <div>
            <a href="##">
              Já tem cadastro? Clique aqui!
            </a>
          </div>
        </form>}


      <Hero />

    </div>
  );
}

export default SignUp;
