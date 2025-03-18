"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeButton, setActiveButton] = useState("post1");

  return (
    <div>
      <header className="m-2 p-2 bg-white text-black text-center flex justify-evenly">
        <div>
          <p className="font-bold">Cursos para Dunmies</p>
        </div>
        <div>image</div>
      </header>

      <article className="text-center font-bold text-4xl">
        <p>¡Cursos Disponibles!</p>
      </article>

      {/* Botones */}
      <article className="bg-white mt-2 pl-2 pr-2 pt-2 flex text-black text-center font">
        <button
          className={`w-1/3 p-3 ${
            activeButton === "post1" ? "bg-orange-500" : "bg-yellow-400"
          }`}
          onClick={() => setActiveButton("post1")}
        >
          <p className="font-bold">Alfabetización Digital</p>
        </button>
        <button
          className={`w-1/3 p-3 ${
            activeButton === "post2" ? "bg-orange-500" : "bg-yellow-400"
          }`}
          onClick={() => setActiveButton("post2")}
        >
          <p className="font-bold">Ofimática</p>
        </button>
        <button
          className={`w-1/3 p-3 ${
            activeButton === "post3" ? "bg-orange-500" : "bg-yellow-400"
          }`}
          onClick={() => setActiveButton("post3")}
        >
          <p className="font-bold">Diseño Gráfico</p>
        </button>
      </article>

      {/* Contenido dinámico */}
      <article className="ml-2 mr-2 p-4 text-justify bg-orange-500">
        {activeButton === "post1" && (
          <section>
            <p>
              Es el conocimiento y manejo de dispositivos electrónicos, sistemas
              operativos e internet, permitiendo el acceso a información,
              comunicación y seguridad en el entorno digital.
            </p>
            <p className="mt-2 mb-2">
              Algunos aspectos clave en alfabetización digital incluyen:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <b>Hardware:</b> uso del PC, periféricos y almacenamiento.
              </li>
              <li>
                <b>Software:</b> instalación y manejo de programas esenciales.
              </li>
              <li>
                <b>Internet:</b> navegación, búsquedas y correo electrónico.
              </li>
              <li>
                <b>Seguridad:</b> cuidados y prevención de amenazas.
              </li>
            </ul>
            <p className="mt-2">
              Este aprendizaje es fundamental para desenvolverse en la era
              digital y mejorar las oportunidades educativas y laborales. 🚀
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/AlfaDigital.png"
                alt="Ofirmática"
                width={500}
                height={300}
              />
            </div>
          </section>
        )}
        {activeButton === "post2" && (
          <section>
            <p>
              Te sirve para optimizar tareas de oficina y mejorar la
              productividad en el trabajo, los estudios o cualquier actividad
              que requiera procesamiento de información.
            </p>
            <p className="mt-2 mb-2">
              Algunos programas comunes en ofimática incluyen:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <b>Microsoft Office:</b> (Word, Excel, PowerPoint, Outlook).
              </li>
              <li>
                <b>Google Workspace:</b> (Docs, Sheets, Slides, Gmail).
              </li>
              <li>
                <b>LibreOffice:</b> (Writer, Calc, Impress).
              </li>
            </ul>
            <p className="mt-2">
              La ofimática es esencial en cualquier ámbito laboral o académico,
              facilitando la administración de datos y la automatización de
              tareas repetitivas. 🚀
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/Ofirmatica.png"
                alt="Ofirmática"
                width={500}
                height={300}
              />
            </div>
          </section>
        )}
        {activeButton === "post3" && (
          <section>
            <p>Contenido3</p>
          </section>
        )}
      </article>

      <footer className="mt-4 text-center">Pie de página.</footer>
    </div>
  );
}
