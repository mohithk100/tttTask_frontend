import React,{ Component } from 'react';
import '../styles/loader.css';
import '../styles/materialize.min.css'

export default class Loader extends Component {
  render(){
    return(
      <div className="loader">
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="circle"></div>
                  </div><div className="circle-clipper right">
                <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
