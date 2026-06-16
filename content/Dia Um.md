---
title: "Dia Um · um dia, duas sessões"
type: content
format: home
status: draft
date: 2026-06-16
semana: "Dia Um"
voz: Marcel Serrano / MSCS (Tradutor)
publish: true
cssclasses: [workbook]
tags: [home, keys, turma-zero, dia-um, publish]
---

> **MS CREATIVE KEYS** · Dia Um — um dia, duas sessões

# Dia Um

> [!info] O que é esta página
> A porta de entrada express do programa. Em um dia, sua v1 do sistema nasce e roda. As 4 semanas são onde ela ganha profundidade. Manda **DIA-UM** pra entrar.

## O princípio

O programa de 4 semanas é sequencial: você atravessa o fundamento inteiro antes de produzir. **Dia Um** inverte. Você não monta o fundamento pra depois produzir — você produz no dia 1, e o fundamento se empilha em cima do que já roda.

No fim do dia, a v1 do seu sistema está no ar: sua voz instalada, uma skill rodando, um repo vivo, **o Sincronizador** mantendo o repo em dia sozinho. Não é atalho pra fugir do programa. É a porta que coloca algo vivo na primeira sessão e depois te entrega pras 4 semanas.

**DIA-UM** é a senha da experiência: a palavra que você manda pra entrar, e o crachá que você carrega quando termina.

## O que o dia entrega — e o que adia

**Entrega:** Claude na sua voz · 1 skill rodando · 1 repo GitHub com seu sistema dentro · **o Sincronizador** (rotina que mantém o repo em dia sozinha) · 1 tarefa real rodada ponta a ponta.

**Adia (vem nas 4 semanas):** fundamentos de IA a fundo, pipeline de voz completo, token router, workflows vs agents, prompt evaluation, MCP, catálogo de rotinas.

Vender "um dia resolve tudo" como troca pelas semanas seria mentira. "Em um dia seu sistema nasce e roda" é verdade.

---

## O dia — duas sessões, 6 blocos

O dia parte em dois ganhos fechados, pra caber sem maratona. Crie uma pasta `MD-FILES/` (sugestão `~/MD-FILES/`); tudo do dia vive nela até virar repo na tarde. Os prompts pra copiar estão em **Prompts** (links em cada bloco).

```mermaid
flowchart LR
  subgraph M["Manhã · seu sistema pensa como você"]
    direction LR
    B0[0 · Primeiro disparo] --> B1[1 · Voz] --> B2[2 · 1ª skill]
  end
  subgraph T["Tarde · seu sistema vive fora do chat"]
    direction LR
    B3[3 · Repo vivo] --> B4[4 · o Sincronizador] --> F[Fecho · o Pulso]
  end
  M --> T
```

### Manhã — seu sistema pensa como você (~3,5h)

**Bloco 0 — Primeiro disparo · 30 min.** Em vez de teoria antes de produzir, o dia abre produzindo. Dispare um prompt que já carrega contexto, veja sair algo aproveitável, e só então olhe pra trás. Você deu **contexto**, não só ordem; veio em **markdown**; e o que ele errou mostra os **limites** — não peça dado em tempo real, conta exata, nem decisão por você.

**Bloco 1 — Claude na sua voz · 90 min.** Junte 2-3 textos reais seus. Rode o WRITEPRINT, escreva `about-me.md` e `writing-style.md` (5 seções; a lista *evitar* vale mais que a *usar*). Teste num chat novo: "descreve como sou profissionalmente". Saiu você? Use numa tarefa real hoje — primeira batida no Pulso.

→ Prompts: [[Prompts/Bloco 1 · Claude na sua voz|Bloco 1 · Claude na sua voz]]

**Bloco 2 — Sua primeira skill · 120 min.** Skill = receita pré-pronta que o Claude ativa sozinho. Liste 5+ tarefas que você já fez 3+ vezes; a de padrão mais claro é a de hoje. Preencha o esqueleto: description (o roteador), procedimento acionável, casos de borda. Instale e teste num chat novo — segunda batida no Pulso.

→ Prompts: [[Prompts/Bloco 2 · Sua primeira skill|Bloco 2 · Sua primeira skill]]

### Tarde — seu sistema vive fora do chat (~2,5h)

**Bloco 3 — Seu repo vivo · 90 min.** Tire o sistema de dentro do chat. Crie um repo `md-files` no GitHub (Private), clone com o GitHub Desktop, copie seu contexto e sua skill pra dentro, commit + push. Peça ao Claude um plano de organização (sem executar), aprove, deixe ele mover (nunca apagar). A ponte pro Bloco 4: o repo existe, mas você ainda alimenta à mão — e a chave da automação é uma trava chamada gate de SHA.

→ Prompts: [[Prompts/Bloco 3 · Seu repo vivo|Bloco 3 · Seu repo vivo]]

**Bloco 4 — o Sincronizador · 60 min.** **o Sincronizador** dispara no horário, compara sua pasta local com o repo, aponta o drift, puxa o que é seguro — e **nunca apaga sem o gate de SHA confirmar**. Painel Routines → New routine → camada Desktop task → agenda → Run now pra testar. **Confira o fuso antes de salvar.** Terceira batida no Pulso.

→ Prompts: [[Prompts/Bloco 4 · o Sincronizador|Bloco 4 · o Sincronizador]]

**Fecho · 20 min.** Rode uma tarefa real ponta a ponta pelo sistema: contexto carregado → skill ativada → resultado na sua voz. Marque **o Pulso**: 1 tarefa rodada, 1 skill criada, 1 rotina no ar. Está vivo.

---

## o Pulso — o score

Não mede "quão pronto você está". Mede o que você fez rodar. **o Pulso** bate em três: **tarefas reais rodadas** + **skills criadas** + **rotinas no ar**. Um dia bem feito fecha com pelo menos 1 batida em cada. Não há nota de "completo". Há "está vivo e crescendo".

> [!tip] Sua v1 está no ar
> Daqui você evolui pra sempre. Cada bloco do dia vira fundamento sólido no programa completo de 4 semanas — é pra onde você vai quando quiser aprofundar.
