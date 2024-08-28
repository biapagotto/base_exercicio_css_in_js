import styled from 'styled-components'

export const VagasContainer = styled.div`
  /* Qualquer estilo adicional para o contêiner pode ser adicionado aqui */
`

export const VagasList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
