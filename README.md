# 🚀 Teste Técnico Front-end Be - Resolução

Este repositório contém a resolução do Teste Técnico Front-End da Be, desenvolvido por Kauan de Torres Eiras durante o processo seletivo.

## ℹ️ Informações sobre a Be:
- [LinkedIn](https://br.linkedin.com/company/bemobiletech)
- [Instagram](https://www.instagram.com/bemobile.tech/)
- [Facebook](https://www.facebook.com/bemobile.tech)
- [Telegram](https://t.me/be_tech_community)

## 📋 Desafio:
O Teste Técnico para Front-End da Be consiste em construir a visualização de uma tabela, seguindo o layout do [Figma](https://www.figma.com/file/yw6th52zE9bubewc6ayTg5/Teste-T%C3%A9cnico-Front-End-Be.?type=design&node-id=1%3A4&mode=dev&t=vVxs9eyKybrYmq4Z-1), com dados que virão de uma API simulada em json-server.

## 🛠️ Instruções para execução do projeto

### 1️⃣ Acesso aos dados da API simulada:

1. Caso não tenha, instale o pacote [json-server](https://github.com/typicode/json-server).
2. Clone o repositório do GitHub em sua máquina: [https://github.com/BeMobile/desafio-front-end](https://github.com/BeMobile/desafio-front-end).
3. Entre na pasta do projeto em sua máquina e, por meio da linha de comando, execute o comando `json-server --watch db.json` para consumir a API simulada.
4. Por padrão, a API simulada será inicializada em http://localhost:3000/, tendo apenas o endpoint: http://localhost:3000/employees.

### 2️⃣ Inicie o projeto React

Siga estas instruções para rodar o projeto em sua máquina:

1. Este projeto utiliza a versão 18.2.0 do React. Caso não tenha o node instalado, [instale a versão 20.11.1 do Node.js](https://nodejs.org/).
2. Clone o repositório do projeto em [Desafio-Front-End-Be](https://github.com/kauaneiras/Desafio-Be-FrontEnd).
3. Acesse a pasta do projeto pelo terminal.
4. Instale as dependências:

```bash
npm install
```
5. Configure a entrada de dados caso necessário:
- O arquivo connection.tsx está dentro de *./src/services*. Lá você encontrará a constante **url**, responsável pela conexão com o json server: 
```bash
const url = 'http://localhost:3000';
```
Caso necessário, altere o link para receber os dados de outro servidor.
- O formato dos dados reconhecidos pela aplicação consiste em um array de objetos formatado da seguinte forma:
```bash
{
  "employees": [
    {
      "id": 1,
      "name": "João",
      "job": "Back-end",
      "admission_date": "2019-12-02T00:00:00.000Z",
      "phone": "5551234567890",
      "image": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
    },
    ...
  ]
}
```

6. Inicie o projeto:

```bash
npm run dev
```

Agora, a aplicação estará disponível localmente em [http://localhost:5173](http://localhost:5173).

# Desafio-Be-FrontEnd

---

## ℹ️ Instruções e Critérios de Avaliação

### ✅ Requisitos Gerais
- Utilize React.js ou Vanilla JS (JavaScript puro) para construir o projeto.
- É permitido utilizar libs externas, mas recomenda-se o mínimo possível.
- A visualização deve ser responsiva.
- A tabela deve conter as seguintes colunas:
  - Imagem (thumb do/a usuário/a);
  - Nome;
  - Cargo;
  - Data de admissão;
  - Telefone.
- Implemente a funcionalidade de pesquisa na tabela por meio de um input, permitindo filtrar dados por cargo, nome e telefone.
- Formate datas e telefones no front-end e não na API.

### 🎯 Critérios de Avaliação
Em ordem de relevância, avaliaremos:
- Lógica de programação;
- Organização (do código e dos arquivos);
- Estilo CSS do projeto;
- Qualidade do README, que deve conter informações sobre o projeto, pré-requisitos e instruções para rodar a aplicação.
- Uso de TypeScript e Styled Components serão considerados diferenciais.

### 📤 Envio da Solução 
O projeto deverá ser hospedado em um repositório no seu GitHub, e o link do repositório deverá ser fornecido por meio do formulário de Teste Técnico. Não serão aceitos links de projetos enviados por outros meios.