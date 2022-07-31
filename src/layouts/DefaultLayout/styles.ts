import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 74rem;
  height: calc(100vh - 10rem);
  padding: 2.5rem;
  margin: 5rem auto;
  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;
  overflow: auto;

  @media screen and (max-width: 425px) {
    padding: 1rem;
  }
`
