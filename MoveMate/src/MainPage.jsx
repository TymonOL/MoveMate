import { Link } from "react-router";
import "./App.css";
function MainPage() {
    return  ( <>

        <header className="app-header">

            <div className="header-left">
                <div className="logo-placeholder"></div>
                <h1>MoveMate</h1>
            </div>

            <nav className="nav-links">
                <a href="#" className="nav-link">Strona Główna</a>
                <a href="#" className="nav-link">Jak to działa</a>
            </nav>

            <div className="header-right">
                <a href="#" className="nav-link">Zaloguj się</a>
                <button className="btn-btn-primary">Rozpocznij</button>
            </div>

        </header>
        <main>

            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Przeprowadzka bez chaosu.</h1>
                    <p className="hero-text">
                        Zaplanuj przeprowadzkę, checklistę i budżet
                    </p>
                    <p>
                        w jednym miejscu.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-up-left-primary">Zaplanuj przeprowadzkę</button>
                        <button className="btn-up-right-secondary">Zaloguj się</button>
                    </div>
                </div>
            </section>

            <section className="features">
                <h1 className="section-title">Funkcje</h1>

                <div className="features-list">

                    <div className="feature-card">
                        <h3 className="feature-title">Checklista</h3>
                        <p className="feature-text">Kontroluj wszystkie zadania</p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">Kartony</h3>
                        <p className="feature-text">Oblicz potrzebną liczbę pudeł</p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">Budżet</h3>
                        <p className="feature-text">Kontroluj wydatki</p>
                    </div>

                    <div className="feature-card">
                        <h3 className="feature-title">Organizacja</h3>
                        <p className="feature-text">Oznaczaj i porządkuj kartony</p>
                    </div>

                </div>
            </section>

            <section className="how-it-works">
                <h1 className="section-title">Jak to działa</h1>

                <div className="steps">

                    <div className="step">
                        <h3 className="step-title">Podaj informacje</h3>
                        <p className="step-text">
                            Wprowadź szczegóły swojej przeprowadzki.
                        </p>
                    </div>

                    <div className="step">
                        <h3 className="step-title">Otrzymaj plan</h3>
                        <p className="step-text">
                            Dopasowany plan, checklistę i budżet.
                        </p>
                    </div>

                    <div className="step">
                        <h3 className="step-title">Oznaczaj zadania</h3>
                        <p className="step-text">
                            Realizuj kolejne kroki i ciesz się przeprowadzką.
                        </p>
                    </div>

                </div>
            </section>

            <section className="cta">
                <h1 className="cta-title">Gotowy na przeprowadzkę?</h1>

                <p className="cta-text">
                    "Zacznij planować bez chaosu."
                </p>

                <button className="btn-footer-primary">
                    Rozpocznij za darmo
                </button>
            </section>

        </main>
        <footer>
            <div className="footer-name">
                <h3>MoveMate</h3>
            </div>
            <div className="footer-left">
                <a href="#" className="footer-nav-link-left">Funkcje</a>
                <a href="#" className="footer-nav-link-left">Jak to działa</a>
                <a href="#" className="footer-nav-link-left">FAQ</a>
                <a href="#" className="footer-nav-link-left">Kontakt</a>
            </div>

            <div className="footer-right">
                <a href="#" className="footer-nav-link-right">Regulamin</a>
                <a href="#" className="footer-nav-link-right">Polityka Prywatności</a>
            </div>
        </footer>

    </>
    )
}

export default MainPage