# components
pasta que contem todos os componentes do template

# routes
pasta que contem as rotas, e onde podem ser adicionadas novas

# pages
pasta onde ficam os componentes que representam as paginas da aplicação

# icons
pasta onde ficam todos as imagens que representam icones, (*devem ser apreciados e encorajados a utilização de icons **svgs***)

# services
pasta onde ficam os metodos para fazer requests em qualquer API

# forms
pasta onde ficam localizados os componentes de formulário, devem ser organizados por proposito

# contexts
pasta onde se localiza os contextos criados para as informações que serão compartilhadas para todos os componentes
(*esse é um projeto com uso de hooks, ou seja, não deve ser necessário a utilização de **redux***)

# .sample-env
esse arquivo é onde deve ser centralizada todas as variaveis de ambiente, em uma aplicação react, vc pode fácilmente criar uma variável dentro desse arquivo com prefixo **"REACT_APP_"** 

# trabalho futuro para o app
Essa aplicação tem propósito de ser um **quick start** para hackathons, mas também para qualquer aplicação react.
algumas coisas devem ser feitas para melhor estruturar esse *borderplate* como por exemplo:

## criação de testes
deve ser adicionado testes *unitários, de comportamento e de regressão*

* adicionar cypress para testes de regressão
* utilizar react-testing-library para testes unitários e de comportamento

## styled components e responsividade

* deve ser encorajado o uso de styled components. a ideia inicial é remover todo o  scss que hoje se encontra em **sass** e passar a usar **themes** com **styled compontents**
* criar meio para deixar fácil a adição de responsividade ao template
* separar o que é generico do que é estilização especifica.

## criar novos componentes UI

## criar rotas autenticadas

## criar middleware de autenticação e de requests

## resolver warnings
