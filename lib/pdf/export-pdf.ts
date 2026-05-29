export async function exportRecoveryPdf(data: any) {
  const pdfMake = (await import("pdfmake/build/pdfmake")).default;
  const pdfFonts = await import("pdfmake/build/vfs_fonts");

  (pdfMake as any).vfs = (pdfFonts as any).pdfMake?.vfs || {};

  const docDefinition = {
    content: [
      {
        text: "GriefOS Recovery Kit",
        style: "header",
      },
      {
        text: `Prepared For: ${data.deceasedName}`,
        margin: [0, 20, 0, 10],
      },
      {
        text: `Relationship: ${data.relationship}`,
      },
      {
        text: `State: ${data.state}`,
        margin: [0, 0, 0, 20],
      },
    ],

    styles: {
      header: {
        fontSize: 24,
        bold: true,
      },
    },
  };

  (pdfMake as any)
    .createPdf(docDefinition)
    .download("griefos-recovery-kit.pdf");
}