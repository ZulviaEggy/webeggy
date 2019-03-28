import React, { Component } from 'react';
import logo from './asia.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      active : 'Home',
	  
    };
  }

  clicked (menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name :menu.name,
      color: menu.color,
      img:menu.img,
    });
  }

  /*menusaya(){
    var gambar;
    if(this.state.active.toLowerCase()==='Merah'){
      gambar="apel";
    } else if (this.state.active.toLowerCase()==='Kuning'){
      gambar="jeruk";
    } else if (this.state.active.toLowerCase()==='Hijau'){
      gambar="alpukat";
    } else if (this.state.active.toLowerCase()==='Biru'){
      gambar="anggur";
    }
      return <img src={gambar+".jpg"} width="200"></img>
    } */
  

  render() {
    return (
      <div className="App">
      {/*map akan loop sebanyak menu yang di definisikan */}
      {/*kemudian mengembalikan elemen <a/> */}
      <nav className="nav">{this.props.items.map((menu, index) => {
          var style = 'menu';

          if (this.state.color === menu.color) {
            style = `${style} is-active`;
          } 

        return <a 
			        className={style+" "+menu.color}
              //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked' 
              onClick={this.clicked.bind(this, menu)}
              key={index}
              >
              {menu.name}
            </a>;
        }) }
        </nav>

        <div className="info">
         ini adalah <span className={"selected "+this.state.color}> 
          {this.state.name}
          </span> 
          <br></br>
          <br></br>
      <img src={this.state.img} width="250"></img>
     
      {/*this.menusaya()*/}
        </div>
    </div>

        
    );
  }   
} 

export default App;
