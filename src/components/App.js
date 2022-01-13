import '../styles/App.scss';
import logoHeader from '../images/logo-awesome-profile-cards.svg';
import logoFooter from '../images/logo-adalab.png';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    palette: "1",
  });

  const [collapsed, setCollapsed] = useState('')

  const handleCollapsed = () => {
    if (collapsed === '') {
      setCollapsed("collapsed")
    } else {
      setCollapsed("")
    }
    
  }

  const handleInput = (event) => {
    const inputChanged = event.currentTarget.name;
    const valueChanged = event.currentTarget.value;

    setData({
      ...data,
      [inputChanged]: valueChanged,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <header className="header extraClass">
        <a href="./index.html">
          <img
            className="header__logo"
            src={logoHeader}
            alt="logo-awesome-cards"
          />
        </a>
      </header>

      <main className="preview-main">
        <section className="preview">
          <button className="preview__button" type="reset">
            <span>
              <i className="far fa-trash-alt"></i>
            </span>
            Reset
          </button>
          <div className="preview__background">
            <div className="preview__card">
              <div className="preview__card--name">
                <div className="line-palette js__line-palette"></div>
                <h3 className="preview__card--name name">
                  {data.name || 'Vilma picatecla'}
                </h3>
                <h4 className=" preview__card--name profession">
                  {data.job || 'Front end'}
                </h4>
              </div>
              <div className="preview__card--img js__profile-image"></div>
              <div className="preview__card--icons">
                <div className="card-icons js-iconBorder">
                  <a className="linkPhone" href={`tel:${data.phone}` || ''}>
                    <i className="fas fa-mobile-alt js-icon"></i>
                  </a>
                </div>
                <div className="card-icons js-iconBorder">
                  <a
                    href={
                      `mailto:${data.email}` || 'mailto:someone@example.com'
                    }
                    className="js-email"
                  >
                    <i className="far fa-envelope js-icon"></i>
                  </a>
                </div>
                <div className="card-icons js-iconBorder">
                  <a
                    className="linkedin-js"
                    href={
                      `https://www.linkedin.com/in/${data.linkedin}` ||
                      'https://www.linkedin.com/'
                    }
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in js-icon"></i>
                  </a>
                </div>
                <div className="card-icons js-iconBorder">
                  <a
                    href=""
                    className="github-js"
                    href={
                      `https://www.github.com/${data.github}` ||
                      'https://www.github.com/'
                    }
                    target="_blank"
                  >
                    <i className="fab fa-github-alt js-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <form className="form" action="" onSubmit={handleSubmit}>
          <fieldset className={`form__design form-js ${'' || collapsed}`}>
            <div className="form__design--sect form-title-js" onClick={handleCollapsed}>
              <i className="far fa-object-ungroup"></i>
              <h2 className="form__design--title">Diseña</h2>
              <i className="fas fa-chevron-up js-arrow"></i>
            </div>
            <div className="form__design--container form-container-js">
              <label htmlFor="colores" className="form__design--subtitle">
                Colores
              </label>
              <ul className="form__design--list">
                <li className="list__palette first__color">
                  <input
                    type="radio"
                    id="palette"
                    className="list__radio js-input"
                    name="palette"
                    data-id="1"
                    value="1"
                    onChange={handleInput}
                    checked={data.palette === "1"}
                  />
                  <div className="colorOne"></div>
                  <div className="colorTwo"></div>
                  <div className="colorThree"></div>
                </li>

                <li className="list__palette second__color">
                  <input
                    type="radio"
                    id="palette"
                    className="list__radio js-input"
                    name="palette"
                    data-id="2"
                    value="2"
                    onChange={handleInput}
                    checked={data.palette === "2"}
                  />
                  <div className="colorOne"></div>
                  <div className="colorTwo"></div>
                  <div className="colorThree"></div>
                </li>

                <li className="list__palette third__color">
                  <input
                    type="radio"
                    id="palette"
                    className="list__radio js-input"
                    name="palette"
                    data-id="3"
                    value="3"
                    onChange={handleInput}
                    checked={data.palette === "3"}
                  />
                  <div className="colorOne"></div>
                  <div className="colorTwo"></div>
                  <div className="colorThree"></div>
                </li>
              </ul>
            </div>
          </fieldset>

          <fieldset className={`form__fill form-js ${'' || collapsed}`}>
            <div className="form__fill--sect form-title2-js " onClick={handleCollapsed}>
              <i className="far fa-keyboard"></i>
              <h2 className="form__fill--title">Rellena</h2>
              <i className="fas fa-chevron-up js-arrow js-arrow-down"></i>
            </div>
            <div className="form__fill--div form-container-js">
              <label className="label" htmlFor="name">
                Nombre completo
              </label>
              <input
                minLength="2"
                maxLength="20"
                className="contact__form--name js-input"
                placeholder="Ej: Sally Jill"
                id="name"
                type="text"
                name="name"
                required
                onChange={handleInput}
                value={data.name}
              />

              <label className="label" htmlFor="job">
                Puesto
              </label>
              <input
                className="contact__form--job js-input"
                minLength="2"
                maxLength="20"
                placeholder="Ej: Front-end unicorn"
                id="job"
                type="text"
                name="job"
                required
                onChange={handleInput}
                value={data.job}
              />

              <label className="label form__fill--prftext">
                Imagen de perfil
              </label>

              <div className="form__image">
                <label
                  htmlFor="photo"
                  className="form__btnimg js__profile-trigger"
                >
                  Añadir imagen
                </label>
                <input
                  type="file"
                  className="js__profile-upload-btn hidden js-input"
                  name="photo"
                  id="photo"
                  required
                />
                <div className="form__square js__profile-preview"></div>
              </div>

              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="contact__form--mail js-input"
                placeholder="Ej: nombre.apellidos@mail.com"
                id="email"
                type="mail"
                name="email"
                title="Por favor, introduzca un email válido"
                pattern="^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[.][a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
                required
                onChange={handleInput}
                value={data.email}
              />
              <label className="label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="contact__form--phone js-input"
                placeholder="Ej: 123456789"
                id="phone"
                type="tel"
                name="phone"
                onChange={handleInput}
                value={data.phone}
              />
              <label className="label" htmlFor="linkedin">
                Linkedin
              </label>
              <input
                className="contact__form--linkedin js-input"
                placeholder="Ej: ada.lovelace"
                id="linkedin"
                type="linkedin"
                name="linkedin"
                size="30"
                title="Por favor, introduzca su cuenta de linkedin"
                required
                onChange={handleInput}
                value={data.linkedin}
              />
              <label className="label" htmlFor="github">
                Github
              </label>
              <input
                className="contact__form--github js-input github-js"
                placeholder="Ej: Ada-Lovelace"
                id="github"
                type="github"
                name="github"
                title="Por favor, introduzca su cuenta de Github"
                required
                onChange={handleInput}
                value={data.github}
              />
            </div>
          </fieldset>
          <fieldset className={`form__share form-js ${'collapsed' || collapsed}`}>
            <div className="form__share--sect form-title3-js " onClick={handleCollapsed}>
              <i className="fa fa-share-alt"></i>
              <h2 className="form__share--title">Comparte</h2>
              <i className="fas fa-chevron-up js-arrow js-arrow-down"></i>
            </div>
            <div className="form__share--button form-container-js">
              <button
                type="submit"
                href="#"
                id="button-card"
                className="unabled share-button"
                disabled
              >
                <i className="far fa-address-card"></i>
                <span>Crear tarjeta</span>
              </button>
            </div>
            <div className="form__share--created hidden" id="share-card">
              <h4>La tarjeta ha sido creada:</h4>
              <a href="#" className="card-link" target="_blank"></a>
              <a href="#" className="twitter" target="_blank">
                <i className="fab fa-twitter"></i>
                Compartir en twitter
              </a>
            </div>
          </fieldset>
        </form>
      </main>
      <section className="footer">
        <small className="footer__small">Awesome profile-cards @2021</small>
        <div className="footer__div">
          <a href="https://adalab.es" target="_blank" alt="logoLink">
            {' '}
            <img className="footer__div--img" src={logoFooter} alt="logo" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
