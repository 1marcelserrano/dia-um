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

Assista o vídeo do Bloco 1. O rascunho que saiu no Bloco 0 já soou um pouco com você. Aqui isso vira permanente.

## Como usar

1. Junte 2-3 textos reais seus (legenda, e-mail, WhatsApp, proposta). Não precisam ser polidos.
2. Cole o prompt abaixo num chat novo, com seus textos dentro de `<TEXTO_A_ANALISAR>`.
3. Salve a saída como `writeprint_v1.md`.
4. Use a saída como rascunho do seu `writing-style.md`. Edite até soar como você.

> [!info] Checkpoint (na metade do bloco)
> Antes de seguir pros esqueletos, confira: você rodou o WRITEPRINT e tem um `writeprint_v1.md` salvo? Se sim, a parte difícil acabou — o resto é copiar a saída pros dois arquivos e aparar. Se não, volte um passo: o WRITEPRINT precisa dos seus textos colados dentro de `<TEXTO_A_ANALISAR>` pra rodar.

---

## Prompt — WRITEPRINT

```
<DIRETRIZ_PRIMARIA>
Você analisa textos escritos e transcrições e cria um writeprint detalhado usando linguística forense.
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

## Prompt — Entrevistador Express (o about-me sem página em branco)

O writing-style nasce do WRITEPRINT. O about-me nasce deste prompt: em vez de encarar 4 campos vazios, você responde 10 perguntas e recebe o arquivo montado pra aparar. Cole num chat novo:

```
Você vai me entrevistar pra montar meu about-me.md — o arquivo que ensina
uma IA quem eu sou profissionalmente.

Me faça as 10 perguntas abaixo, UMA POR VEZ. Espere minha resposta antes
da próxima. Resposta vaga ou que serviria pra qualquer pessoa da minha
área: pergunte de novo, mais fundo, antes de seguir.

1. O que você faz e pra quem? Responda como falaria num churrasco, não no LinkedIn.
2. O que paga suas contas hoje, em 1 frase?
3. Quais 3 coisas você está tentando fazer acontecer neste trimestre?
4. Quando o prazo aperta, você decide por dados, instinto ou conselho? Dê um exemplo real.
5. O que te irrita no jeito que outras pessoas da sua área trabalham ou escrevem?
6. O que as pessoas costumam errar sobre você ou sobre o seu trabalho?
7. O que você NÃO é e NÃO faz, mesmo quando pedem?
8. Que palavras ou clichês você baniria do seu texto pra sempre?
9. Quem lê o que você escreve, e o que essa pessoa quer de você?
10. Complete, sem pensar muito: "no fim das contas, meu trabalho é ___".

No fim, monte meu about-me.md com exatamente estas 4 seções:
## Identidade · ## O que importa agora · ## Como penso · ## O que não sou.
Primeira pessoa, frases curtas, zero adjetivo vazio. Use minhas palavras,
não as suas.
```

Saiu o arquivo? Apare o que não soou você e salve como `about-me.md` na sua `MD-FILES/`. O esqueleto abaixo fica como referência da estrutura — com o Entrevistador, você não parte mais do zero.

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

## Exercício — feito quando

**Faça:** rode o WRITEPRINT com 2-3 textos seus, monte o `about-me.md` e o `writing-style.md`, e teste num chat novo — peça "descreve em 2 frases como eu escrevo / como sou profissionalmente".

**Feito quando:** num chat limpo (só os dois `.md` no contexto), a descrição **soa você** e não um genérico. O teste binário: se a mesma descrição serviria pra qualquer outra pessoa da sua área, falta especificidade — volte na seção *Palavras que evito* e nas delimitações do *O que não sou*, que é onde a sua voz se separa do genérico.

→ Marque a **primeira batida** no [o Pulso](pulso.html).

---

> [!tip] Quando tiver tempo
> O pipeline completo de voz — Entrevistador (100 perguntas) + Compilador — está em Exercício 4 da Semana 02. É o que leva sua voz de "parece eu" pra "sou eu".
