import React from 'react';

const ApiInfoPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Informações sobre a API</h1>
      <p><strong>Nome da API:</strong> Rick and Morty API</p>
      <p>
        <strong>Documentação oficial:</strong>{' '}
        <a href="https://api.sampleapis.com/countries/countries" target="_blank" rel="noopener noreferrer">
          Rick and Morty API Documentation
        </a>
      </p>
      <p><strong>URL base:</strong> https://rickandmortyapi.com/api</p>
      <p><strong>Endpoint escolhido:</strong> /character</p>
      <p><strong>Atributos recebidos:</strong> id, name, status, species, type, gender, origin, location, image</p>
      <p>
        <strong>Descrição:</strong> A Rick and Morty API fornece informações detalhadas sobre os personagens, episódios e locais do universo da série Rick and Morty. É uma API RESTful que permite buscar dados como nomes, status, espécies e imagens dos personagens.
      </p>
    </div>
  );
};

export default ApiInfoPage;