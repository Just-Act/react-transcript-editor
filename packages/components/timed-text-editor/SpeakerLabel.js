import React, { PureComponent, useEffect } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

import style from "./WrapperBlock.module.css";
import {
  Select,
  withStyles,
  FormControl,
  Modal,
  MenuItem,
  TextField,
  Button
} from "@material-ui/core";
import styled from "styled-components";
import COLORS from "../../../demo/Colors";
import theme from "../../../demo/theme";

const Index = props => {
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
      <DrawerContainer>
        <HeadingContainer>
          <Heading>{"Change Speaker Name"}</Heading>
          <CloseModal
            onClick={() =>
              this.setState(prevState => ({
                check: !prevState.check
              }))
            }
          />
        </HeadingContainer>
        <NoteContainer>
          <Button
            style={{
              backgroundColor: COLORS.BTN_GREEN,
              color: COLORS.PRIMARY_WHITE,
              "&:hover": {
                backgroundColor: COLORS.BTN_GREEN,
                // Reset on touch devices, it doesn't add specificity
                "@media (hover: none)": {
                  backgroundColor: "transparent"
                }
              }
            }}
            variant="outlined"
            onClick={
              props?.props?.isEditable ? props.props.handleOnClickEdit : null
            }
          >
            {"Click to edit New speaker"}
          </Button>
          <Label>Select Speaker </Label>
          <StyledSelectFormControl
            variant="outlined"
            style={{ lineHeight: "2.7" }}
          >
            <Select
              value={props.props.name}
              onChange={
                props?.props?.isEditable ? props.props.handleOnClickEdit : null
              }
            >
              {newArray.map(item => (
                <StyledMenuItem value={item}>{item}</StyledMenuItem>
              ))}
            </Select>
          </StyledSelectFormControl>
        </NoteContainer>
      </DrawerContainer>
    </Modal>
  );
};

export const StyledSelectFormControl = withStyles({
  ...StyledInput,
  root: {
    fontSize: "16px",
    width: "100%"
  }
})(FormControl);

export const CustomInputField = withStyles(StyledInput)(TextField);

export const StyledInput = {
  root: {
    width: "100%",
    fontSize: "16px",
    color: `${COLORS.COLOR_DARK} !important`,
    fontFamily: `${theme.fonts.primaryFontSemiBold}`,
    // background: COLORS.INPUT_BACKGROUND,
    "& .MuiPickersToolbar-toolbar": {
      backgroundColor: COLORS.BTN_GREEN
    },
    "& label": {
      fontFamily: `${theme.fonts.primaryFontSemiBold}`
    },
    "& label.Mui-focused": {
      color: COLORS.COLOR_DARK,
      fontFamily: `${theme.fonts.primaryFontSemiBold}`,
      border: `1px solid ${COLORS.INPUT_BORDER}`
    },
    "& input": {
      letterSpacing: 0.1,
      fontSize: "16px",
      color: `${COLORS.COLOR_DARK} !important`,
      fontFamily: `${theme.fonts.primaryFontSemiBold}`
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: COLORS.INPUT_BACKGROUND,
      height: 50,
      "& fieldset": {
        borderRadius: "6px",
        border: `1px solid ${COLORS.INPUT_BORDER}`
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS.INPUT_BORDER
      }
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: -17,
      left: -10,
      fontFamily: theme.fonts.primaryFontSemiBold,
      fontSize: 10
    },
    "& .MuiSelect-select": {
      fontSize: "16px",
      fontFamily: theme.fonts.primaryFontSemiBold
    },
    "& .MuiSelect-outlined": {
      color: COLORS.COLOR_DARK
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "& .MuiMenuItem-root": {
      fontSize: "16px",
      fontFamily: theme.fonts.primaryFontSemiBold
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: COLORS.INPUT_BORDER,
      border: `1px solid ${COLORS.INPUT_BORDER}`
    },
    " & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0
    },
    "& input[type=number]": {
      "-moz-appearance": "textfield"
    }
  }
};

const StyledMenuItem = withStyles({
  root: {
    fontFamily: theme.fonts.primaryFontSemiBold,
    color: COLORS.COLOR_DARK
  },
  selected: {
    fontFamily: theme.fonts.primaryFontSemiBold,
    color: COLORS.COLOR_DARK
  }
})(MenuItem);

const Label = styled.div`
  font-family: ${theme.fonts.primaryFontSemiBold};
  font-size: 10px;
  line-height: 2.7;
  color: ${COLORS.COLOR_DARK};
`;

const DrawerContainer = styled.div`
  max-width: 446px;
  width: 100%;
  background-color: white;
  outline: none;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
`;

const HeadingContainer = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CloseModal = styled.img`
  width: 14px;
  height: 14px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  right: 30px;
`;

const Heading = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${COLORS.COLOR_DARK};
  font-family: ${theme.fonts.primaryFontExtraBold};
`;

const NoteContainer = styled.p`
  padding-top: 24px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 30px;
  color: ${COLORS.COLOR_DARK};
  font-size: 14px;
  font-family: ${theme.fonts.primaryFontRegular};
  line-height: 1.71;
  text-align: justify;
  overflow: auto;
  & .MuiFormControlLabel-root {
    font-family: openSans-ExtraBold, san-serif;
    & .MuiTypography-body1 {
      font-family: openSans-ExtraBold, san-serif;
    }
  }
  & .sub-heading {
    font-family: ${theme.fonts.primaryFontBold};
    font-size: 16px;
    color: ${COLORS.PRIMARY_BLACK};
  }
  & .history-row {
    display: flex;
    border-bottom: solid 0.5px #acb1c2;
    & .MuiCheckbox-colorPrimary.Mui-disabled {
      cursor: not-allowed !important;
    }
  }
  & .content {
    flex: 1;
    padding: 18px 0px;
    font-family: ${theme.fonts.primaryFontSemiBold};
    font-size: 16px;
    font-weight: 600;
    color: ${COLORS.PRIMARY_BLACK};
  }
`;

class SpeakerLabel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      check: false
    };
    console.log(props);
  }

  componentDidUpdate = () => {
    if (this.props) {
      this.setState({
        transcriptData: this.props.transcriptData
      });
    }
  };

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
        {this.props.isEditable ? (
          <Index props={this.props} checkModal={this.state} />
        ) : (
          ""
        )}
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
