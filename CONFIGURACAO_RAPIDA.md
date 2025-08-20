# 🚀 Configuração Rápida do Supabase

## 📍 **Projeto Atual**
- **ID**: `yxruawliddeyurfmqzgn`
- **URL**: `https://yxruawliddeyurfmqzgn.supabase.co`
- **Status**: Credenciais configuradas ✅

## 🔧 **Passos para Configurar**

### **1. Acessar o Supabase**
1. Vá para [supabase.com](https://supabase.com)
2. Faça login na sua conta
3. Acesse o projeto: `yxruawliddeyurfmqzgn`

### **2. Verificar/Criar Tabela**
1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New Query"**
3. Cole e execute o arquivo `SUPABASE_CONFIG.sql`
4. Clique em **"Run"**

### **3. Configurar Políticas (OBRIGATÓRIO!)**
1. No menu lateral, clique em **"Authentication"**
2. Clique em **"Policies"**
3. Procure pela tabela `denuncias`
4. Se não houver políticas, clique em **"New Policy"**

**Política de Leitura:**
- **Policy Name**: `Permitir leitura pública`
- **Target roles**: `public`
- **Using expression**: `true`
- **Policy definition**: `FOR SELECT USING (true)`

### **4. Testar na Aplicação**
1. Execute `npm start`
2. Use o componente **"🔍 Executar Diagnóstico"**
3. Verifique os resultados

## 🚨 **Problemas Comuns**

| Problema | Solução |
|----------|---------|
| "relation does not exist" | Execute o CREATE TABLE no SQL Editor |
| "permission denied" | Configure as políticas de segurança |
| "invalid input syntax" | Verifique se o campo id é SERIAL |
| Tabela vazia | Verifique se há dados inseridos |

## ✅ **Verificação Final**

Após configurar, execute esta query no SQL Editor:

```sql
SELECT 
  'Status' as info,
  COUNT(*) as total_registros,
  MIN(id) as menor_id,
  MAX(id) as maior_id
FROM denuncias;
```

**Resultado esperado:**
- total_registros: > 0
- menor_id: 2 (ou outro número)
- maior_id: 6 (ou outro número)

## 🔍 **Diagnóstico Automático**

A aplicação inclui um componente de diagnóstico que:
- ✅ Verifica se a tabela existe
- ✅ Testa o acesso aos dados
- ✅ Conta os registros
- ✅ Mostra a estrutura dos dados
- ✅ Identifica problemas específicos

## 📱 **Próximos Passos**

1. **Configure o Supabase** seguindo os passos acima
2. **Execute o diagnóstico** na aplicação
3. **Verifique se os dados aparecem** na tabela
4. **Deploy no Vercel** quando estiver funcionando

---

**💡 Dica**: As políticas de segurança são **ESSENCIAIS** para o Supabase funcionar. Sem elas, a aplicação não conseguirá acessar os dados.
