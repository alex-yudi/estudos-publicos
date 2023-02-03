import './RegistrationComplete.css'

import womanSucess from '../../assets/woman-success.png'

function RegistrationComplete() {
    return (
        <div className='container-registration-complete'>
            <img
                src={womanSucess}
                alt="Cadastro realizado com sucesso!"
            />
            <h2>
                Cadastro efetuado com sucesso!
            </h2>
        </div>
    )
}

export default RegistrationComplete;