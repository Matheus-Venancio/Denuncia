# 📋 Configuração Detalhada do Projeto

## 🔑 Configuração do Supabase

### 1. Criar conta no Supabase
- Acesse [supabase.com](https://supabase.com)
- Faça login ou crie uma conta
- Clique em "New Project"

### 2. Configurar o projeto
- Escolha um nome para o projeto
- Defina uma senha forte para o banco
- Escolha uma região próxima ao Brasil
- Aguarde a criação do projeto (pode levar alguns minutos)

### 3. Obter credenciais
- No projeto criado, vá em **Settings** > **API**
- Copie a **Project URL** e **anon public** key
- Estas são suas credenciais de conexão

### 4. Configurar no projeto

#### Opção A: Arquivo local (desenvolvimento)
Edite `src/supabaseClient.js`:

```javascript
const supabaseUrl = 'https://seu-projeto.supabase.co'
const supabaseAnonKey = 'sua-chave-anonima-aqui'
```

#### Opção B: Variáveis de ambiente (recomendado para produção)
Crie um arquivo `.env` na raiz do projeto:

```bash
REACT_APP_SUPABASE_URL=https://seu-projeto.supabase.co
REACT_APP_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

## 🗄️ Configuração do Banco de Dados

### 1. Criar tabela
No Supabase, vá em **SQL Editor** e execute:

```sql
-- Criar tabela de denúncias
CREATE TABLE denuncias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  denuncia TEXT NOT NULL,
  localizacao TEXT NOT NULL,
  imagem TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Inserir dados de exemplo
INSERT INTO denuncias (nome, telefone, denuncia, localizacao, imagem) VALUES
('João Silva', '(11) 99999-9999', 'Denúncia sobre iluminação pública', 'Rua das Flores, 123 - São Paulo/SP', 'https://via.placeholder.com/50x50'),
('Maria Santos', '(11) 88888-8888', 'Buraco na rua', 'Av. Paulista, 456 - São Paulo/SP', 'https://via.placeholder.com/50x50'),
('Pedro Costa', '(11) 77777-7777', 'Lixo acumulado', 'Rua Augusta, 789 - São Paulo/SP', 'https://via.placeholder.com/50x50');
```

### 2. Configurar políticas de segurança
No Supabase, vá em **Authentication** > **Policies**:

```sql
-- Permitir leitura pública da tabela
CREATE POLICY "Permitir leitura pública" ON denuncias
FOR SELECT USING (true);

-- Permitir inserção pública (opcional)
CREATE POLICY "Permitir inserção pública" ON denuncias
FOR INSERT WITH CHECK (true);
```

## 🚀 Deploy no Vercel

### 1. Preparar o projeto
```bash
# Fazer commit das alterações
git add .
git commit -m "Configuração inicial do projeto"
git push origin main
```

### 2. Conectar ao Vercel
- Acesse [vercel.com](https://vercel.com)
- Faça login com GitHub
- Clique em "New Project"
- Importe seu repositório

### 3. Configurar variáveis de ambiente
No Vercel, vá em **Settings** > **Environment Variables**:

```
REACT_APP_SUPABASE_URL = https://seu-projeto.supabase.co
REACT_APP_SUPABASE_ANON_KEY = sua-chave-anonima-aqui
```

### 4. Deploy
- Clique em "Deploy"
- Aguarde a conclusão
- Sua aplicação estará disponível em `https://seu-projeto.vercel.app`

## 🧪 Testando a aplicação

### 1. Desenvolvimento local
```bash
npm start
```
Acesse: http://localhost:3000

### 2. Verificar conexão
- Abra o console do navegador (F12)
- Verifique se não há erros de conexão
- A tabela deve carregar com os dados de exemplo

### 3. Testar responsividade
- Redimensione a janela do navegador
- Teste em diferentes dispositivos
- Use as ferramentas de desenvolvedor do navegador

## 🔧 Solução de Problemas

### Erro: "Invalid API key"
- Verifique se as credenciais estão corretas
- Confirme se copiou a chave completa
- Teste no console do Supabase

### Erro: "Table does not exist"
- Verifique se criou a tabela corretamente
- Confirme o nome da tabela no código
- Execute o SQL de criação novamente

### Erro: "CORS policy"
- No Supabase, vá em **Settings** > **API**
- Adicione seu domínio Vercel em "Additional Allowed Origins"
- Formato: `https://seu-projeto.vercel.app`

### Tabela não carrega
- Verifique o console do navegador
- Confirme as políticas de segurança da tabela
- Teste a consulta no SQL Editor do Supabase

## 📱 Personalização

### Alterar cores
Edite `src/components/DataTable.css`:
```css
.data-table thead {
  background: linear-gradient(135deg, #sua-cor-1 0%, #sua-cor-2 100%);
}
```

### Alterar campos
Edite `src/components/DataTable.js`:
```javascript
// Adicionar/remover colunas
<th>Novo Campo</th>
<td>{item.novoCampo}</td>
```

### Alterar layout
Edite `src/App.css`:
```css
.App-header {
  background: rgba(255, 255, 255, 0.2);
}
```

## 🔒 Segurança

### Recomendações
- Nunca exponha chaves de admin
- Use apenas a chave anônima no frontend
- Configure políticas de segurança adequadas
- Monitore o uso da API

### Variáveis sensíveis
- Nunca commite arquivos `.env`
- Use variáveis de ambiente no Vercel
- Mantenha as credenciais seguras

## 📞 Suporte

### Recursos úteis
- [Documentação do Supabase](https://supabase.com/docs)
- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do React](https://reactjs.org/docs)

### Contato
Para dúvidas específicas sobre este projeto, verifique:
1. Console do navegador
2. Logs do Vercel
3. Logs do Supabase
4. Documentação das tecnologias utilizadas 