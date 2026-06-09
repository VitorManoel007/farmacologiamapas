# Operações de Deploy — farmacologiamapas

Objetivo: atualizar apenas este projeto (`/var/www/farmaco.click`) para um commit/branch específico presente no GitHub e reiniciar a aplicação sem interferir em outros projetos da VPS.

Arquivos adicionados:
- `deploy/deploy.sh` — script de deploy para rodar na VPS.

Uso rápido (na VPS, como `root` ou com `sudo`):

- Atualizar para `main` (default):

```bash
cd /var/www/farmaco.click && sudo ./deploy/deploy.sh
```

- Atualizar para uma branch específica:

```bash
cd /var/www/farmaco.click && sudo ./deploy/deploy.sh feature-branch
```

- Atualizar para um commit específico (hash):

```bash
cd /var/www/farmaco.click && sudo ./deploy/deploy.sh 9f1a2b3
```

Comando de um único passo (colar no root da VPS) — baixa e executa o script diretamente do repositório (use apenas se confiar no conteúdo do repo):

```bash
curl -sSL https://raw.githubusercontent.com/VitorManoel007/farmacologiamapas/main/deploy/deploy.sh | sudo bash -s -- main
```

Boas práticas e notas importantes:

- O script só reinicia o processo da porta configurada (`5000`) se esse processo pertencer ao diretório do projeto. Isso evita matar processos de outros projetos.
- `npm ci` é usado para instalações reprodutíveis; o script roda `npm run build` se houver script `build` em `package.json`.
- Se você preferir usar `systemd` ou `pm2`, mantenha o gerenciamento fora deste script e ajuste para `systemctl restart <unit>` ou `pm2 restart <app>`.
- Sempre verifique os logs após o deploy: `tail -f /var/www/farmaco.click/app.log`.

Lembrete automático (procedimento humano):
- Quando houver um novo commit que você valida para deploy, execute o comando acima substituindo `main` pelo branch ou hash validado. Verifique o `HTTP status` local após o script.

