import { Component, OnInit } from '@angular/core';
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';


@Component({
  selector: 'app-pdflipdoc',
  templateUrl: './pdflipdoc.component.html',
  styleUrls: ['./pdflipdoc.component.css']
})
export class PdflipdocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* async modifyPdf() {
    const url = '..assests/pdf/loribs_convus.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
  
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    firstPage.drawText('This text was added with JavaScript!', {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    })
  
    const pdfBytes = await pdfDoc.save()
  } */

}
