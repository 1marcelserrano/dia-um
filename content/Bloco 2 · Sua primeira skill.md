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

Assista o vídeo do Bloco 2. É o bloco mais longo do dia (120 min). Vá pelos checkpoints: escolher o candidato, preencher o esqueleto, instalar, testar.

## Escolher o candidato

Você não inventa a skill. Pega algo que já faz repetido e congela o método. Liste 5+ tarefas que você já fez **3 ou mais vezes** do mesmo jeito — um tipo de e-mail, um resumo de reunião, uma legenda, um relatório. A de padrão mais claro é a skill de hoje.

> [!info] Travou na lista?
> Não force as 5. Pegue a tarefa que você fez **na última semana** e repetiria amanhã sem pensar. Uma só já basta pra começar. As outras viram skill depois.

## Antes de preencher

Em 1 frase cada, responda:
- **Quando essa skill deve disparar?** (gatilho específico)
- **Quando ela NÃO deve disparar?** (anti-gatilho)
- **Qual o trabalho dela?** (o job)
- **Qual o formato da saída?**

Não consegue responder? A skill ainda não está pronta — volte ao candidato.

A `description` é a peça mais crítica. Releia 3 vezes: específica o bastante pra não disparar em tudo, ampla o bastante pra não morrer, entendível em 5 segundos.

> [!info] Checkpoint (na metade do bloco)
> Antes de instalar, confira: as 4 perguntas acima estão respondidas e o `SKILL.md` tem procedimento acionável (passos com verbo, não "pense sobre X")? Se sim, o miolo está pronto — falta só instalar e provar. Se a `description` ainda está vaga, conserte ela primeiro: é ela que decide se a skill dispara.

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

## Plano B — não disparou

A skill instalou mas não ativou sozinha no teste? Não é beco sem saída. Cheque nesta ordem:

1. **Aparece ativa na lista?** CUSTOMIZE → SKILLS: a skill tem que estar lá e ligada. Se não subiu, refaça o Upload — o arquivo precisa se chamar `SKILL.md` e estar dentro de uma pasta com o nome da skill.
2. **O pedido bate com a `description`?** Reescreva seu pedido de teste usando as palavras do gatilho que você declarou. Se mesmo assim não dispara, a `description` está vaga ou estreita demais — alargue o gatilho em 1 frase.
3. **Chat novo?** Skill carregada no meio de uma conversa antiga às vezes não pega. Abra um chat limpo e teste de novo.
4. **Ainda não?** Dispare na marra: comece o pedido com "Usa a skill [nome] pra…". Se assim ela funciona e entrega o formato certo, a skill está boa — o que falta afinar é só o gatilho da `description`. Isso conta como feito pra hoje; o ajuste fino do roteador você faz depois.

---

## Exercício — feito quando

**Faça:** preencha o `SKILL.md` de um candidato seu, instale (CUSTOMIZE → SKILLS → Upload) e dispare num chat novo.

**Feito quando:** a skill **ativou sozinha** com um pedido natural (sem você dizer "usa a skill") **e** o output **bate com o formato** que você declarou. Os dois, não um só. Se ativou mas o formato fugiu, ajuste o procedimento. Se o formato bate mas só dispara na marra, vale como feito hoje (veja o Plano B) e o gatilho fica de ajuste pra depois.

→ Marque a **segunda batida** no [o Pulso](pulso.html).

---

> [!tip] Quando tiver tempo
> O capstone da Semana 03 soma a **eval** — testar a skill com 3+ casos antes de confiar nela: Exercício Capstone da Semana 03.
