import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

const ConnectionTest = () => {
  const [testResults, setTestResults] = useState([])
  const [isTesting, setIsTesting] = useState(false)

  const runTests = async () => {
    setIsTesting(true)
    const results = []

    try {
      // Teste 1: Verificar conexão básica
      results.push('🔄 Testando conexão básica...')
      const { data: connectionTest, error: connectionError } = await supabase
        .from('denuncias')
        .select('count')
        .limit(1)
      
      if (connectionError) {
        results.push(`❌ Erro de conexão: ${connectionError.message}`)
      } else {
        results.push('✅ Conexão básica funcionando')
      }

      // Teste 2: Verificar se a tabela existe
      results.push('🔄 Verificando existência da tabela...')
      const { data: tableTest, error: tableError } = await supabase
        .from('denuncias')
        .select('*')
        .limit(1)
      
      if (tableError) {
        results.push(`❌ Erro na tabela: ${tableError.message}`)
      } else {
        results.push('✅ Tabela denuncias encontrada')
      }

      // Teste 3: Contar registros
      results.push('🔄 Contando registros...')
      const { count, error: countError } = await supabase
        .from('denuncias')
        .select('*', { count: 'exact', head: true })
      
      if (countError) {
        results.push(`❌ Erro ao contar: ${countError.message}`)
      } else {
        results.push(`✅ Total de registros: ${count}`)
      }

      // Teste 4: Buscar dados reais
      results.push('🔄 Buscando dados reais...')
      const { data: realData, error: realError } = await supabase
        .from('denuncias')
        .select('*')
        .order('id', { ascending: false })
        .limit(5)
      
      if (realError) {
        results.push(`❌ Erro ao buscar dados: ${realError.message}`)
      } else {
        results.push(`✅ Dados encontrados: ${realData?.length || 0} registros`)
        if (realData && realData.length > 0) {
          results.push(`📊 Primeiro registro: ${JSON.stringify(realData[0], null, 2)}`)
        }
      }

    } catch (error) {
      results.push(`❌ Erro geral: ${error.message}`)
    }

    setTestResults(results)
    setIsTesting(false)
  }

  return (
    <div style={{ 
      background: '#f5f5f5', 
      padding: '20px', 
      margin: '20px', 
      borderRadius: '8px',
      border: '1px solid #ddd'
    }}>
      <h3>🔍 Teste de Conexão Supabase</h3>
      <button 
        onClick={runTests} 
        disabled={isTesting}
        style={{
          background: '#667eea',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        {isTesting ? '🔄 Testando...' : '🧪 Executar Testes'}
      </button>
      
      <div style={{ background: 'white', padding: '15px', borderRadius: '6px' }}>
        <h4>Resultados dos Testes:</h4>
        {testResults.map((result, index) => (
          <div key={index} style={{ margin: '5px 0', fontFamily: 'monospace' }}>
            {result}
          </div>
        ))}
        {testResults.length === 0 && (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            Clique em "Executar Testes" para verificar a conexão
          </p>
        )}
      </div>
    </div>
  )
}

export default ConnectionTest
