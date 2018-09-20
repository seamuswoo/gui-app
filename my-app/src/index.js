import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo1 from './howdy.mp4';
import logo from './spek.jpg';

class SquareImage extends React.Component {

  render() {
    return (
      <div class ="squareImage" >
    
      </div>);
  }
}

class SquareSchool extends React.Component {
  render() {
    return <div className="squareSchool">
    <h1>SCHOOL </h1>
    <form> <textarea className = "textareaSchool" maxLength = "370">Enter text here.. </textarea> </form>
    </div>
  }
}

class SquareMenu extends React.Component {
  render() {
      return <div className="squareMenu">
      <h1>TODAY'S MENU</h1>
      </div>
  }
}

class SquareTop extends React.Component {

  render() {
      return <input type="text" className = "squareTop"  placeholder = "Text here"/>  
  }
}

class  SquareTime extends React.Component {

   checkTime(i){
    if (i >12) {i = (i-12)};  
    return i;
   }
   chickMins(i){
    if (i <10) {i = "0" + (i)};  
    return i;
   }

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
      var h = this.state.date.getHours();
      var m = this.state.date.getMinutes()

      h = this.checkTime(h);
      m = this.chickMins(m);

      return <div className="squareTime" id = "time">
      {h + ":" + m}
      </div>
  }
  
}

class SquareSchedule extends React.Component {
  render() {
      return <div className="squareSchedule">
      <h1>TODAYS SCHEDULE</h1>
       <form> <textarea className = "textareaSced"  > Enter text here..</textarea> </form> 
      </div>
  }
}

class SquareList extends React.Component {
  render() {
      return <div className="squareList">
      </div>
  }
}
  
class SquareDate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    var weekday = new Array(7);
    var month = new Array(12);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    var n = weekday[this.state.date.getDay()];
    var m =month[this.state.date.getMonth()];

      return <div className="squareDate">
      <h1>Today is.. <mark class = "blue">{n}</mark> </h1>
      <h1> <mark class = "blue"> { m + " " + this.state.date.getDate()}</mark> { ", "+ this.state.date.getFullYear() }</h1>
      </div>
  }
}

class SquareSpace extends React.Component {
  render() {
      return <div className="squareSpace">
      </div>
  }
}

class SpeakerImage extends React.Component{
  render(){
    return  <img src ={logo} class = "speaker" alt = "speaker"/>
  }
}

  // ========================================
  
  ReactDOM.render(
    <div>
      <video id="myVideo" autoplay="" loop="" muted="">
         <source  src={logo1} type="video/mp4"/>
      </video>
        <div class = "leftflex">
          <SquareSchedule />
          <div classname = "border1"/>
          <SquareDate />
          <SquareList />
        </div>
        <div class = "timeFlex">
          <SpeakerImage/>
          <SquareTime/>
          <SpeakerImage/>
        </div>
        <div class = "centerflex">
          <SquareSpace />
        </div>
        <div class = "rightflex">
          <SquareImage/>
          <SquareSchool />
          <SquareMenu />
        </div>
        <SquareTop/>
        </div>,
    document.getElementById('root')
  );



  
  