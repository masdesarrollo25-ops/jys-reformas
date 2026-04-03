"use client";

import { QRCodeCanvas } from 'qrcode.react';

export default function QRPage() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>QR para Tarjetas J&S</h1>
      <QRCodeCanvas 
        value="jysreformas.vercel.app"
        size={1024} // Alta resolución para imprenta
        level={"H"} // Máxima corrección de errores (permite que se lea aunque se raye)
        includeMargin={true}
      />
      <p>Haz clic derecho y "Guardar imagen como" para descargar en alta calidad.</p>
    </div>
  );
}
