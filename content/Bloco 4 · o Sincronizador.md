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

**o Sincronizador** — uma rotina que sincroniza sua pasta local com o repo, sozinha. Ela aponta o drift, puxa o que é seguro e **nunca apaga sem o gate de SHA confirmar**.

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

## Modelo de instrução curto (para outras rotinas)

Quando você criar a próxima rotina (um digest, um scan), a forma é a mesma:

```
Usa minha skill [nome]. Lê [estas fontes específicas].
Traz só [o que importa] das últimas [janela]. Máximo [N] itens. Na minha voz.
```

## Avaliar e decidir (depois do 1º ciclo)

- Chegou no lugar e horário certos? Útil sem você refazer? (1-2 ajustes na 1ª semana é normal.)
- Usaria toda semana → **mantém**. Olhou e não voltou → **desliga**. Rotina morta gasta cota.
- Status verde ≠ "funcionou". Verde só diz que a sessão abriu e fechou. Leia o relatório.

---

> [!tip] Quando tiver tempo
> A Semana 04 aprofunda rotinas e seus limites: Exercício 6 da Semana 04.
