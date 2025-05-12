# LDB Landing Page

Página de vendas otimizada para performance.

## Tecnologias

- Next.js 14
- TypeScript
- React 18

## Como iniciar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run export` - Gera os arquivos HTML estáticos

## Exportação para HTML estático

Quando terminar o desenvolvimento, execute:

```bash
npm run export
```

Os arquivos HTML estáticos serão gerados na pasta `out/`. Esta pasta conterá:
- HTML puro
- CSS otimizado
- JavaScript minificado
- Imagens e outros assets

Para usar apenas o HTML:
1. Copie o conteúdo da pasta `out/`
2. O arquivo principal será o `index.html`
3. Certifique-se de manter a estrutura de pastas dos assets 