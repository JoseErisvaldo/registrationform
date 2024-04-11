import { Link } from "react-router-dom";
import Input from "../UIGeneric/Input/input";


export default function Form () {
  return(
    <div className=" my-3 mx-auto max-w-xl flex flex-col space-y-6 border p-5 rounded-2xl">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-white">Cadastro</h1>
        <p className="text-gray-500 dark:text-gray-400">Insira suas informações para se cadastrar !</p>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="space-y-2">
            <label className="text-1xl font-bold text-white" htmlFor="first-name">Nome </label>
            <Input id="first-name" placeholder={'Nome'} type={'tex'} required />
          </div>
          <div className="space-y-2">
            <label className="text-1xl font-bold text-white" htmlFor="last-name">Sobrenome </label>
            <Input id="last-name" placeholder="Sobrenome" required />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-1xl font-bold text-white" htmlFor="email">E-mail </label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <label className="text-1xl font-bold text-white"  htmlFor="dob">Data de nascimento</label>
          <Input id="dob" placeholder="m@example.com" type="date" />
        </div>
        <div className="space-y-2">
          <label className="text-1xl font-bold text-white"  htmlFor="gender">Gênero</label>
          <select className="w-full h-11 border rounded " defaultValue="1" id="gender">
            <option value="Selecionar">Selecionar</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-1xl font-bold text-white"  htmlFor="phone">Telefone - Whatsapp</label>
          <Input className="w-full h-7 border" id="phone" placeholder="Telefone" type="number" />
        </div>
        <button className="w-full bg-green-600 p-3 hover:bg-green-500 text-white rounded" type="submit">
          <Link to={'/proximaetapa'} >
           Enviar
          </Link>
        </button>
        

      </div>
    </div>
  )
}