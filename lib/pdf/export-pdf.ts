import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

(pdfMake as any).vfs = (pdfFonts as any).pdfMake.vfs;

export function exportRecoveryPdf(data: {
  deceasedName: string;
  relationship: string;
  state: string;
  assets: string[];
  roadmap: any[];
}) {
  const docDefinition = {
    content: [
      {
        text: "GriefOS Recovery Kit",
        style: "header",
      },

      {
        text: `Prepared for: ${data.deceasedName}`,
        margin: [0, 20, 0, 10],
      },

      {
        text: `Relationship: ${data.relationship}`,
      },

      {
        text: `State: ${data.state}`,
        margin: [0, 0, 0, 20],
      },

      {
        text: "Selected Assets",
        style: "subheader",
      },

      {
        ul: data.assets,
        margin: [0, 10, 0, 20],
      },

      {
        text: "Recovery Roadmap",
        style: "subheader",
      },

      ...data.roadmap.flatMap((item) => [
        {
          text: item.title,
          style: "sectionTitle",
          margin: [0, 15, 0, 8],
        },
        {
          text: `Deadline: ${item.deadlineInfo.daysRemaining} days remaining`,
        },
        {
          text: `Source: ${item.source}`,
          color: "#666666",
          margin: [0, 0, 0, 10],
        },
        {
          ul: item.steps,
        },
      ]),
    ],

    styles: {
      header: {
        fontSize: 24,
        bold: true,
      },
      subheader: {
        fontSize: 18,
        bold: true,
      },
      sectionTitle: {
        fontSize: 15,
        bold: true,
      },
    },
  };

  (pdfMake as any).createPdf(docDefinition).download(
    "griefos-recovery-kit.pdf"
  );
}