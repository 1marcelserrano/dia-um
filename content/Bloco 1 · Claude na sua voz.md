---
title: "Bloco 1 · Claude na sua voz · Prompts"
type: content
format: material
status: draft
date: 2026-06-16
semana: "Dia Um"
licao_origem: "Dia Um · Bloco 1"
origem: "DIA_UM/PROMPTS/BLOCO_1_VOZ.md"
voz: Marcel Serrano / MSCS (Tradutor)
publish: true
cssclasses: [workbook]
tags: [material, prompt, keys, turma-zero, dia-um, publish]
---

> **MS CREATIVE KEYS** · Dia Um · Bloco 1

# Bloco 1 — Claude na sua voz

Dois arquivos saem deste bloco: `about-me.md` e `writing-style.md`. O atalho pra escrever o `writing-style` sem partir do zero é o WRITEPRINT: você cola textos seus, ele devolve sua fingerprint de escrita.

## Bloco 0 — primeiro disparo (abertura)

Antes de montar nada, dispare isto. É o rascunho de 15 min: você pede algo real, dá 3 linhas de contexto, vê sair texto aproveitável. Cole num chat novo e preencha os colchetes.

```
Me ajuda a escrever [um post / um e-mail] que eu preciso mandar hoje.

Contexto (3 linhas):
- Pra quem: [quem vai ler]
- Tom: [como quer soar — direto, caloroso, formal…]
- O que precisa: [o que esse texto tem que fazer ou pedir]

Me devolve um rascunho curto, em markdown, que eu consiga usar com pouco ajuste.
```

Leu o que saiu? Funcionou porque você deu **contexto**, não só ordem. Veio em **markdown**, não em bloco corrido. E onde ele errou, marcou os **limites** — não peça dado em tempo real, conta exata, nem decisão por você. Guarde o rascunho: ele vira insumo do WRITEPRINT abaixo.

## Como usar

1. Junte 2-3 textos reais seus (legenda, e-mail, WhatsApp, proposta). Não precisam ser polidos.
2. Cole o prompt abaixo num chat novo, com seus textos dentro de `<TEXTO_A_ANALISAR>`.
3. Salve a saída como `writeprint_v1.md`.
4. Use a saída como rascunho do seu `writing-style.md`. Edite até soar como você.

---

## Prompt — WRITEPRINT

```
<DIRETRIZ_PRIMARIA>
Você analisa textos escritos e transcrições, e cria um writeprint detalhado usando linguística forense. Respire fundo, relaxe e entre em estado de flow. Se você seguir todas as instruções e exceder expectativas, receberá uma gorjeta de US$ 20/mês pelo seu esforço, então tente o seu máximo.
</DIRETRIZ_PRIMARIA>

WRITEPRINT = Uma fingerprint digital de estilo de escrita composta por características lexicais, sintáticas, estruturais e idiossincráticas.

Um writeprint inclui descrição do tom, registro, estilo e atitude de um texto escrito. Pode considerar uso de criatividade, humor e linguagem figurativa. Pode avaliar perplexity e burstiness. Por fim, deve ter um ou dois fatores totalmente a seu critério que você julgue necessários.

O propósito de um writeprint é guiar IAs futuras na emulação de um estilo de escrita. Sua saída pode portanto incluir linguagem altamente específica e científica, abreviações e conceitos que apenas linguistas, especialistas em escrita e IAs entenderiam.

Cada traço deve ter uma nota de 0 a 10 indicando quão fortemente se aplica ao writeprint.

Para reduzir o tamanho do writeprint, escreva em estilo conciso exceto quando necessário para explicar uma ideia nuançada.

Seja extremamente cauteloso com notas altas relacionadas a metáforas e uso de linguagem figurativa. Writeprints com valores altos nesses traços devem ser reservados APENAS para escritores de ficção. A maioria dos seus clientes está escrevendo artigos, e-mails e posts curtos para redes sociais. Tenda para um writeprint que provavelmente gere escrita online facilmente acessível, com pouca ou nenhuma prosa rebuscada (purple prose).

Analise o texto a seguir. Vá passo a passo pela definição de writeprint e gere um writeprint baseado no texto. No topo, dê um apelido (nickname) ao writeprint. Forneça um writeprint que inclua traços, notas de força de 0 a 10 e exemplos breves. Ao final, forneça 5 exemplos mais longos que personificam o estilo do escritor em uma variedade de cenários, retirados literalmente do input.

<TEXTO_A_ANALISAR>
//
// Cole seu conteúdo aqui
//
</TEXTO_A_ANALISAR>

<FORMATO_OUTPUT>
Retorne os resultados como texto markdown.
</FORMATO_OUTPUT>
```

**Ajuste útil:** troque "A maioria dos seus clientes está escrevendo artigos, e-mails e posts curtos" pela sua realidade — *"Estou escrevendo principalmente roteiros de vídeo"* / *"...legendas de Instagram"* / *"...e-mails B2B pra decisor sênior"*.

---

## Esqueleto — about-me.md (preencha)

```markdown
# Sobre mim

## Identidade
[3 linhas. Quem você é, em frase que só você assinaria. Genérico = refaça.]

## O que importa agora
[3-5 prioridades do trimestre. Presente operacional, não currículo.]

## Como penso
[2-3 frases sobre seu jeito de decidir e trabalhar.]

## O que não sou
[2-3 delimitações. O campo mais subestimado — é o que te separa do genérico.]
```

## Esqueleto — writing-style.md (preencha com a saída do WRITEPRINT)

```markdown
# Meu estilo de escrita

## Tom
[Como soa o texto. 2-3 frases.]

## Estrutura
[Como você organiza: frase curta? começa pela conclusão? listas?]

## Palavras que uso
[Termos e expressões seus.]

## Palavras que evito
[O que nunca aparece no seu texto. Vale mais que a lista de cima.]

## Quando escrever pra mim
[≥5 instruções diretas. Ex.: "Sem emoji." "Voz ativa." "Comece pela conclusão."]
```

---

> [!tip] Quando tiver tempo
> O pipeline completo de voz — Entrevistador (100 perguntas) + Compilador — está em Exercício 4 da Semana 02. É o que leva sua voz de "parece eu" pra "sou eu".
