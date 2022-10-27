import React, { PureComponent, useEffect } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

import style from "./WrapperBlock.module.css";
import SpeakerChange from "../timed-text-editor/SpeakerChange";
import NewSpeaker from "../timed-text-editor/NewSpeaker";

class SpeakerLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      check: false
    };
  }

  render() {
    return (
      <span
        className={
          this.props.isEditable
            ? [style.speaker, style.speakerEditable].join(" ")
            : [style.speaker, style.speakerNotEditable].join(" ")
        }
        title={this.props.name}
        // onClick={this.props.isEditable ? this.props.handleOnClickEdit : null}
        onClick={() =>
          this.setState(prevState => ({
            check: !prevState.check
          }))
        }
      >
        {/* {this.props.isEditable && this.state.check ? (
          <SpeakerChange props={this.props} checkModal={this.state} />
        ) : null} */}
        {this.props.isEditable && this.state.check ? (
          <NewSpeaker props={this.props} checkModal={this.state} />
        ) : null}
        <span className={style.EditLabel}>
          <FontAwesomeIcon icon={faUserEdit} />
        </span>
        {this.props.name}
      </span>
    );
  }
}

SpeakerLabel.propTypes = {
  name: PropTypes.string,
  handleOnClickEdit: PropTypes.func
};

export default SpeakerLabel;
