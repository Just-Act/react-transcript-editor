import React, { PureComponent, useEffect } from "react";
import PropTypes from "prop-types";

import { Select, Modal, MenuItem, Button } from "@material-ui/core";

const NewSpeaker = props => {
  {
    console.log(props?.props, "props");
  }
  let saveData = props?.props?.transcriptData?.blocks
    ? props?.props?.transcriptData?.blocks.map((item, index) => {
        return item?.data?.speaker;
      })
    : props?.props?.transcriptData?.paragraphs.map((item, index) => {
        return item?.speaker;
      });
  const newArray = saveData
    ? saveData.filter(function(item, index, inputArray) {
        return inputArray.indexOf(item) == index;
      })
    : null;
  return (
    <Modal open={props?.checkModal?.check}>
      <div
        style={{
          maxWidth: "446px",
          width: "100%",
          backgroundColor: "white",
          outline: "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          borderRadius: "8px",
          transform: "translate(-50%, -50%)"
        }}
      >
        <div
          style={{
            paddingTop: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}
        >
          <h1
            style={{
              margin: "0",
              padding: "0",
              fontSize: "18px",
              fontWeight: "800",
              fontStretch: "normal",
              fontStyle: "normal",
              lineHeight: "normal",
              letterSpacing: "normal",
              textAlign: "center",
              color: "#293461"
            }}
          >
            Bk
          </h1>
          <img
            style={{
              width: "14px",
              height: "14px",
              objectFit: "contain",
              cursor: "pointer",
              position: "absolute",
              right: "30px"
            }}
          />
        </div>
        <p
          style={{
            paddingTop: "24px",
            paddingRight: "40px",
            paddingLeft: "40px",
            paddingBottom: "30px",
            fontSize: "14px",
            lineHeight: "1.71",
            textAlign: "justify",
            overflow: "auto"
          }}
        >
          <Button
            style={{
              backgroundColor: "#00838c",
              color: "#ffffff"
            }}
            variant="outlined"
            onClick={
              props?.props?.isEditable ? props.props.handleOnClickEdit : null
            }
          >
            {"Click to edit New speaker"}
          </Button>
          <div
            style={{ fontSize: "10px", lineHeight: "2.7", color: "#293461" }}
          >
            Select Speaker
          </div>
          <div>
            <Select
              variant="outlined"
              style={{ width: "100%" }}
              value={props.props.name}
              onChange={
                props?.props?.isEditable ? props.props.handleOnClickEdit : null
              }
            >
              {newArray.map(item => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </div>
        </p>
      </div>
    </Modal>
  );
};

NewSpeaker.propTypes = {
  name: PropTypes.string,
  handleOnClickEdit: PropTypes.func
};

export default NewSpeaker;
