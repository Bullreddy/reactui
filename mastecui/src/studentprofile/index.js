import React        from 'react';
import "./style.css";

// example of the objects that will be passed by props
var data =     {
      leftValue:"10",
      rightValue:"2018",
      rightMiddleValue:"Hispanic",
      rightBottomValue:"English Learner,Low Income",
      footerValue:"8",
      rightTopValue:"2017"
    }
var config = {
  headerLabel:"At Our District",
  leftLabel:"Current Grade",
  rightLabel:"Enroll Since",
  footerLabel:"Years",
  rightTopLabel:"cohort",
  rightMiddleLabel:"Ethinity",
  rightBottomLabel:"subGroup",
  bgcolor: "lightgray",
  width:300,
  height: 100
}
// The component is being rendered inside a wrapper component, if you are
// writing the component without brintell framework wrapper, you will have
/// to add styling to the _baseClass container

class StudentCard extends React.Component {

    /**
     * @type {SvgCardSchema}
     */
    props;

    _baseClass = "svg-test-bar-component";

    constructor(props) {
        super(props);

        this.state = {
            data            : data,
            config          : config,
            max             : 0
        }
    }

    componentWillMount(){
        this.setMax()
		console.log(this.state.data);
    }

    setMax(){
        this.setState({max: this.state.data.max || this.state.config.max || 100})
    }

    componentDidMount(){
        if(this.container){
            this.setState({width: this.container.offsetWidth, height: this.container.offsetHeight})
        }
    }





    renderCard() {
      const headerLabel = this.state.config.headerLabel;
      const footerLabel = this.state.config.footerLabel;
      const leftLabel = this.state.config.leftLabel;
      const rightLabel = this.state.config.rightLabel;
      const rightTopLabel = this.state.config.rightTopLabel;
      const rightMiddleLabel = this.state.config.rightMiddleLabel;
      const rightBottomLabel = this.state.config.rightBottomLabel;
      const bgcolor = this.state.config.bgcolor;
      const width = (this.state.config.width);
      const height = (this.state.config.height);

        return (
              <div className="container" style={{backgroundColor:bgcolor,width:width,height:height}}>
                <div className="left">
                  <div>
            				<div className="tile_item" style={{width:width/2}}>
              				<div className="tile_item-header">{headerLabel}</div>
              				<div className="icondiv"><i width="100%" align="center" className="icon"></i></div>
            				</div>
          				</div>

                  <div>
            				<div className="tile_item" style={{width:width/2}}>
                    	<div className="tile_item-child" style={{width:width/4}}>
              				<div className="tile_item-header">{leftLabel}</div>
              				<div className="tile_item-1">{this.state.data.leftValue}</div>
                      </div>
                      <div className="tile_item-child" style={{width:width/4}}>
              				<div className="tile_item-header">{rightLabel}</div>
              				<div className="tile_item-1">{this.state.data.rightValue}</div>
                      </div>
            				</div>
          				</div>

                  <div data-title-footer className="tile-footer">

            				<div className="tile_item" style={{width:width/2}}>
              				<div className="tile_item-header">{footerLabel}</div>
              				<div className="tile_item-1">{this.state.data.footerValue}</div>
            				</div>
          				</div>
                </div>
                <div className="right">
                  <div>
                    <div className="tile_item-right" style={{width:width/2}}>
                      <div className="tile_item-header">{rightTopLabel}</div>
                      <div className="tile_item-1">{this.state.data.rightTopValue}</div>
                    </div>
                  </div>

                  <div data-tile-content>
                    <div className="tile_item-right" style={{width:width/2}}>
                      <div className="tile_item-header">{rightMiddleLabel}</div>
                      <div className="tile_item-2">{this.state.data.rightMiddleValue}</div>
                    </div>
                  </div>

                  <div data-title-footer className="tile-footer">
                    <div className="tile_item-right" style={{width:width/2}}>
                      <div className="tile_item-header">{rightBottomLabel}</div>
                      <div className="tile_item-3">{this.state.data.rightBottomValue}</div>
                    </div>
                  </div>
                </div>
              </div>
        );
    }

    render() {
        return (
            <section
                ref         = {(input) => this.container = input}
                className   = { this._baseClass }>
                {this.renderCard()}
            </section>
        );
    }
  }

export default StudentCard;
