import { useState } from 'react'
import './App.css'

function App() {
  return <>
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
    
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Przeprowadzka bez chaosu.</h1>
          <p class="hero-text">
            Zaplanuj przeprowadzkę, checklistę i budżet w jednym miejscu.
          </p>

          <div class="hero-buttons">
            <button class="btn btn-primary">Zaplanuj przeprowadzkę</button>
            <button class="btn btn-secondary">Zaloguj się</button>
          </div>
        </div>
      </section>

      <section class="features">
        <h1 class="section-title">Funkcje</h1>

        <div class="features-list">

          <div class="feature-card">
            <h3 class="feature-title">Checklista</h3>
            <p class="feature-text">Kontroluj wszystkie zadania</p>
          </div>

          <div class="feature-card">
            <h3 class="feature-title">Kartony</h3>
            <p class="feature-text">Oblicz potrzebną liczbę pudeł</p>
          </div>

          <div class="feature-card">
            <h3 class="feature-title">Budżet</h3>
            <p class="feature-text">Kontroluj wydatki</p>
          </div>

          <div class="feature-card">
            <h3 class="feature-title">Organizacja</h3>
            <p class="feature-text">Oznaczaj i porządkuj kartony</p>
          </div>

        </div>
      </section>

      <section class="how-it-works">
        <h1 class="section-title">Jak to działa</h1>

        <div class="steps">

          <div class="step">
            <h3 class="step-title">Podaj informacje</h3>
            <p class="step-text">
              Wprowadź szczegóły swojej przeprowadzki.
            </p>
          </div>

          <div class="step">
            <h3 class="step-title">Otrzymaj plan</h3>
            <p class="step-text">
              Dopasowany plan, checklistę i budżet.
            </p>
          </div>

          <div class="step">
            <h3 class="step-title">Oznaczaj zadania</h3>
            <p class="step-text">
              Realizuj kolejne kroki i ciesz się przeprowadzką.
            </p>
          </div>

        </div>
      </section>

      <section class="cta">
        <h1 class="cta-title">Gotowy na przeprowadzkę?</h1>

        <p class="cta-text">
          Zacznij planować bez chaosu.
        </p>

        <button class="btn btn-primary">
          Rozpocznij za darmo
        </button>
      </section>

    </main>
    <footer>
      <h3>MoveMate</h3>
      <a href="#" className="footer-nav-link-left">Funkcje</a>
      <a href="#" className="footer-nav-link-left">Jak to działa</a>
      <a href="#" className="footer-nav-link-left">FAQ</a>
      <a href="#" className="footer-nav-link-left">Kontakt</a>

      <a href="#" className="footer-nav-link-right">Regulamin</a>
      <a href="#" className="footer-nav-link-right">Polityka Prywatności</a>
    </footer>
  </>

}

export default App
