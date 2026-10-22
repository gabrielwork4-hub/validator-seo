# Validator SEO

Ferramenta para **validar a qualidade SEO de páginas web**: verifica elementos on-page
(title, meta description, headings, canonical, imagens/alt, Open Graph, dados estruturados)
e produz um relatório com pontuação e recomendações.

> Status: estrutura inicial do projeto. A implementação dos validadores virá em PRs seguintes.

## Estrutura

| Pasta    | Conteúdo                                   |
| -------- | ------------------------------------------ |
| `docs/`  | Documentação (integrações, decisões, guias) |
| `src/`   | Código-fonte do validador                  |
| `tests/` | Testes automatizados                       |

## Documentação

- [Índice da documentação](docs/README.md)

## Fluxo de contribuição

- Não há push direto em `main`: toda mudança entra por branch + Pull Request.
- Nunca commitar segredos (tokens, chaves, `.env`). O CI executa varredura com gitleaks.

## Licença

[MIT](LICENSE)
