import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import schiuImg from './img/bla.jpg'

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'schiufreitas'}
          fotoUsuario={schiuImg}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />
    
       <Post
          nomeUsuario={'mariana'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=4'}
      />

        <Post
          nomeUsuario={'max'}
          fotoUsuario={'https://picsum.photos/50/50?a=5'}
          fotoPost={'https://picsum.photos/200/150?a=6'}
      />

        <Post
          nomeUsuario={'márcio'}
          fotoUsuario={'https://picsum.photos/50/50?a=7'}
          fotoPost={'https://picsum.photos/200/150?a=8'}
      />

      </div>
    );
  }
}

export default App;

