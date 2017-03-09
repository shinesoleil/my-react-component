import React, {Component} from 'react'
import {ActionInfo} from 'material-ui/svg-icons';

export default class InfoIcon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showInfo: false
    }
  }

  render() {

    const {infos} = this.props

    return (
      <div style={{
                zIndex: 99,
                height: "20px",
                lineHeight: "20px"
            }}>
        <ActionInfo style={{
                                    height: "22px",
                                    width: "16px",
                                    color: "#949ea5",
                                    marginRight: "5px",
                                    verticalAlign: "middle"
                                }}
                    onMouseOver={() => {
                                this.setState({
                                    showInfo:true
                                })
                            }}
                    onMouseOut={() => {
                                this.setState({
                                    showInfo:false
                                })
                            }}
        />
        {
          this.state.showInfo && infos !== undefined && infos.length !== 0 &&
          <div className="triangle-tip-up">
            <ul style={{
                            color: "#949ea5",
                            fontSize: "14px",
                            lineHeight: "35px",
                            paddingLeft: "36px",
                            marginBottom: 0
                        }}>
              {
                infos.map((info, index) => {
                  return (
                    <li key={index}>{info}</li>
                  )
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}
