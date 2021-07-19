import React, {  useState } from "react";
import './App.css';
import apiGet from "./components/servicos/apiGet";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";


function App() {

	const [cidade, setCidade] = useState("");
	const [tempo, setTempo] = useState(null);
	const [busca, setBusca] = useState("");

	

	const HandleGetApi = async () => {

		const localidade = busca.split(" ").join("");
		console.log(localidade);

		const retornoServico = await apiGet(localidade);

		setTempo(retornoServico);
		
	}

	const HandleForm = async (event) => {

		event.preventDefault();

		setCidade(busca);

		HandleGetApi();



	}

	
	

	return (
		<div className="App">
			<header>
				<h1>Find out your city's weather forecast!</h1>
			</header>
			<main>

				<form onSubmit={ HandleForm}>
					<input 
					id="form-input" 
					placeholder="Digite aqui a cidade" 
					value={busca}
					onChange={ (event) => setBusca(event.target.value)}
					/>
					<button id="botao-procurar">Find</button>
				</form>

				{ tempo  ?
					<section>
						<h1 id="h1-cidade">{cidade}</h1>
						
						<h2 id="h2-tempo-atual">Current weather</h2>
						<p id="p-tempo">{tempo.temperature}</p>

						<p id="p-descricao">{tempo.description}</p>	
						
						<div>
							<h2>Forecast for the next days</h2>

							<ol id="ol-proximos-dias">
							{tempo.forecast.map( dia => 
								
								<li className="li-proximos-dias">
									<div className="div-proximos-dias">
										<FaTemperatureHigh/>
										<p className="p-vento-temperatura"> {dia.temperature}</p>
									</div>
									<div className="div-proximos-dias">
										<FaWind />
										<p className="p-vento-temperatura"> {dia.wind}</p>
									</div>
								</li>
								
							 )}
							</ol>
						</div>

					</section>
				: <p>Preencha a cidade acima!</p>}
			</main>

		
		</div>
	);
}

export default App;
