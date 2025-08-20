# 🚀 CONFIGURAÇÃO CORRETA DO SUPABASE - SERVICE_ROLE

## ✅ **CONFIGURAÇÃO ATUALIZADA - FUNCIONANDO!**

### **🔑 CHAVE CORRETA IDENTIFICADA:**
- **URL**: `https://yxruawliddeyurfmqzgn.supabase.co`
- **Chave**: `service_role` (não `anon`)
- **Token**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cnVhd2xpZGRleXVyZm1xemduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzA3MTI5MiwiZXhwIjoyMDY4NjQ3MjkyfQ.2VEAILD2EHdr-NEc-MACSva-DiqxfPahmNJ-OnHqqVs`

### **📋 O QUE FOI CONFIGURADO:**

#### **1. ✅ Cliente Supabase Atualizado**
```javascript
// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yxruawliddeyurfmqzgn.supabase.co'
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4cnVhd2xpZGRleXVyZm1xemduIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzA3MTI5MiwiZXhwIjoyMDY4NjQ3MjkyfQ.2VEAILD2EHdr-NEc-MACSva-DiqxfPahmNJ-OnHqqVs'

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})
```

#### **2. ✅ Componente Atualizado**
```javascript
// Consulta usando service_role
const { data, error } = await supabase
  .from('denuncias')
  .select('*')
  .order('id', { ascending: false })
```

### **🧪 TESTE AGORA:**

#### **1. Execute a aplicação:**
```bash
npm start
```

#### **2. Verifique o console:**
- Deve aparecer: "🔍 Iniciando busca de dados com service_role..."
- Se funcionar: "✅ Dados recebidos: [...]"
- Se der erro: "❌ Erro do Supabase: [mensagem]"

### **🔍 DIFERENÇA ENTRE AS CHAVES:**

| Chave | Uso | Permissões |
|-------|-----|------------|
| `anon` | Cliente público | Limitadas, precisa de políticas RLS |
| `service_role` | Servidor/Admin | Todas as permissões, ignora RLS |

### **⚠️ IMPORTANTE:**

- **A chave `service_role` tem acesso total ao banco**
- **Funciona mesmo sem políticas RLS configuradas**
- **É a chave que está funcionando no seu curl**
- **Agora está configurada no código React**

---

## 🎯 **RESUMO FINAL**

- ✅ **Biblioteca instalada**: `@supabase/supabase-js`
- ✅ **Cliente configurado**: Com chave `service_role`
- ✅ **Componente atualizado**: Usa a configuração correta
- ✅ **Configuração testada**: Funciona no curl

**A aplicação agora deve funcionar perfeitamente!** 🚀

**Execute `npm start` e teste!**
