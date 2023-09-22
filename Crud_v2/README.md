# Projeto de Cadastro de Pessoas
## Detalhes do Projeto
Este é um projeto de CRUD (Create, Read, Update, Delete) para o cadastro de pessoas, desenvolvido utilizando PHP no backend, Laravel para a criação de endpoints/API e React (Next.js na versão 13) no frontend.

### Backend (PHP e Laravel)
O backend deste projeto foi desenvolvido em PHP, utilizando o framework Laravel para criar os endpoints/API necessários para a funcionalidade CRUD.

### Frontend em React (Next.js - versão 13)
O frontend deste projeto foi desenvolvido com o Next.js, uma estrutura de aplicativo React que oferece melhor desempenho e recursos avançados de renderização. 

## Rodando o Projeto:
### Requisitos utilizando Docker
Certifique-se de ter os seguintes requisitos instalados em sua máquina antes de prosseguir:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Configuração com Docker

1.  Clone este repositório em sua máquina local:

    ```
    git clone https://github.com/GabrielOGW/Estudos-GazinTech.git
    ```

2.  Navegue até a pasta raiz do projeto:

    ```
    cd Estudos-GazinTech
    cd Crud_v2
    ```
3.  Execute o seguinte comando para iniciar o projeto usando Docker Compose:

    ```
    docker-compose up -d --build
    ```
    Isso iniciará os contêineres necessários para o frontend, backend e banco de dados MySQL.

4.  O frontend estará acessível em [http://localhost:3000](http://localhost:3000) e o backend estará acessível em [http://localhost:8000](http://localhost:8000), porém o backend ainda precisará de algumas configurações adicionais nos passos: 

    - [Instalando Dependencias](#Instalando-Dependencias)
    - [Configurando a Chave de Criptografia](#configurando-a-chave-de-criptografia)
    - [Atualizando o Arquivo `.env.example`](#atualizando-o-arquivo-envexample)
    - [Executando as Migrações do Banco de Dados](#executando-as-migrações-do-banco-de-dados)

### Instalando Dependencias

No terminal execute o seguinte comando para gerar a chave de criptografia do Laravel e exibi-la:

  ```
  docker exec -it laravel-backend composer install
  ```

### Configurando a Chave de Criptografia

Em seguida execute o seguinte comando para gerar a chave de criptografia do Laravel e exibi-la:

  ```
  docker exec -it laravel-backend php artisan key:generate --show
  ```

  
Copie o valor gerado, pois você precisará inseri-lo no arquivo `.env.example` mais tarde.


### Atualizando o Arquivo `.env.example`

Abra o arquivo `.env.example` no seu projeto e encontre a linha que começa com `APP_KEY=`. Substitua o valor existente pelo valor que você gerou anteriormente usando o comando `php artisan key:generate`.

Em seguida altere o nome do arquivo `.env.example` para `.env`

### Executando as Migrações do Banco de Dados

Agora, no mesmo terminal onde foi gerado a chave de criptografia execute o seguinte comando para executar as migrações do banco de dados e criar as tabelas necessárias:

  ```
  docker exec -it laravel-backend php artisan migrate
  ```
Com esses passos concluídos, o backend Laravel deve estar em execução com sucesso usando o Docker.


### Requisitos sem utilizar Docker
Certifique-se de ter os seguintes requisitos instalados em sua máquina antes de prosseguir:

- [PHP Versão 8.1](https://www.php.net/releases/8.1/pt_BR.php)
- [Composer](https://getcomposer.org/download/)
- [Node](https://nodejs.org/pt-br)
- Servidor [MySQL](https://www.mysql.com/) em execução na porta 3306
- configurações do banco MYSQL para ficar de acordo com o `.env`:
  - Host: mysql
  - Porta: 3306
  - Banco de dados: backend
  - Nome de Usuário: root
  - Senha: (vazia)

### Configuração com Docker

1.  Clone este repositório em sua máquina local:

    ```
    git clone https://github.com/GabrielOGW/Estudos-GazinTech.git
    ```

### Configurando o Backend

1. Navegue até a pasta 'backend':

    ```
    cd Estudos-GazinTech
    cd Crud_v2
    cd backend
    ```

2. Execute o seguinte comando para instalar as dependências:

   ```
   composer install
   ```

3. Após a instalação das dependências, execute os seguintes comandos:     
    
    - [Configurando a Chave de Criptografia](#configurando-a-chave-de-criptografia)
    - [Atualizando o Arquivo `.env.example`](#atualizando-o-arquivo-envexample)
    - [Executando as Migrações do Banco de Dados](#executando-as-migrações-do-banco-de-dados)

4. Inicie o servidor de desenvolvimento:
  
    ```
    php artisan serve
    ``` 
   O backend estará acessível em [http://localhost:8000](http://localhost:8000).

   e você pode verificar as rotas disponiveis com:

    ```
    php artisan routes:list
    ```

### Configurando o Frontend

1. Navegue até a pasta 'frontend':

    ```
    cd Estudos-GazinTech
    cd Crud_v2
    cd frontend
    ```

2. Execute o seguinte comando para instalar as dependências:

   ```
   npm install
   ```

3. Após a instalação das dependências, inicie o servidor frontend com o seguinte comando:

   ```
   npm run dev
   ```

   O aplicativo frontend estará acessível em [http://localhost:3000](http://localhost:3000).

