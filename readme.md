# medidas em no css
## medida absoluta
/*
* px
* mm

# medida relativa
/*
* em 
* rem 

# novas
/*
* vh 
* vw
* vmin
* vmax


ler mais sobre 
* https://desenvolvimentoparaweb.com/css/unidades-css-rem-vh-vw-vmin-vmax-ex-ch/
* https://www.alura.com.br/artigos/guia-de-unidades-no-css?gclid=CjwKCAjw-e2EBhAhEiwAJI5jg8rf0U9r-6e3BnQowdwEVUmmNaUhFoiBRaZ9j-ywbQHSToGzaGhY2BoCKugQAvD_BwE


*********************************

# A cascata (cascading)
A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.
* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores.

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo
inline > tag style > tag link

### Especificidade
É considerado matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e nagation pseudo-class (:not)
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. Id Selector
1000. Inline

### A regra !important
* cuidade, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata

https://developer.mozilla.org/pt-BR/docs/Web/CSS/Specificity


***********************************************
# diferença entre o display block e o inline

* o display block ocupa toda a largura da tela, e o inline, ocupa até onte está sendo utilizado (escrito), que o conteúdo utiliza

# propriedades inline
* span


# Padding 
distancia da borda até o conteúdo

# margin 
distancia da borda até o outro elemento

# div 
box-sizing: content-box; //vem por padrão
Ele soma o valor do padding e o width e o height.
OBS: Não soma o valor da Margin pois ela fica para fora do elemento.
Já o box-sizing: border-box, quando adicionado um height e um width não soma, é o tamanho máximo.

/**display: inline; quando é inline não aceita nem width em height**/
    display: inline-block;
# padding, margin e border 
border: 1px solid #ccc; // coloca borda em todo os lados

border 1px 2px solid #ccc; //coloca a borda de 1px top e bottom e 2px nos lados left e right

/**Mas é possivel colocar separado**/
border-top: 10px solid #000000;
border-bottom: 1px dashed #000000;
border-left: 14px solid #000000;
border-right: 1px solid #000000;

/**Ainda é possível utilizar a anotação com 4 valores**/
border: 1px 2px 3px 4px; // é o mesmo que colocar 1px no top, 2px no right, 3px no bottom, e 4px no left.

/**para centralizar conteudo**/
text-align: center;
/**para centralizar elemento**/
margin: 0 auto;//sem utilizar o flex-box