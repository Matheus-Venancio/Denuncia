import React, { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'

import './DenunciasTable.css'

const DenunciasTable = () => {
  const [denuncias, setDenuncias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  // Função para buscar dados do Supabase usando service_role
  const fetchDenuncias = async () => {
    try {
      setLoading(true)
      setError(null)
      
      console.log('🔍 Iniciando busca de dados com service_role...')
      
      // Consulta usando a biblioteca oficial com service_role
      const { data, error: supabaseError } = await supabase
        .from('denuncias')
        .select('*')
        .order('id', { ascending: false })
      
      if (supabaseError) {
        console.error('❌ Erro do Supabase:', supabaseError)
        throw new Error(`Erro do Supabase: ${supabaseError.message}`)
      }
      
      console.log('✅ Dados recebidos:', data)
      console.log('📊 Total de registros:', data?.length || 0)
      
      setDenuncias(data || [])
      
    } catch (err) {
      console.error('❌ Erro geral:', err)
      setError(err.message)
      setDenuncias([])
    } finally {
      setLoading(false)
    }
  }

  // Função para abrir o modal da imagem
  const openImageModal = (imageUrl, denunciaText) => {
    setSelectedImage({ url: imageUrl, text: denunciaText })
  }

  // Função para fechar o modal
  const closeImageModal = () => {
    setSelectedImage(null)
  }

  useEffect(() => {
    fetchDenuncias()
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Carregando denúncias...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <h3>❌ Erro ao carregar dados</h3>
        <p>{error}</p>
        <button onClick={fetchDenuncias} className="retry-btn">
          🔄 Tentar novamente
        </button>
      </div>
    )
  }

  return (
    <div className="denuncias-container">
      <div className="table-header">
        <h2>Lista de Denúncias</h2>
        <button onClick={fetchDenuncias} className="refresh-btn">
          🔄 Atualizar
        </button>
      </div>

      {denuncias.length === 0 ? (
        <div className="no-data">
          <p>Nenhuma denúncia encontrada na base de dados</p>
          <p style={{ fontSize: '14px', color: '#666' }}>
            Verifique se a tabela 'denuncias' existe e tem dados
          </p>
        </div>
      ) : (
        <>
          <div className="table-wrapper">
            <table className="denuncias-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Telefone</th>
                  <th>Denúncia</th>
                  <th>Localização</th>
                  <th>Imagem</th>
                </tr>
              </thead>
              <tbody>
                {denuncias.map((denuncia) => (
                  <tr key={denuncia.id}>
                    <td>{denuncia.nome}</td>
                    <td>{denuncia.telefone}</td>
                    <td className="denuncia-text">{denuncia.denuncia}</td>
                    <td>{denuncia.localizacao}</td>
                    <td>
                      {denuncia.imagem ? (
                        <img 
                          src={denuncia.imagem} 
                          alt="Imagem da denúncia" 
                          className="denuncia-image clickable"
                          onClick={() => openImageModal(denuncia.imagem, denuncia.denuncia)}
                          title="Clique para ampliar"
                        />
                      ) : null}
                      <span className="no-image" style={{ display: denuncia.imagem ? 'none' : 'inline' }}>
                        Sem imagem
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="table-info">
            <p>Total de registros: {denuncias.length}</p>
          </div>
        </>
      )}

      {/* Modal da Imagem */}
      {selectedImage && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="image-modal-header">
              <h3>Imagem da Denúncia</h3>
              <button className="close-modal-btn" onClick={closeImageModal}>
                ✕
              </button>
            </div>
            <div className="image-modal-body">
              <img 
                src={selectedImage.url} 
                alt="Imagem ampliada" 
                className="modal-image"
              />
              <p className="modal-description">{selectedImage.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DenunciasTable
