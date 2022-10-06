import { Document, Paragraph, TextRun, Packer } from "docx"
import { shortTimecode } from "../../util/timecode-converter"

export default (blockData, transcriptTitle) => {
  // const lines = blockData.blocks.map(x => x.text);

  return generateDocxWithLineNumbersFromDraftJs(blockData, transcriptTitle)
  // return lines.join('\n\n');
}

function generateDocxWithLineNumbersFromDraftJs(blockData, transcriptTitle) {
  const doc = new Document({
    creator: "Test",
    description: "Test Description",
    title: transcriptTitle,
  })

  // Transcript Title
  // TODO: get title in programmatically - optional value
  const textTitle = new TextRun(transcriptTitle)
  const paragraphTitle = new Paragraph()
  paragraphTitle.addRun(textTitle)
  paragraphTitle.heading1().center()
  doc.addParagraph(paragraphTitle)
  // add spacing
  var paragraphEmpty = new Paragraph()
  doc.addParagraph(paragraphEmpty)
  blockData.blocks.forEach((draftJsParagraph, index) => {
    // TODO: use timecode converter module to convert from seconds to timecode
    const paragraphSpeakerTimecodes = new Paragraph()
    const textBreak = new TextRun("").break()

    const speaker = new TextRun(draftJsParagraph.data.speaker).bold()
    paragraphSpeakerTimecodes.addRun(speaker)

    // paragraphSpeakerTimecodes.addRun(textBreak)

    doc.addParagraph(paragraphSpeakerTimecodes)
    const paragraphText = new Paragraph(
      `${index + 1}.  ${draftJsParagraph.text}`
    )
    paragraphText.addRun(textBreak)
    paragraphText.addRun(textBreak)
    doc.addParagraph(paragraphText)
  })

  const packer = new Packer()

  packer.toBlob(doc).then((blob) => {
    const filename = `${transcriptTitle}.docx`
    // // const type =  'application/octet-stream';
    const a = document.createElement("a")
    a.href = window.URL.createObjectURL(blob)
    a.download = filename
    a.click()

    return blob
  })
}
