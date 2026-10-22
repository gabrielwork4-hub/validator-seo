# Integrações: Linear, GitHub e Slack

Projeto **Validator SEO** — time Linear **Gabriel SEO**, repositório
`gabrielwork4-hub/validator-seo`, canal Slack `#p-validator-seo`.

## Visão geral do fluxo

1. Issue no Linear (ex.: `GAB-15`) → branch com o identificador no nome (`feat/GAB-15-ci`).
2. PR no GitHub com o identificador no título ou na descrição → Linear vincula o PR à issue.
3. Mudança de status do PR (aberto, em review, merged) → atualiza o status da issue no Linear.
4. Eventos relevantes (issue criada/concluída, PR aberto/merged, falha de CI) → notificação em `#p-validator-seo`.

## Convenções

- Branches: `<tipo>/GAB-<n>-<slug>`. O Linear também gera nomes via "Copy git branch name".
- Título de PR começa com `GAB-<n>:`.
- Sem push direto em `main`; tudo via PR.
- Nunca colocar tokens/webhooks no repositório. Segredos ficam em *GitHub Secrets* ou nas configurações dos apps.

## Linear ↔ GitHub

Configurado em **Linear → Settings → Integrations → GitHub** (app oficial do Linear):

- Conectar a conta `gabrielwork4-hub` e autorizar o repositório `validator-seo`.
- Associar o repo ao time *Gabriel SEO*.
- Ativar automações de workflow: PR aberto → *In Progress/In Review*; PR merged → *Done*.
- Ativar vinculação por nome de branch e por menção no PR.

## Linear ↔ Slack

Configurado em **Linear → Settings → Integrations → Slack**:

- Conectar o workspace Slack.
- No time *Gabriel SEO* (ou no projeto Validator SEO), configurar notificações para `#p-validator-seo`.

## GitHub ↔ Slack

Usar o app oficial **GitHub for Slack** no workspace; no canal `#p-validator-seo`:

```
/invite @GitHub
/github subscribe gabrielwork4-hub/validator-seo issues pulls commits:main reviews comments
```

Alternativa sem app: *Incoming Webhook* do Slack + GitHub Action. A URL do webhook deve ficar em *GitHub Secrets*, nunca no repo.

## Estado atual e ações manuais

| Item | Estado | Quem faz |
| ---- | ------ | -------- |
| Repositório público criado | Feito (via `gh`) | — |
| Fluxo branch + PR | Em uso | — |
| Instalar/autorizar app Linear no GitHub | Pendente | Dono da conta (OAuth no navegador) |
| Associar repo ao time Gabriel SEO no Linear | Pendente | Admin do Linear |
| Conectar Linear ao Slack e escolher `#p-validator-seo` | Pendente | Admin do workspace |
| Instalar GitHub for Slack e rodar `/github subscribe` | Pendente | Admin do workspace |
| Proteção da `main` (exigir PR e CI verde) | Recomendado | Dono do repo (Settings → Branches) |

> Estas ações exigem OAuth/consentimento de apps na UI e não podem ser feitas pelo `gh`.
> Na verificação feita pelo agente, o canal `#p-validator-seo` não apareceu nas buscas do Slack
> (pode não existir, ou ser privado sem acesso): confirmar/criar o canal.
