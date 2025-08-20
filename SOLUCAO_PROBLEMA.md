# 🚨 SOLUÇÃO PARA O PROBLEMA DE CONEXÃO

## ❌ **PROBLEMA IDENTIFICADO**
A aplicação não consegue acessar os dados da tabela `denuncias` no Supabase, mesmo com as credenciais configuradas.

## 🔍 **DIAGNÓSTICO AUTOMÁTICO**

### **1. Execute a aplicação**
```bash
npm start
```

### **2. Use os componentes de teste**
- **🧪 Teste Direto do Supabase** - Testa a conexão básica
- **🔍 Diagnóstico Completo** - Análise detalhada da tabela

### **3. Verifique o console do navegador (F12)**
- Procure por erros específicos
- Verifique as mensagens de log dos testes

## 🚨 **PROBLEMAS MAIS COMUNS E SOLUÇÕES**

### **Problema 1: "relation does not exist"**
**Sintoma**: Erro ao tentar acessar a tabela
**Solução**: 
1. Acesse o Supabase
2. Vá em **SQL Editor**
3. Execute: `SELECT * FROM denuncias LIMIT 1;`
4. Se der erro, a tabela não existe

**Para criar a tabela:**
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

### **Problema 2: "permission denied"**
**Sintoma**: Tabela existe mas não consegue acessar
**Solução**: Configurar políticas de segurança

1. No Supabase, vá em **Authentication > Policies**
2. Procure pela tabela `denuncias`
3. Clique em **"New Policy"**
4. Configure:

**Política de Leitura:**
- **Policy Name**: `Permitir leitura pública`
- **Target roles**: `public`
- **Using expression**: `true`
- **Policy definition**: `FOR SELECT USING (true)`

### **Problema 3: "invalid input syntax"**
**Sintoma**: Erro ao processar dados
**Solução**: Verificar estrutura da tabela

1. Execute no SQL Editor:
```sql
SELECT 
  column_name,
  data_type,
  is_nullable
FROM information_schema.columns 
WHERE table_name = 'denuncias';
```

2. Verifique se o campo `id` é `SERIAL`

### **Problema 4: Tabela vazia**
**Sintoma**: Conexão funciona mas não há dados
**Solução**: Inserir dados de teste

```sql
INSERT INTO denuncias (nome, telefone, denuncia, imagem, localizacao) VALUES
('Matheus Venâncio', '+55 19 98146-6623', 'teste novo', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'não informado'),
('Matheus Venâncio', '+55 19 98146-6623', 'Ruas sem sinalização na região do Padre Anchieta.', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'região do Padre Anchieta, não informado');
```

## 🔧 **VERIFICAÇÃO PASSO A PASSO**

### **Passo 1: Verificar se a tabela existe**
```sql
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public' 
   AND table_name = 'denuncias'
);
```

### **Passo 2: Verificar estrutura**
```sql
SELECT * FROM denuncias LIMIT 1;
```

### **Passo 3: Verificar políticas**
```sql
SELECT 
  policyname,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'denuncias';
```

### **Passo 4: Verificar permissões**
```sql
SELECT 
  grantee,
  table_name,
  privilege_type
FROM information_schema.table_privileges 
WHERE table_name = 'denuncias' 
AND grantee = 'anon';
```

### **Passo 5: Testar consulta**
```sql
SELECT COUNT(*) FROM denuncias;
```

## 📱 **TESTE NA APLICAÇÃO**

1. **Execute `npm start`**
2. **Use o componente "🧪 Teste Direto do Supabase"**
3. **Clique em "🚀 Executar Todos os Testes"**
4. **Verifique os resultados**

## 🚨 **SE AINDA NÃO FUNCIONAR**

### **Verifique:**
1. **Console do navegador** para erros específicos
2. **Logs dos testes** para identificar o problema
3. **Configuração do Supabase** (URL e chave)
4. **Políticas de segurança** da tabela
5. **Estrutura da tabela** no banco

### **Teste manual:**
1. Acesse o Supabase
2. Vá em **SQL Editor**
3. Execute: `SELECT * FROM denuncias;`
4. Verifique se retorna dados

## 💡 **DICAS IMPORTANTES**

- **As políticas de segurança são OBRIGATÓRIAS**
- **Sem políticas, a tabela não será acessível**
- **Verifique sempre o console do navegador**
- **Use os componentes de teste para diagnóstico**
- **Confirme se a tabela tem dados**

---

**🎯 OBJETIVO**: Identificar exatamente onde está o problema usando os testes automáticos e resolver com as soluções específicas.
