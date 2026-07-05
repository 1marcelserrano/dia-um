---
title: "Pack · Prompts de Bancada · 10 prompts pro dia seguinte"
type: content
format: material
status: draft
date: 2026-07-05
semana: "Dia Um"
licao_origem: "Dia Um · Pack de Bancada"
origem: "DIA_UM/PROMPTS/PACK_PROMPTS_DE_BANCADA.md"
voz: Marcel Serrano / MSCS (Tradutor)
publish: true
cssclasses: [workbook]
tags: [material, prompt, pack, keys, turma-zero, dia-um, publish]
---

> **MS CREATIVE KEYS** · Dia Um · Pack de Bancada

# Prompts de Bancada — 10 prompts pro dia seguinte

O Dia Um termina com seu sistema no ar. Este pack existe pra terça-feira: a hora em que você abre o Claude com trabalho de verdade na mesa e precisa de repertório, não de teoria.

São 10 prompts, um por tarefa que você repete toda semana. Todos seguem a mesma regra do Bloco 0: contexto em 3 linhas, saída em markdown, rascunho que você usa com pouco ajuste.

## Como usar (vale pros 10)

1. Abra um chat com seu `about-me.md` e seu `writing-style.md` no contexto (anexados ou no Project). É isso que faz a saída sair na SUA voz.
2. Cole o prompt e preencha os colchetes. Nada inventado: use a tarefa real.
3. Saiu genérico? Falta contexto nas 3 linhas, não talento no modelo. Refaça com mais especificidade.

Guarde este arquivo em `prompts/` no seu repo. Ele é parte do sistema: versionado, seu, disponível em qualquer modelo.

---

## 1 · E-mail difícil

Pra cobrança, recusa ou pedido desconfortável. O prompt te obriga a declarar o que você quer que aconteça — que é exatamente o que e-mail difícil costuma esconder.

```
Preciso escrever um e-mail difícil. Escreve na minha voz (writing-style.md em contexto).

* Pra quem: [nome e relação: cliente antigo, fornecedor, chefe...]
* A situação em 2 linhas: [o que aconteceu até aqui]
* O que esse e-mail precisa conseguir: [a ação concreta que eu quero do outro lado]
* O que eu NÃO posso perder: [a relação? o contrato? o prazo?]
Me devolve: assunto + corpo curto, direto sem ser seco, com o pedido claro num parágrafo próprio. Sem juridiquês, sem pedido de desculpa desnecessário.
```

## 2 · Post a partir de uma ideia solta

A ideia chegou no banho, morre no bloco de notas. Este prompt transforma o fragmento em rascunho publicável.

```
Tenho uma ideia solta pra post. Transforma em rascunho na minha voz.

* A ideia crua: [cole do jeito que anotou, sem polir]
* Onde vai: [LinkedIn / Instagram / newsletter]
* Pra quem: [quem lê meu conteúdo]
Me devolve: 1 rascunho com gancho na primeira linha + 2 variações só do gancho. Formato do canal (quebras curtas se for rede social). Sem hashtag a menos que eu peça.
```

## 3 · Resumo de reunião a partir de notas cruas

Notas soltas viram registro que você e o cliente conseguem usar.

```
Transforma minhas notas cruas de reunião num resumo utilizável.

* A reunião: [com quem, sobre o quê]
* Minhas notas: [cole tudo, bagunçado mesmo]
* Quem vai receber o resumo: [só eu / o cliente / o time]
Me devolve em markdown: decisões tomadas, pendências com dono e prazo, e o que ficou em aberto. Três seções, nada mais. O que você não achar nas notas, marca como [NÃO REGISTRADO], não inventa.
```

## 4 · Proposta a partir de briefing de 5 linhas

Do pedido vago do cliente pra estrutura de proposta que você preenche com seus números.

```
Monta o esqueleto de uma proposta comercial na minha voz.

* O cliente: [quem é, tamanho, contexto]
* O que ele pediu: [em 1-2 linhas, do jeito que ele falou]
* O que eu realmente vou entregar: [sua leitura do que resolve]
* Prazo e formato de trabalho: [ex.: 4 semanas, remoto, 2 reuniões]
* Faixa de investimento: [valor ou "deixa em aberto"]
Me devolve: entendimento do problema, proposta de solução em etapas, o que está incluído e o que não está, próximos passos. Os números finais ficam comigo: onde faltar dado, deixa [PREENCHER].
```

## 5 · Resposta a cliente insatisfeito

Responder no calor queima a relação. Este prompt segura sua mão e mantém seu tom.

```
Um cliente reclamou e eu preciso responder bem. Escreve na minha voz.

* O que ele disse: [cole a mensagem dele inteira]
* O que de fato aconteceu: [sua versão honesta, inclusive se houve erro seu]
* O que eu posso oferecer: [refazer, prazo novo, reembolso parcial, nada]
Me devolve uma resposta que: reconhece o ponto dele sem se rebaixar, explica sem parecer desculpa esfarrapada, e fecha com o próximo passo concreto. Se eu errei, admite em uma frase direta. Sem "lamentamos qualquer transtorno".
```

## 6 · Repurpose — 1 texto vira 3 formatos

O texto que funcionou uma vez trabalha três.

```
Pega este texto meu e desdobra em 3 formatos, mantendo minha voz.

* O texto original: [cole]
* Os 3 destinos: [ex.: post LinkedIn / sequência de stories / e-mail pra lista]
* O que não pode se perder: [a ideia central em 1 linha]
Me devolve os 3, cada um no formato nativo do canal, não o mesmo texto espremido três vezes. Muda a porta de entrada de cada um.
```

## 7 · Revisão brutal antes de enviar

O par de olhos que você não tem às 23h. Ele não reescreve: aponta.

```
Revisa este texto como editor exigente, antes de eu enviar. NÃO reescreve ainda.

* O texto: [cole]
* Pra quem vai e o que precisa conseguir: [1 linha]
Me devolve: (1) as 3 frases mais fracas e por quê, (2) o que está sobrando, (3) o que está faltando pro objetivo, (4) nota de 0 a 10 pra clareza. Só depois do meu ok você propõe a versão revisada.
```

## 8 · Preparação de reunião

Quinze minutos antes da conversa que importa.

```
Me prepara pra uma reunião importante.

* A reunião: [com quem, cargo, empresa]
* O que eu quero sair com: [decisão, aprovação, informação]
* O histórico em 3 linhas: [o que já aconteceu entre nós]
* O que eu temo que aconteça: [a objeção ou saia justa provável]
Me devolve: pauta enxuta de 3 pontos, as 5 perguntas que eu devo fazer, as 3 objeções prováveis com resposta curta pra cada, e a frase de abertura.
```

## 9 · Descrição de oferta na sua voz

Pra página, bio, proposta ou resposta de direct. A mesma oferta, dita como você diria.

```
Escreve a descrição da minha oferta na minha voz (about-me.md e writing-style.md em contexto).

* O que eu vendo: [serviço/produto em 1 linha]
* Pra quem: [o cliente que mais se beneficia]
* O resultado que ele leva: [o depois, concreto]
* O que me diferencia: [por que comigo e não com o outro]
Me devolve 3 tamanhos: 1 linha (bio), 1 parágrafo (proposta), e versão completa com 3 blocos (página). Sem promessa que eu não fiz, sem superlativo vazio.
```

## 10 · Follow-up de proposta parada

A proposta foi e o silêncio ficou. Este prompt escreve a cutucada que não implora.

```
Preciso fazer follow-up de uma proposta sem resposta. Na minha voz.

* Enviei quando: [data]
* O que era: [proposta de quê, valor se quiser]
* Último sinal de vida: [a última coisa que a pessoa disse]
* Quantos follow-ups já fiz: [número]
Me devolve 2 versões: uma leve (primeiro follow-up) e uma de fechamento de ciclo (última tentativa, com data-limite educada). Nenhuma das duas pede desculpa por existir.
```

---

## Exercício — feito quando

**Faça:** amanhã, escolha 1 prompt deste pack e rode numa tarefa real da sua semana, com seus dois arquivos de voz no contexto.

**Feito quando:** a saída foi usada de verdade (enviada, publicada ou aproveitada) com pouco ajuste. Um prompt rodado em tarefa real vale mais que os 10 lidos.

→ Este pack mora em `prompts/` no seu repo. Prompt que você ajustar e melhorar, commita: a versão boa é a sua.
