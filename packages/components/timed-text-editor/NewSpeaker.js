import React from "react";
import PropTypes from "prop-types";

import { Select, Modal, MenuItem } from "@material-ui/core";
import style from "./index.module.css";

const NewSpeaker = props => {
  let saveData = props?.props?.transcriptData?.blocks
    ? props?.props?.transcriptData?.blocks.map((item, index) => {
      return item?.data?.speaker;
    })
    : props?.props?.transcriptData?.paragraphs.map((item, index) => {
      return item?.speaker;
    });
  const newArray = saveData
    ? saveData.filter(function (item, index, inputArray) {
      return inputArray.indexOf(item) == index;
    })
    : null;
  return (
    <>
      {props?.showSpeaker ? (
        <Modal open={props?.showSpeaker}>
          <div className={style.container}>
            <div className={style.headingContainer}>
              <h2 className={style.header}>Bk</h2>
              <img
                className={style.closeModal}
                onClick={props.handleSpeakerToggle}
              />
            </div>
            <div className={style.noteContainer}>
              <div className={style.label}>Select Speaker</div>
              <Select
                variant="outlined"
                style={{ width: "100%" }}
                value={props.props.name}
                onChange={
                  props?.props?.isEditable
                    ? props.props.handleOnClickEdit
                    : null
                }
              >
                {newArray.map(item => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

NewSpeaker.propTypes = {
  name: PropTypes.string,
  handleOnClickEdit: PropTypes.func,
  handleCheckToggle: PropTypes.func
};

export default NewSpeaker;
