// faire un formulaire qui a un eprevent default nom prenom adresse email et il faut que l'input nom ait le state name et que firstname is validfirstname à false des le debut et a true quand il est passé dans le regex

import { useEffect, useState, useRef } from 'react';

const nameRegex = /^[a-zA-Z\\-\s]{2,23}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const FormWithValidation = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [isValidFirstName, setIsValidFirstName] = useState(false);
    const [isValidLastName, setIsValidLastName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    useEffect(() => {
        setIsValidFirstName(nameRegex.test(firstName));
    }, [firstName])

    useEffect(() => {
        setIsValidLastName(nameRegex.test(lastName));
    }, [lastName])

    useEffect(() => {
        setIsValidEmail(emailRegex.test(email));
    }, [email])

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <form className="col-10 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Prénom :</label>
                    <input
                        type="text"
                        ref={firstNameRef}
                        id="firstName"
                        className={firstName.length < 1 ? "form-control" : isValidFirstName ? "form-control is-valid" : "form-control is-invalid"}
                        name="firstName"
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName">Nom :</label>
                    <input
                        type="text"
                        ref={lastNameRef}
                        id="lastName"
                        className={lastName.length < 1 ? "form-control" : isValidLastName ? "form-control is-valid" : "form-control is-invalid"}
                        name="lastName"
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email :</label>
                    <input
                        ref={emailRef}
                        id="email"
                        className={email.length < 1 ? "form-control" : isValidEmail ? "form-control is-valid" : "form-control is-invalid"}
                        type="email"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <input type="submit" className='btn btn-primary' value="Envoyer" />
            </form>
        </>
    );
};

export default FormWithValidation;