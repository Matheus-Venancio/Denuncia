# Sistema de Denúncias - React + Supabase

Uma aplicação React moderna para listar denúncias com uma interface estilizada similar ao Excel, integrada ao Supabase.

## �� Funcionalidades

- ✅ **Tabela responsiva** com design moderno
- ✅ **Listagem de denúncias** com campos: Nome, Telefone, Denúncia, Localização e Imagem
- ✅ **Interface otimizada** para dispositivos móveis
- ✅ **Integração com Supabase** para persistência de dados
- ✅ **Loading states** e tratamento de erros
- ✅ **Botão de atualização** para buscar dados em tempo real
- ✅ **Ordenação** por ID (mais recentes primeiro)

## 🛠️ Tecnologias

- React 19
- Supabase (banco de dados)
- CSS3 com design responsivo
- Vercel (deploy)

## 📋 Pré-requisitos

- Node.js 18+ 
- Conta no Supabase ✅ **CONFIGURADO**
- Conta no Vercel (para deploy)

## ⚙️ Configuração

### ✅ **SUPABASE CONFIGURADO**

O projeto já está configurado com as credenciais do Supabase:
- **URL**: `https://yxruawliddeyurfmqzgn.supabase.co`
- **Tabela**: `denuncias`
- **Campos**: id, nome, telefone, denuncia, imagem, localizacao

### 1. Instalação das dependências

```bash
npm install
```

### 2. Executar o projeto

```bash
npm start
```

Acesse: http://localhost:3000

## 🗄️ Estrutura da Tabela

A tabela `denuncias` no Supabase contém os seguintes campos:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | SERIAL | Identificador único |
| `nome` | VARCHAR(255) | Nome do denunciante |
| `telefone` | VARCHAR(20) | Telefone do denunciante |
| `denuncia` | TEXT | Descrição da denúncia |
| `imagem` | TEXT | URL da imagem |
| `localizacao` | TEXT | Local da denúncia |
| `created_at` | TIMESTAMP | Data de criação |

## 🚀 Deploy no Vercel

### 1. Preparar o projeto
```bash
# Fazer commit das alterações
git add .
git commit -m "Projeto configurado e funcionando"
git push origin main
```

### 2. Conectar ao Vercel
- Acesse [vercel.com](https://vercel.com)
- Faça login com GitHub
- Clique em "New Project"
- Importe seu repositório

### 3. Deploy
- Clique em "Deploy"
- Aguarde a conclusão
- Sua aplicação estará disponível em `https://seu-projeto.vercel.app`

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- ✅ Desktop
- ✅ Tablet  
- ✅ Mobile

## 🎨 Personalização

Os estilos podem ser facilmente personalizados editando:
- `src/App.css` - Layout principal
- `src/components/DataTable.css` - Estilos da tabela

## 🔧 Estrutura do Projeto

```
src/
├── components/
│   ├── DataTable.js      # Componente da tabela (CONECTADO AO SUPABASE)
│   └── DataTable.css     # Estilos da tabela
├── supabaseClient.js     # Configuração do Supabase ✅
├── App.js               # Componente principal
├── App.css              # Estilos principais
└── index.js             # Ponto de entrada
```

## 📝 Campos da Tabela

- **Nome**: Nome do denunciante
- **Telefone**: Contato do denunciante (formato: +55 19 98146-6623)
- **Denúncia**: Descrição da denúncia
- **Localização**: Endereço/local da denúncia
- **Imagem**: URL da imagem do bucket de storage

## 🚨 Tratamento de Erros

A aplicação inclui:
- ✅ Loading states durante carregamento
- ✅ Tratamento de erros de conexão
- ✅ Botão de retry em caso de falha
- ✅ Mensagem quando não há dados
- ✅ Tratamento de imagens quebradas

## 🔄 Funcionalidades Ativas

- ✅ **Conexão com Supabase** funcionando
- ✅ **Busca de dados** em tempo real
- ✅ **Ordenação** por ID decrescente
- ✅ **Botão de atualização** para refresh
- ✅ **Responsividade** completa
- ✅ **Tratamento de erros** robusto

## 📞 Suporte

Para dúvidas ou problemas, verifique:
1. Console do navegador (F12)
2. Logs do Vercel
3. Logs do Supabase
4. Documentação das tecnologias utilizadas

## 🔄 Próximas Atualizações

- [ ] Filtros e busca
- [ ] Paginação
- [ ] Ordenação por colunas
- [ ] Exportação para Excel
- [ ] Upload de imagens
- [ ] Autenticação de usuários
- [ ] Formulário para adicionar denúncias

---

## 🎯 **STATUS: FUNCIONANDO**

✅ **Projeto configurado e conectado ao Supabase**
✅ **Dados sendo carregados da tabela real**
✅ **Interface responsiva e funcional**
✅ **Pronto para deploy no Vercel**
