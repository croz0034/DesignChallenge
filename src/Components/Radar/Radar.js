import React from 'react';

class Radar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        Centerpoint : false,
        Ready: false
      }
      this.ElementSize = React.createRef()
    }

    componentDidMount(){
      if(this.ElementSize){
        let State = this.state;
        State.Centerpoint = this.ElementSize.current.clientWidth / 2;
        State.Ready = true
        this.setState(State)
      }
    }

RiseRun(Info){
  let val = []
  let points = 360 / Info.length;
  Info.forEach((element, i )=> {
    element = element * this.state.Centerpoint/124
    const Base = {x: this.state.Centerpoint, y: this.state.Centerpoint}
    i++;
    let degrees = (i * points);
    let results = {RisePositive: true, RunPositive: true, Rise: 0, Run: 0, deg: degrees, value: element, turn: false}
    if(degrees > 180){ 
      results.RunPositive = false;
      results.RisePositive = false;
      degrees -= 180;
    };
    if(degrees > 90){
      degrees -= 90;
      results.turn = true
      results.RisePositive = !results.RisePositive;
    }
    results.Rise = Math.sin(degrees  * Math.PI / 180) * element;
    results.Run = Math.cos(degrees * Math.PI / 180) * element;
    if(!results.turn){
      let old = JSON.parse(JSON.stringify(results))
      results.Rise = old.Run;
      results.Run = old.Rise;
    }
    if(results.RisePositive){
      results.Rise = Base.y - results.Rise
    } else {
      results.Rise = Base.y + results.Rise
    }
    if(results.RunPositive){
      results.Run = Base.x + results.Run
    } else {
      results.Run = Base.x - results.Run
    }
    val.push(`${results.Run} ${results.Rise}`)

  });
return val

}
GuidePosts(points){
  let val = [`${this.state.Centerpoint} ${this.state.Centerpoint}`]
  let deg = 360 / points;
  for(let x = 0; x < points; x ++  ) {
    const Base = {x: this.state.Centerpoint, y: this.state.Centerpoint}
    let degrees = (x * deg);
    let results = {RisePositive: true, RunPositive: true, Rise: 0, Run: 0, deg: degrees, value: 100, turn: false}
    if(degrees > 180){ 
      results.RunPositive = false;
      results.RisePositive = false;
      degrees -= 180;
    };
    if(degrees > 90){
      degrees -= 90;
      results.turn = true
      results.RisePositive = !results.RisePositive;
    }
    results.Rise = Math.sin(degrees  * Math.PI / 180) * (this.state.Centerpoint/124) * 100;
    results.Run = Math.cos(degrees * Math.PI / 180) * (this.state.Centerpoint/124) * 100;
    if(!results.turn){
      let old = JSON.parse(JSON.stringify(results))
      results.Rise = old.Run;
      results.Run = old.Rise;
    }
    if(results.RisePositive){
      results.Rise = Base.y - results.Rise
    } else {
      results.Rise = Base.y + results.Rise
    }
    if(results.RunPositive){
      results.Run = Base.x + results.Run
    } else {
      results.Run = Base.x - results.Run
    }
    val.push(`${results.Run} ${results.Rise}`)
    val.push(`${this.state.Centerpoint} ${this.state.Centerpoint}`)

  };
return val

}

  render(){
if(this.state.Ready){
  return (
    <svg ref={this.ElementSize} style={{width: (this.state.Centerpoint * 2), height:  (this.state.Centerpoint * 2)}}>
  <circle cx={this.state.Centerpoint} cy={this.state.Centerpoint} r={100 * this.state.Centerpoint/124} stroke="black" strokeWidth="2" fill="grey" />
  <polyline points={this.GuidePosts(this.props.Info.categories[0].Data.length)}
  style={{stroke:'black','strokeWidth':1}} />



  {
    this.props.Info.categories && this.props.Info.categories.map((data)=>(
<polygon key={data.Name} points={this.RiseRun(data.Data)}
  style={{fill:`${data.Colour}CC`,stroke:`${data.Colour}`,'strokeWidth':1}} />
    ))
  }
  

</svg>
  );} else {
    return (
      <svg ref={this.ElementSize} style={{width: "100%", height: "100%"}}></svg>
    )
  }
}

}


export default Radar;
