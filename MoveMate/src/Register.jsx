import { useState } from 'react';
import './Regis.css'
import styles from "./Register.module.css";

function Register() {
    const [miganie, setMiganie] = useState(false);
    return <>
        <header>
            <h1>MoveMate</h1>
            <h1>Dobrze że jesteś!👏</h1>
            <p>Zaloguj się lub otwórz konto</p>
            <p>aby zaplanować swoją</p>
            <p>przeprowadzkę.</p>
        </header >

        <aside className={styles.background}>


            <form className={styles.register}>
                <h2>Witaj ponowanie 👏</h2>
                <p>Zaloguj się do swojego konta MoveMate</p>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Hasło:</label>
                <input type="password" id="password" name="password" required />

                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Zapamiętaj mnie</label>


                <button>Zaloguj się</button>

            </form>


            <div className={styles['sing-in-text']}>
                <p>------Nie masz konta?------</p>
                <a href='#'
                    onClick={() => setMiganie(true)}
                    style={{ cursor: 'pointer' }}
                >
                    Utwórz konto
                </a>
                <p>Nie pamiętasz hasła?</p>
            </div>
        </aside>


       <main className={styles.test}>
            <div className={`Create-Account ${miganie ? 'migajace' : ''}`}>
                <h2>Stwórz konto</h2>
                <p>Dołącz do MoveMate i zacznij planować swoją przeprowadzkę</p>
                <h4>Imię</h4>
                <label htmlFor="name">Wprowadź swoje imię:</label>
                <input type="name" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Hasło:</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirm-password">Powtórz hasło:</label>
                <input type="password" id="password" name="password" required />

                <input type="checkbox" id="accept" name="accept" required />
                <label htmlFor="accept">Akceptuję <a href="#">regulamin</a> </label>

                <button>Utwórz konto</button>
                <p>------Masz już konto?------</p>
                <a href="#">Zaloguj się</a>
            </div>
            <div className="Create-Account-Text">

            </div>
        </main>


    </>

}

export default Register
