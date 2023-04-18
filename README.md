# Desafio OM30 - front-end Vue.js

Sistema de cadastro de pacientes com listagem, adição, edição, visualização e exclusão de cada um dos pacientes.

## 🛠️ Tecnologias e dependências

- Vue 3
- TypeScript
- VeeValidate (validação de formulários)
- Maska (máscara de inputs)
- Luxon (tratativa de datas)
- JSON Server
- JSON Server Auth

## 📡 APIs externas

- ViaCEP

## 📂 Rodando o projeto

1. Clone do repositório
 
    ```
    git clone <url_do_repositorio>
    ```

3. Instalar dependências
 
    ```
    npm install
    ```

5. Rodar projeto
 
    ``` 
    npm run dev
    ```

7. Rodar JSON server
 
    ```
    npm run db
    ```

9. Acessar no navegador
 
   ```
   http://localhost:5173/
   ```

## 💻 Utilizando o sistema

1. Criar conta utilizando e-mail e senha (não há necessidade de caracteres especiais ou números), ou utilizar uma conta demo.
   
   - login: om30@teste.com
   - senha: abc123
  
2. Utilizar geradores de CPF (preferencialmente estado de SP) e CNS. Alguns valores de CPF gerados não são aceitos, mas a grande maioria passa pela validação.
   
   - Gerador de CPF: https://www.4devs.com.br/gerador_de_cpf
   - Gerador de CNS: https://geradornv.com.br/gerador-cns/
