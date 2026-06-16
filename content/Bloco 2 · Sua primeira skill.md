---
title: "Bloco 2 · Sua primeira skill · Prompts"
type: content
format: material
status: draft
date: 2026-06-16
semana: "Dia Um"
licao_origem: "Dia Um · Bloco 2"
origem: "DIA_UM/PROMPTS/BLOCO_2_SKILL.md"
voz: Marcel Serrano / MSCS (Tradutor)
publish: true
cssclasses: [workbook]
tags: [material, prompt, keys, turma-zero, dia-um, publish]
---

> **MS CREATIVE KEYS** · Dia Um · Bloco 2

# Bloco 2 — Sua primeira skill

Skill boa não cai do céu. Você preenche o esqueleto abaixo à mão, seguindo os passos. É mão na massa — e é isso que te ensina a fabricar a próxima sozinho.

## Antes de preencher

Em 1 frase cada, responda:
- **Quando essa skill deve disparar?** (gatilho específico)
- **Quando ela NÃO deve disparar?** (anti-gatilho)
- **Qual o trabalho dela?** (o job)
- **Qual o formato da saída?**

Não consegue responder? A skill ainda não está pronta — volte ao candidato.

A `description` é a peça mais crítica. Releia 3 vezes: específica o bastante pra não disparar em tudo, ampla o bastante pra não morrer, entendível em 5 segundos.

---

## Esqueleto — SKILL.md (preencha todos os colchetes)

```markdown
---
name: nome-da-skill
version: 1.0
changelog: "V1.0 — [data] — versão inicial."
description: "Use esta skill quando [GATILHO ESPECÍFICO]. Ela [JOB]. Aplica [PROCEDIMENTO BREVE] e devolve [FORMATO]."
---

# [Nome humano da skill]

## O que essa skill resolve

[1 parágrafo curto. O problema real que ela tira da sua mão. Não venda — descreva.]

## Quando ela se aplica

- [Caso 1 — específico]
- [Caso 2 — específico]
- [Caso 3 — específico]

## Quando NÃO se aplica

- [Caso fora do escopo 1]
- [Caso fora do escopo 2]

> Se o usuário pedir algo nesta seção, recuse educadamente e sugira o caminho certo.

## Procedimento

1. **[Passo 1]** — [ação concreta, em segunda pessoa].
2. **[Passo 2]** — [...].
3. **[Passo 3]** — [...].
4. **[Passo 4]** — [...].
5. **[Passo 5]** — [...].

[Cada passo é acionável. Não use "pense sobre X" — use "identifique X", "compare X com Y", "marque X como Z".]

## Formato de saída

[Estrutura exata do output.]

## Exemplo

**Input típico:**
[exemplo realista de input que essa skill receberia]

**Output esperado:**
[exemplo realista do output ideal pra esse input]

## Casos de borda

- **Se o input estiver muito curto** (sem dados suficientes), peça os dados que faltam antes de aplicar o procedimento.
- **Se o input tiver múltiplos itens**, processe um por vez e devolva consolidado.
- **Se o usuário pedir "modo rápido"**, ofereça versão resumida.

## Versão

- **v1** — [data] — versão inicial
```

---

## Instalar e testar

1. Salve em `/skills/nome-da-skill/SKILL.md`.
2. No Claude: **CUSTOMIZE → SKILLS → + → Upload Skill**. Confirme que aparece ativa.
3. Abra um chat novo e faça um pedido que **deveria** disparar a skill.
4. Cheque: disparou? O output bate com o formato que você declarou? É útil? Se falhar, anote e ajuste.

---

> [!tip] Quando tiver tempo
> O capstone da Semana 03 soma a **eval** — testar a skill com 3+ casos antes de confiar nela: Exercício Capstone da Semana 03.
