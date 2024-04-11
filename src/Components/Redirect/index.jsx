import React from "react";
import { Link } from "react-router-dom";

export default function Redirect() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="absolute inset-0 bg-opacity-50 dark:bg-black dark:bg-opacity-50 flex items-center justify-center z-50">
        <div className="grid gap-4 p-4 rounded-lg bg-white shadow-lg">
          <div className="flex flex-col gap-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">
              Obrigado por se cadastrar!
            </h1>
            <p className="text-gray-800 ">
              Você está um passo mais perto de conseguir... Clique no botão
              abaixo para entrar no grupo do WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/5511958790531"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-600 p-3 text-white rounded text-center"
          >
            Entrar no Grupo
          </a>
        </div>
      </div>
    </div>
  );
}
