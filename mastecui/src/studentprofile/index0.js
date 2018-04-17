import React        from 'react';
import "./style.css";

// example of the objects that will be passed by props
var data = [
    {
        value: 10,
        label: "SVG TEST"
    }
]
var config = {
          "bgColor":"green",
          "color": "red"
      }
// The component is being rendered inside a wrapper component, if you are
// writing the component without brintell framework wrapper, you will have
/// to add styling to the _baseClass container

class SvgCard extends React.Component {

    /**
     * @type {SvgCardSchema}
     */
    props;

    _baseClass = "svg-test-bar-component";

    constructor(props) {
        super(props);

        this.state = {
            data            : {
				         icon:"fa-user",
							   iconLabel:"At Our District",
							   gradeLabel:"Current Grade",
							   enrollLabel:"Enroll Since",
							   gradeValue:"10",
							   enrollValue:"8",
							   ethLabel:"Ethinity",
							   ethValue:"Hispanic",
							   subGroupLabel:"subGroup",
							   subGroupValue:"English learner,low income",
							   totyearLabel:"Years",
							   totyearValue:"8",
							   yearLabel:"cohort",
							   yearValue:"2017",

			                   },
            config          : {

				"bgColor":"grey",
				"color": "black"
								},
            max             : 0,
            width           : 100,
            height          : 100
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





    render() {
        return (
      <div className="tilepanel">
        <div>
  				<div className="tile_item">
    				<div className="tile_item-header">{this.state.data.iconLabel}</div>
    				<div><i className="fa this.state.data.icon}"></i></div>
  				</div>
  		    <div className="tile_item">
    				<div className="tile_item-header">{this.state.data.yearLabel}</div>
    				<div className="tile_item-1">{this.state.data.yearValue}</div>
            </div>
				</div>

        <div data-tile-content>
  				<div className="tile_item">
          	<div className="tile_item-child">
    				<div className="tile_item-header">{this.state.data.gradeLabel}</div>
    				<div className="tile_item-1">{this.state.data.gradeValue}</div>
            </div>
            <div className="tile_item-child">
    				<div className="tile_item-header">{this.state.data.enrollLabel}</div>
    				<div className="tile_item-1">{this.state.data.enrollValue}</div>
            </div>
  				</div>
	      	<div className="tile_item">
    				<div className="tile_item-header">{this.state.data.ethLabel}</div>
    				<div className="tile_item-2">{this.state.data.ethValue}</div>
  				</div>
				</div>

        <div data-title-footer className="tile-footer">

  				<div className="tile_item">
    				<div className="tile_item-header">{this.state.data.totyearLabel}</div>
    				<div className="tile_item-1">{this.state.data.totyearValue}</div>
  				</div>
      		<div className="tile_item">
    				<div className="tile_item-header">{this.state.data.subGroupLabel}</div>
    				<div className="tile_item-3">{this.state.data.subGroupValue}</div>
  				</div>

				</div>
      </div>

        );
    }
  }

export default SvgCard;
