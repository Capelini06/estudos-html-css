# estudos-html-css

Repositório com as atividades feitas durante o curso **Desenvolvimento Front-end do Zero ao Profissional**, da EBAC. Cada módulo tem a sua própria pasta dentro de [EBAC-Desenvolvimento Front-end do Zero ao Pro/](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/).

## Conteúdo dos módulos

### [Módulo 01](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-01/) – Introdução à Web
Primeira página web, só com HTML: título de boas-vindas, uma apresentação pessoal, imagem, link para o GitHub e uma lista de habilidades.
- [atividade-01](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-01/atividade-01/): página "Minha Primeira Página Web", usando `h1`, `h2`, `p`, `img`, `a` e `ul`.

### [Módulo 02](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-02/) – Fundamentos de HTML5
Página sobre curiosidades das linguagens de programação, montada com as tags semânticas do HTML5 (`header`, `nav`, `main`, `section`, `footer`), listas ordenadas, links internos por âncora (`#python`, `#javascript`, `#contato`) e um formulário de contato com `label`, `input`, `textarea` e validação com `required`.
- [atividade-02](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-02/atividade-02/): curiosidades sobre Python e JavaScript, com o CSS escrito dentro da tag `<style>` (menu em linha com `display: flex`).

### [Módulo 03](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-03/) – Fundamentos de CSS3
Página inicial de um portal de notícias fictício ("g2"), com cabeçalho fixo (`position: sticky`), menu de categorias, campo de busca, notícia principal, cards de notícias, "Mais Lidas", previsão do tempo e rodapé.
- [atividade-03](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-03/atividade-03/): CSS em arquivo separado (`style.css`) com variáveis em `:root`, Flexbox, CSS Grid (`grid-template-columns` e `repeat(auto-fit, minmax())`), seletores aninhados, efeitos de `hover` com `transition`, Google Fonts, ícones do Material Symbols e layout responsivo com `@media`.

### [Módulo 04](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-4/) – Introdução ao JavaScript
Primeiros scripts em JavaScript ligados a páginas HTML: variáveis, entrada de dados, cálculos, condicionais e exibição do resultado na própria página.
- [exemplo-01](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-4/exemplo-01/): tipos de variáveis (`const`, `let`, `null`, `undefined` e booleano) e calculadora de gorjeta com `prompt()` e `alert()`.
- [exemplo-02](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-4/exemplo-02/): calculadora de descontos que lê os campos com `document.getElementById()` e mostra o valor final com `textContent`.
- [exemplo-03](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-4/exemplo-03/): calculadora de notas que calcula a média de três notas com `parseFloat()`, diz se o aluno foi aprovado ou reprovado com `if` / `else` e monta o resultado com template strings e `innerHTML`.
- [atividade-04](EBAC-Desenvolvimento%20Front-end%20do%20Zero%20ao%20Pro/modulo-4/atividade-04/): calculadora de IMC com classificação (abaixo do peso, normal, sobrepeso e obesidade) usando `if` / `else if`, e visual em card com gradiente e variáveis CSS.

### Módulo 05 – Git e GitHub
Módulo dedicado a aprender a usar o Git e o GitHub para versionar e publicar os projetos. Como o foco foi praticar os comandos e o fluxo de trabalho, e não criar páginas, este módulo não tem uma pasta com atividades.

## Como executar

Não é preciso instalar nada: abra o arquivo `index.html` da atividade no navegador (ou use a extensão Live Server do VS Code).

Os exemplos do Módulo 04 rodam no navegador. O `exemplo-01` usa `prompt()` e `alert()`, então as caixas de diálogo aparecem assim que a página abre.
