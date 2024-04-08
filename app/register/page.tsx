'use client';

import * as React from 'react';
import styles from '@/app/ui/home.module.css';
import { Field, Formik, FormikHelpers, useFormik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    lastName: '',
    cedula: '',
    expedicion: '',
    destinacion: '',
    direccion: '',
    cesantias: '',
    valor: 0,
    empresacesantias: 0,
    documentos: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí puedes llamar a una función para generar el PDF con formData
    generatePDF(formData);
    // Por ejemplo:
  };

  // Función para generar el PDF
const generatePDF = async (data: any) => {
  // Librería pdf-lib para generar el PDF
  const { PDFDocument, rgb } = require('pdf-lib');
  
  // Crear un nuevo documento PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]); // Tamaño de la página
  const { width, height } = page.getSize();

  // Texto a mostrar
  const nameBoldText = `Informamos a ustedes que ${data.name} ${data.lastName} identificado(a) con la cédula de ciudadanía No. ${data.cedula} de ${data.expedicion} presentó la solicitud para retiro parcial de cesantías por $${data.valor} acreditando el cumplimiento de los requisitos.`;

  // Tamaño de fuente y márgenes inicial
  let fontSize = 15;
  let margin = 50;

  // Dividir el texto en líneas más cortas
  let lines = splitTextIntoLines( nameBoldText, width - 2 * margin, fontSize);

  // Reducir el tamaño de fuente si el texto no cabe en la página
  while (lines.length * fontSize * 1.2 > height - 2 * margin) {
      fontSize -= 1;
      // Volver a dividir el texto en líneas más cortas con el nuevo tamaño de fuente
      lines = splitTextIntoLines( nameBoldText, width - 2 * margin, fontSize);
  }

  // Agregar las líneas de texto al PDF con el tamaño de fuente y los márgenes ajustados
  let textY = height - margin;
  for (const line of lines) {
      page.drawText(line, {
          x: margin, // Margen izquierdo
          y: textY - fontSize, // Margen inferior
          size: fontSize, // Tamaño de fuente ajustado
          color: rgb(0, 0, 0), // Color del texto
      });
      textY -= fontSize * 1.2; // Espacio entre líneas
  }

  // Guardar el PDF y obtener la URL
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);

  // Abrir el PDF en una nueva pestaña del navegador
  window.open(url);
};

// Función para dividir el texto en líneas más cortas
const splitTextIntoLines = (text: string, maxWidth: number, fontSize: number) => {
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
      const lineWithWord = currentLine ? currentLine + ' ' + word : word;
      const lineWidth = getTextWidth(lineWithWord, fontSize);
      if (lineWidth <= maxWidth) {
          // Si la línea con la nueva palabra cabe dentro del ancho máximo, agregamos la palabra a la línea actual
          currentLine = lineWithWord;
      } else {
          // Si no cabe, agregamos la línea actual al arreglo de líneas y comenzamos una nueva línea con la palabra actual
          lines.push(currentLine);
          currentLine = word;
      }
  }

  // Agregamos la última línea al arreglo de líneas
  lines.push(currentLine);
  return lines;
};

// Función para obtener el ancho de un texto en píxeles
const getTextWidth = (text: string, fontSize: number): number => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return 0; // Si no se puede obtener el contexto de canvas, devolver 0

  ctx.font = `${fontSize}px Arial`;
  return ctx.measureText(text).width;
};

  return (
    <form
      className=" flex  min-h-screen flex-col items-center justify-center gap-10 bg-gradient-to-b from-black to-slate-800 font-medium"
      onSubmit={handleSubmit}
    >
      <h1 className={styles.h1}>RETIRO DE CESANTÍAS</h1>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2">
        <div className="flex flex-col  gap-2">
          <label htmlFor="date" className="text-white">
            Fecha
          </label>
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="rounded-md ring ring-blue-800"
            type="date"
            id="date"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Nombres
          </label>
          <input
            className="rounded-md ring ring-blue-800 "
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          di
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-white">
            Apellidos
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cedula" className="text-white">
            Cédula
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="number"
            id="cedula"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="expedicion" className="text-white">
            Expedida en
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="text"
            id="expedicion"
            name="expedicion"
            value={formData.expedicion}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="destinacion" className="text-white">
            Destinadas para
          </label>
          <select className="rounded-md ring ring-blue-800" id="destinacion">
            <option value="vivienda">Compra de vivienda/Lote</option>
            <option value="mejoras">Mejoras de vivienda</option>
            <option value="hipotecario">
              Liberación de gravamen hipotecario
            </option>
            <option value="prestamo">
              Abono préstamo de Vivienda con la Compañía
            </option>
            <option value="predial">Pago de impuesto predial</option>
            <option value="educacion">Educación</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="direccion" className="text-white">
            Dirección del predio
          </label>
          <input
            className="rounded-md ring ring-blue-800 "
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cesantias" className="text-white">
            Fondo de Cesantías
          </label>
          <input
            name="cesantias"
            value={formData.cesantias}
            onChange={handleChange}
            className="rounded-md ring ring-blue-800"
            type="text"
            id="cesantias"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="valor" className="text-white">
            Valor a solicitar
          </label>
          <input
            name="valor"
            value={formData.valor}
            onChange={handleChange}
            className="rounded-md ring ring-blue-800"
            type="number"
            id="valor"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="empresacesantias" className="text-white">
            Cesantías empresa
          </label>
          <input
            name="empresacesantias"
            value={formData.empresacesantias}
            onChange={handleChange}
            className="rounded-md ring ring-blue-800"
            type="number"
            id="empresacesantias"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="documentos" className="text-white">
            Documentos exigidos por ley
          </label>
          <input
            name="documentos"
            value={formData.documentos}
            onChange={handleChange}
            className="rounded-md ring ring-blue-800"
            type="text"
            id="documentos"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firma" className="text-white ">
            Firma
          </label>
          <input
            className="rounded-md "
            type="file"
            id="firma"
            name="firma"
            // onChange={.handleChange}
          />
        </div>
      </div>
      <button type="submit" className={styles.btn}>
        Enviar
      </button>
    </form>
  );
};

export default Home;
