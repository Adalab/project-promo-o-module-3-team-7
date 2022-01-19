import '../styles/App.scss';

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Preview from './Preview';

function App() {
  const [data, setData] = useState({
    name: '',
    job: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
    palette: '1',
  });

  //BUTON RESET
  const resetBtn = () => {
    setData({
      name: '',
      job: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      palette: '1',
    });
  };



  //PALETAS

/*   const [firstPalette, setFirstPalette] = useState('');

  const handleFirstPalette = (event) => {
    //event.target.value;
    if (event.currentTarget.value === '1') {
      setFirstPalette = 'preview__card--name';
    }
  };

  const [secondPalette, setSecondPalette] = useState('');

  const handleSecondPalette = (event) => {
    //event.target.value;
    if (event.currentTarget === '2') {
      setSecondPalette = 'preview__card--name .color2';
    }
  }; */

  const handleInput = (event) => {
    const inputChanged = event.currentTarget.name;
    const valueChanged = event.currentTarget.value;

    setData({
      ...data,
      [inputChanged]: valueChanged,
    });
  };


  return (
    <div>
      <Header />
      <main className="preview-main">
        <Preview data={data} resetBtn={resetBtn}/>
        <Form data={data} handleInput={handleInput}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
