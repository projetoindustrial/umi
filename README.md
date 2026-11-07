# Catálogo UMI

Catálogo de consulta e triagem de ferramentas técnicas abertas, bases de dados e normas de engenharia de processos, materiais e dados industriais, feito para o celular.

**Acesse:** https://projetoindustrial.github.io/umi/

## Como usar

- **Mapa:** os itens aparecem em camadas, como um fluxograma. As candidatas a rodar sozinhas vêm primeiro.
- **Lista:** alternativa ao mapa, com uma linha por item (nome, eixo, tipo e selo de licença), em ordem de nome ou de relevância na busca.
- **Ficha:** um toque num item abre a ficha (descrição, tipo, licença com selo, link da fonte e alternativas parecidas). O botão Ampliar leva a ficha para a tela inteira.
- **Busca:** por nome, ID (UMI-079), técnica, descrição ou licença; entende sinônimos pt/en e erro de uma letra.
- **Filtros:** tipo, estado da licença, eixo, link e marca, combinados, com contagem em cada opção.
- **Cadeias:** receitas por objeto de trabalho, com o tipo de cada etapa (há ferramenta no catálogo, não há, ou depende de instrumento).
- **Marcas:** "usar", "ver depois" e "descartar" ficam no próprio aparelho e podem ser exportadas em JSON.
- **Sobre:** a tela "Sobre" explica a metodologia e os selos de licença.
- Funciona offline depois do primeiro acesso e avisa quando há versão nova.

## Limites

- É um catálogo de uso pessoal, não uma plataforma. Reflete a planilha UMI de 06/11/2026 e não cobre tudo o que existe.
- Tipos, eixos e "candidata a rodar sozinha" são propostas de classificação por palavras-chave, não verificadas nas fontes. "Candidata" não garante que rode sozinha.
- A maioria das licenças ainda não foi lida na fonte. **Confirme a licença antes de usar qualquer item em projeto.**
- Parte dos links foi proposta por busca externa e ainda não foi aberta.
- Nada é enviado pela rede: busca e marcas rodam no aparelho. Limpar os dados do navegador apaga as marcas.

## Como relatar um erro

Abra uma [issue](https://github.com/projetoindustrial/umi/issues) com o ID do item (por exemplo UMI-079) e o que está errado: licença, link, tipo ou descrição.

## Sobre este repositório

Contém só os arquivos do site (`index.html`, `data.json`, `chains.json`, `sw.js`, manifesto e ícones). A documentação de trabalho fica em outro repositório.
