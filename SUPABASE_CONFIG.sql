-- =====================================================
-- CONFIGURAÇÃO SUPABASE - PROJETO: yxruawliddeyurfmqzgn
-- =====================================================

-- 1. VERIFICAR SE A TABELA EXISTE
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public' 
   AND table_name = 'denuncias'
);

-- 2. VERIFICAR ESTRUTURA DA TABELA (se existir)
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns 
WHERE table_name = 'denuncias' 
ORDER BY ordinal_position;

-- 3. VERIFICAR DADOS EXISTENTES
SELECT COUNT(*) as total_registros FROM denuncias;

-- 4. VERIFICAR POLÍTICAS DE SEGURANÇA
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'denuncias';

-- 5. VERIFICAR PERMISSÕES DO USUÁRIO ANÔNIMO
SELECT 
  grantee,
  table_name,
  privilege_type
FROM information_schema.table_privileges 
WHERE table_name = 'denuncias' 
AND grantee = 'anon';

-- =====================================================
-- CONFIGURAÇÕES NECESSÁRIAS
-- =====================================================

-- 6. CRIAR TABELA SE NÃO EXISTIR
CREATE TABLE IF NOT EXISTS denuncias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  denuncia TEXT NOT NULL,
  imagem TEXT,
  localizacao TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 7. CONFIGURAR POLÍTICAS DE SEGURANÇA (OBRIGATÓRIO!)
-- Execute estas políticas no Authentication > Policies

-- Política para permitir leitura pública
DROP POLICY IF EXISTS "Permitir leitura pública" ON denuncias;
CREATE POLICY "Permitir leitura pública" ON denuncias
FOR SELECT USING (true);

-- Política para permitir inserção pública (opcional)
DROP POLICY IF EXISTS "Permitir inserção pública" ON denuncias;
CREATE POLICY "Permitir inserção pública" ON denuncias
FOR INSERT WITH CHECK (true);

-- 8. VERIFICAR SE AS POLÍTICAS FORAM CRIADAS
SELECT 
  policyname,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'denuncias';

-- 9. TESTAR CONSULTA
SELECT * FROM denuncias ORDER BY id DESC LIMIT 5;

-- 10. VERIFICAÇÃO FINAL
SELECT 
  'Status da tabela' as info,
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'denuncias') 
    THEN 'EXISTE' 
    ELSE 'NÃO EXISTE' 
  END as tabela,
  COUNT(*) as total_registros,
  COUNT(CASE WHEN id IS NOT NULL THEN 1 END) as registros_com_id
FROM denuncias;
