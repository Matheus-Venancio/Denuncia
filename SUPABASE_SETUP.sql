-- =====================================================
-- CONFIGURAÇÃO NECESSÁRIA PARA O SUPABASE FUNCIONAR
-- =====================================================

-- 1. VERIFICAR SE A TABELA EXISTE
-- Execute no SQL Editor do Supabase:
SELECT EXISTS (
   SELECT FROM information_schema.tables 
   WHERE table_schema = 'public' 
   AND table_name = 'denuncias'
);

-- 2. CRIAR A TABELA SE NÃO EXISTIR
CREATE TABLE IF NOT EXISTS denuncias (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  denuncia TEXT NOT NULL,
  imagem TEXT,
  localizacao TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 3. INSERIR DADOS DE EXEMPLO (se necessário)
INSERT INTO denuncias (nome, telefone, denuncia, imagem, localizacao) VALUES
('Matheus Venâncio', '+55 19 98146-6623', 'teste novo', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'não informado'),
('Matheus Venâncio', '+55 19 98146-6623', 'Ruas sem sinalização na região do Padre Anchieta.', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'região do Padre Anchieta, não informado'),
('Matheus Venâncio', '+55 19 98146-6623', 'Bom dia, tudo bem?', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'não informado'),
('Matheus Venâncio', '+55 19 98146-6623', 'Falta de sinalização na região do Guarani.', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'região do Guarani, Campinas'),
('Matheus Venâncio', '+55 19 98146-6623', 'Sem sinalização nas ruas do Guarani, causando perigo.', 'https://yxruawliddeyurfmqzgn/storage/buckets/teste/', 'ruas do Guarani, Campinas')
ON CONFLICT (id) DO NOTHING;

-- 4. CONFIGURAR POLÍTICAS DE SEGURANÇA (OBRIGATÓRIO!)
-- Vá em Authentication > Policies no Supabase e execute:

-- Política para permitir leitura pública
CREATE POLICY "Permitir leitura pública de denúncias" ON denuncias
FOR SELECT USING (true);

-- Política para permitir inserção pública (opcional)
CREATE POLICY "Permitir inserção pública de denúncias" ON denuncias
FOR INSERT WITH CHECK (true);

-- 5. VERIFICAR POLÍTICAS EXISTENTES
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'denuncias';

-- 6. TESTAR CONSULTA
SELECT * FROM denuncias ORDER BY id DESC LIMIT 5;

-- 7. VERIFICAR PERMISSÕES DO USUÁRIO ANÔNIMO
SELECT 
  grantee,
  table_name,
  privilege_type
FROM information_schema.table_privileges 
WHERE table_name = 'denuncias' 
AND grantee = 'anon';

-- =====================================================
-- SOLUÇÃO DE PROBLEMAS COMUNS
-- =====================================================

-- PROBLEMA: "relation does not exist"
-- SOLUÇÃO: Execute o CREATE TABLE acima

-- PROBLEMA: "permission denied"
-- SOLUÇÃO: Execute as políticas de segurança acima

-- PROBLEMA: "invalid input syntax for type integer"
-- SOLUÇÃO: Verifique se o campo id está como SERIAL

-- PROBLEMA: "column does not exist"
-- SOLUÇÃO: Verifique se os nomes das colunas estão corretos

-- =====================================================
-- VERIFICAÇÃO FINAL
-- =====================================================

-- Execute esta consulta para verificar se tudo está funcionando:
SELECT 
  'Tabela existe' as status,
  COUNT(*) as total_registros,
  MIN(id) as menor_id,
  MAX(id) as maior_id
FROM denuncias;
