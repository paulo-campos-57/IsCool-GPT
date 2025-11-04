<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=nodejs,docker,aws" /><br>IsCool-GPT 🇧🇷
  </h1>  
</div>

---

## Descrição
IsCool-GPT é um assistente inteligente projetado para auxiliar nos estudos de Computação em Nuvem.
A aplicação foi desenvolvida em Node.js (Express) e se comunica com a API do Google Gemini, permitindo interações dinâmicas e contextuais.

## Objetivo
O projeto tem como finalidade apoiar o aprendizado prático dos conceitos de Cloud Computing, integrando tecnologias modernas de inteligência artificial e serviços em nuvem.

## Tecnologias/Requisitos
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Google Gemini API</li>
  <li>Docker</li>
</ul>

## Como executar (Local)
Para executar o projeto localmente, é necessário seguir os seguintes passos:
<ul>
  <li>
    Clone o repositório em seu computador usando o comando:
    <dt>
    
    git clone https://github.com/paulo-campos-57/IsCool-GPT.git
  </dt>
  </li>
  <li>Acesse a pasta 'IsCool-GPT';</li>
  <li>
    Configure as variáveis de ambiente:
    <ul>
      <li>Na pasta 'IsCool-GPT', crie um arquivo <code>.env</code></li>
      <li>
        Dentro do arquivo, passe as seguintes credenciais:
        <ul>
          <li>LLM_PROVIDER=gemini</li>
          <li>GEMINI_API_KEY=sua_chave_API</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Rode o projeto utilizando o comando:
    <dt>
    
    docker compose up --build
  </dt>
  </li>
  <li>Após isso, o servidor ficará disponível em http://localhost:3000;</li>
  <li>É possível encontrar a documentação das funções no endereço http://localhost:3000/api-docs</li>
</ul>

##

<div align="center">
  <h1>
    <img src="https://skillicons.dev/icons?i=nodejs,docker,aws" /><br>IsCool-GPT 🇺🇸
  </h1>  
</div>

---

## Description
IsCool-GPT is an intelligent assistant designed to support the study of Cloud Computing.
The application was built using Node.js (Express) and communicates with the Google Gemini API, enabling dynamic and contextual interactions.

## Purpose
The main goal of this project is to enhance practical learning of Cloud Computing concepts by integrating modern artificial intelligence and cloud services technologies.

## Technologies/Requirements
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Google Gemini API</li>
  <li>Docker</li>
</ul>

## How to run (Local)
To locally run the project, follow these steps:
<ul>
  <li>
    Clone the project to your computer using the command:
    <dt>
    
    git clone https://github.com/paulo-campos-57/IsCool-GPT.git
  </dt>
  </li>
  <li>Go to 'IsCool-GPT' folder;</li>
  <li>
    Set up environment variables:
    <ul>
      <li>At 'IsCool-GPT' folder, create a <code>.env</code> file</li>
      <li>
        Inside the file, provide the following credentials:
        <ul>
          <li>LLM_PROVIDER=gemini</li>
          <li>GEMINI_API_KEY=your_API_key</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Run the project using the command:
    <dt>
    
    docker compose up --build
  </dt>
  </li>
  <li>After that, the server will be available at http://localhost:3000;</li>
  <li>You can find the documentation for the functions at the address http://localhost:3000/api-docs</li>
</ul>
