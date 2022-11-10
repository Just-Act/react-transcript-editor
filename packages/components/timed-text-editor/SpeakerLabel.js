import React, { PureComponent, useEffect } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

import style from "./WrapperBlock.module.css";
import NewSpeaker from "../timed-text-editor/NewSpeaker";

class SpeakerLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSpeaker: false,
    };
  }

  handleSpeakerToggle = () => {
    this.setState(
      prevState => ({
        showSpeaker: !prevState.showSpeaker
      }),
      () => {
        if (this.props.handleAnalyticsEvents) {
          this.props.handleAnalyticsEvents({
            category: "TranscriptEditor",
            action: "handleSpeakerToggle",
            name: "showSpeaker",
            value: !this.state.showSpeaker
          });
        }
      }
    );
  };

  render() {
    const newSpeaker = (
      <NewSpeaker
        props={this.props}
        showSpeaker={this.state.showSpeaker}
        handleSpeakerToggle={this.handleSpeakerToggle}
      />
    );
    return (
      <>
        <span
          className={
            this.props.isEditable
              ? [style.speaker, style.speakerEditable].join(" ")
              : [style.speaker, style.speakerNotEditable].join(" ")
          }
          title={this.props.name}
          // onClick={this.props.isEditable ? this.props.handleOnClickEdit : null}
          onClick={this.handleSpeakerToggle}
        >
          <span className={style.EditLabel}>
            <FontAwesomeIcon
              icon={faUserEdit}
              onClick={this.handleShowEditable}
            />
          </span>
          {this.props.name}
        </span>
        {this.state.showSpeaker ? newSpeaker : null}
      </>
    );
  }
}

SpeakerLabel.propTypes = {
  name: PropTypes.string,
  handleOnClickEdit: PropTypes.func,
  handleChangeValue: PropTypes.func,
  showEditable: PropTypes.bool,
  handleChangeValue: PropTypes.func,
  handleShowEditable: PropTypes.func,
  newSpeaker: PropTypes.string
};

export default SpeakerLabel;
