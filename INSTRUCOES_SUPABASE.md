# 🚨 INSTRUÇÕES URGENTES PARA CONFIGURAR O SUPABASE

## ❌ **PROBLEMA IDENTIFICADO**
A aplicação não está conseguindo acessar os dados da tabela `denuncias` no Supabase.

## 🔧 **SOLUÇÃO PASSO A PASSO**

### **PASSO 1: Acessar o Supabase**
1. Vá para [supabase.com](https://supabase.com)
2. Faça login na sua conta
3. Acesse o projeto: `yxruawliddeyurfmqzgn`

### **PASSO 2: Verificar a Tabela**
1. No menu lateral, clique em **"Table Editor"**
2. Verifique se existe uma tabela chamada `denuncias`
3. Se NÃO existir, vá para o **PASSO 3**
4. Se existir, vá para o **PASSO 4**

### **PASSO 3: Criar a Tabela (se não existir)**
1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New Query"**
3. Cole e execute este código:

```sql
CREATE TABLE denuncias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  denuncia TEXT NOT NULL,
  imagem TEXT,
  localizacao TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

4. Clique em **"Run"**

### **PASSO 4: Inserir os Dados**
1. No **SQL Editor**, crie uma nova query
2. Cole e execute este código:

```sql
INSERT INTO denuncias (nome, telefone, denuncia, imagem, localizacao) VALUES
('Matheus Venâncio', '+55 19 98146-6623', 'teste novo', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'não informado'),
('Matheus Venâncio', '+55 19 98146-6623', 'Ruas sem sinalização na região do Padre Anchieta.', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'região do Padre Anchieta, não informado'),
('Matheus Venâncio', '+55 19 98146-6623', 'Bom dia, tudo bem?', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'não informado'),
('Matheus Venâncio', '+55 19 98146-6623', 'Falta de sinalização na região do Guarani.', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'região do Guarani, Campinas'),
('Matheus Venâncio', '+55 19 98146-6623', 'Sem sinalização nas ruas do Guarani, causando perigo.', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'ruas do Guarani, Campinas');
```

### **PASSO 5: CONFIGURAR POLÍTICAS DE SEGURANÇA (OBRIGATÓRIO!)**
1. No menu lateral, clique em **"Authentication"**
2. Clique em **"Policies"**
3. Procure pela tabela `denuncias`
4. Se não houver políticas, clique em **"New Policy"**
5. Configure assim:

**Política 1:**
- **Policy Name**: `Permitir leitura pública`
- **Target roles**: `public`
- **Using expression**: `true`
- **Policy definition**: `FOR SELECT USING (true)`

**Política 2 (opcional):**
- **Policy Name**: `Permitir inserção pública`
- **Target roles**: `public`
- **Using expression**: `true`
- **Policy definition**: `FOR INSERT WITH CHECK (true)`

### **PASSO 6: Testar a Conexão**
1. No **SQL Editor**, execute esta query:

```sql
SELECT * FROM denuncias ORDER BY id DESC LIMIT 5;
```

2. Você deve ver os 5 registros retornados

### **PASSO 7: Verificar Permissões**
1. Execute esta query para verificar se o usuário anônimo tem acesso:

```sql
SELECT 
  grantee,
  table_name,
  privilege_type
FROM information_schema.table_privileges 
WHERE table_name = 'denuncias' 
AND grantee = 'anon';
```

## 🚨 **PROBLEMAS COMUNS E SOLUÇÕES**

### **Erro: "relation does not exist"**
- **Solução**: Execute o PASSO 3 para criar a tabela

### **Erro: "permission denied"**
- **Solução**: Execute o PASSO 5 para configurar as políticas

### **Erro: "invalid input syntax"**
- **Solução**: Verifique se o campo `id` está como `SERIAL`

### **Erro: "column does not exist"**
- **Solução**: Verifique se os nomes das colunas estão corretos

## ✅ **VERIFICAÇÃO FINAL**

Após executar todos os passos, execute esta query:

```sql
SELECT 
  'Tabela existe' as status,
  COUNT(*) as total_registros,
  MIN(id) as menor_id,
  MAX(id) as maior_id
FROM denuncias;
```

**Resultado esperado:**
- status: "Tabela existe"
- total_registros: 5
- menor_id: 2
- maior_id: 6

## 🔄 **TESTE NA APLICAÇÃO**

1. Execute `npm start` na sua aplicação
2. Abra o console do navegador (F12)
3. Clique no botão **"🧪 Executar Testes"** na página
4. Verifique os resultados dos testes

## 📞 **SE AINDA NÃO FUNCIONAR**

1. Verifique o console do navegador para erros
2. Execute os testes de conexão
3. Verifique se as políticas estão configuradas
4. Confirme se a tabela tem dados

---

**⚠️ IMPORTANTE**: As políticas de segurança são **OBRIGATÓRIAS** para o Supabase funcionar. Sem elas, a aplicação não conseguirá acessar os dados.

