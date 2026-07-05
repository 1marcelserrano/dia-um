---
title: "Bloco 4 · o Sincronizador · Prompts"
type: content
format: material
status: draft
date: 2026-06-16
semana: "Dia Um"
licao_origem: "Dia Um · Bloco 4"
origem: "DIA_UM/PROMPTS/BLOCO_4_AGENDAMENTO.md"
voz: Marcel Serrano / MSCS (Tradutor)
publish: true
cssclasses: [workbook]
tags: [material, prompt, keys, turma-zero, dia-um, publish]
---

> **MS CREATIVE KEYS** · Dia Um · Bloco 4

# Bloco 4 — o Sincronizador

Assista o vídeo do Bloco 4. **o Sincronizador** — uma rotina que sincroniza sua pasta local com o repo, sozinha. Ela aponta o drift, puxa o que é seguro e **nunca apaga sem o gate de SHA confirmar**.

## Como agendar

O Claude tem um painel **Routines**. o Sincronizador precisa tocar arquivos locais sem você na sessão — então a camada é **Desktop task** (não Cloud Routine, que não enxerga sua máquina).

1. Painel **Routines** → **New routine**.
2. Cole a instrução abaixo no campo do que você quer automatizado.
3. **Draft routine** → confira gatilho, instrução e entrega.
4. Camada **Desktop task**, apontando pra sua pasta local.
5. Agenda (ex.: diário, 6h). **Confira o fuso antes de salvar** — senão "6h" dispara na hora errada.
6. **Run now** pra testar 1 ciclo sem esperar o gatilho.

> Conte com **jitter**: a rotina pode disparar até ~30 min depois do horário marcado. Normal.

---

## Instrução do Sincronizador

Substitua `[caminho]` pela sua pasta local e `[nome]` pelo repo.

```
CAMADA:      Desktop task   (precisa dos arquivos locais sem você na sessão)
GATILHO:     Schedule "diário, 6h, fuso [seu fuso]"
FINALIDADE:  Manutenção
INSTRUÇÃO:
<papel>o Sincronizador, vigia de sincronia entre minha pasta local [caminho] e o repo [nome].</papel>
<contexto>Roda diário 6h, fuso [seu fuso]. Compara a pasta local [caminho] com o
branch default do repo [nome] — resolve o default de verdade, não assume main.</contexto>
<tarefa>
1. Resolve o branch default do repo (não assuma main).
2. Faz git fetch e lista o DRIFT em 3 baldes:
   - só local (existe na pasta, não no repo)
   - só remote (existe no repo, falta na pasta)
   - divergente (SHA local ≠ SHA remote do mesmo arquivo)
3. Para arquivos "só remote" / atualização limpa (fast-forward, sem conflito):
   puxa a atualização.
4. GATE DE SHA: depois de puxar, compara SHA local com SHA remote.
   Iguais = ok. Diferentes = PARA e não apaga nada.
5. Saída: relatório de drift + o que foi puxado + o que ficou PENDENTE de decisão.
</tarefa>
<regras>
- Nunca apaga nem sobrescreve arquivo local sem o gate de SHA confirmar.
- Conflito, divergência ou perda possível → marca [DECISÃO SUA], não resolve sozinha.
- Varre só os arquivos do escopo, nunca um rm na pasta inteira.
- Atualiza _MANIFEST (bump + changelog) na mesma passada.
</regras>
AVISO:       Não resolve conflito nem apaga "só local" no automático — isso pode ser
trabalho seu ainda não commitado. A rotina aponta o drift e puxa o seguro;
deletar/sobrescrever fica com você.
PRÓXIMO:     App Desktop → Routines → New routine → Schedule "diário 06:00",
camada Desktop task, apontando pra pasta local.
```

> [!warning] A linha que não se cruza
> Rotina entrega rascunho, você aperta o botão do que é irreversível. Pull limpo é reversível pelo histórico do git e pode rodar sozinho. Apagar "só local" e resolver conflito são irreversíveis — ficam com você.

---

## Plano B — seu app não tem Desktop task

A camada **Desktop task** é o que deixa a rotina tocar seus arquivos locais sem você na sessão. Nem todo plano/versão do app tem ela. Se você não acha "Desktop task" ao criar a rotina, o bloco não trava — você ainda sai com o Sincronizador, em modo manual:

1. **Guarde a instrução do Sincronizador** (o bloco acima) num arquivo `sincronizador.md` dentro do seu repo. Ela é a peça de valor — o agendamento é só o gatilho.
2. **Rode na mão, 1x ao dia.** Abra um chat no app Desktop apontado pra sua pasta, cole a instrução, deixe ele comparar e puxar o seguro. Leva 1 minuto.
3. **Conta como rotina no ar** pro Pulso: a lógica de sincronia existe e roda; o que falta é só o timer automático. Quando seu plano liberar o Desktop task, você cola a mesma instrução e marca o horário — zero retrabalho.

> [!info] O Sincronizador é a instrução, não o botão
> Ter a instrução pronta e rodando (mesmo na mão) é a terceira batida do Pulso. O agendamento automático é um upgrade, não um pré-requisito.

---

## o Radar — a segunda rotina (a que você sente)

O Sincronizador mantém a casa em ordem, mas trabalha em silêncio. **o Radar** é a rotina que te entrega algo na mão amanhã de manhã. É ela que faz você SENTIR o sistema trabalhando sem você.

Escolha **uma** das três. Só uma: rotina que você não lê gasta cota e morre esquecida. As outras duas ficam pra quando a primeira provar valor.

**Radar de fontes** — pra quem precisa acompanhar a área (diário):

```
CAMADA:      Cloud routine serve (não precisa dos seus arquivos locais).
GATILHO:     Schedule "diário, 7h, fuso [seu fuso]"
INSTRUÇÃO:
Lê estas fontes: [2-3 links de sites ou newsletters da sua área].
Traz só o que importa das últimas 24h pro trabalho de [sua função em 3 palavras].
Máximo 5 itens, 1 linha cada, com link. Dia sem nada relevante: diz "nada hoje" e para.
Tom: [cole aqui 3 linhas do seu writing-style.md].
```

**Revisão do dia** — pra quem fecha o dia com pontas soltas (diário):

```
CAMADA:      Desktop task (precisa ler sua pasta local).
GATILHO:     Schedule "diário, 18h, fuso [seu fuso]"
INSTRUÇÃO:
Lê [caminho da sua pasta de trabalho]. Me devolve em no máximo 10 linhas:
o que mudou hoje, o que ficou aberto, e a ÚNICA coisa que eu devia
fazer primeiro amanhã. Não mexe em nenhum arquivo: só lê e relata.
```

**Radar de concorrência** — pra quem vende (semanal):

```
CAMADA:      Cloud routine serve.
GATILHO:     Schedule "semanal, segunda, 7h, fuso [seu fuso]"
INSTRUÇÃO:
Visita [2-3 sites ou perfis públicos de concorrentes].
O que publicaram nos últimos 7 dias? Resumo por concorrente, máximo
3 linhas cada, fechando com "o que isso muda pra mim" em 1 linha.
Sem especular: só o que está publicado. Nada novo: diz "semana parada".
```

Agende igual ao Sincronizador: Routines → New routine → cole → confira o fuso → **Run now** pra testar. O mesmo aviso vale dobrado aqui: status verde só diz que a sessão rodou. Leia o relatório do teste antes de confiar.

## Avaliar e decidir (depois do 1º ciclo)

- Chegou no lugar e horário certos? Útil sem você refazer? (1-2 ajustes na 1ª semana é normal.)
- Usaria toda semana → **mantém**. Olhou e não voltou → **desliga**. Rotina morta gasta cota.
- Status verde ≠ "funcionou". Verde só diz que a sessão abriu e fechou. Leia o relatório.

---

## Exercício — feito quando

**Faça:** ponha as duas rotinas no ar. O Sincronizador agendado (ou no Plano B, com a instrução salva em `sincronizador.md`), apontando **só pro repo por enquanto** — repo é versionado, tudo ali é reversível. E um Radar escolhido, agendado e testado com **Run now**.

**Feito quando:** o Run now do Radar devolveu um relatório que você usaria de verdade, **e** o Sincronizador está no ar com o gate de SHA na instrução. Os dois.

O stress-test completo do Sincronizador (5 itens + falha forçada) virou a lição de casa do [Dia Dois](dia-dois.html): rode ele antes de ampliar o escopo do Sincronizador pra além do repo. Até lá, a regra de segurança já te cobre: ele nunca apaga sem o gate confirmar, e o repo tem histórico.

→ Marque a **terceira batida** no [o Pulso](pulso.html).

---

> [!tip] Quando tiver tempo
> A Semana 04 aprofunda rotinas e seus limites: Exercício 6 da Semana 04.
