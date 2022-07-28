import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  span {
    padding: 2rem 1rem;
    background-color: ${({ theme }) => theme['gray-700']};
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  display: flex;
  justify-content: center;
  width: 4rem;
  padding: 2rem 0;
  color: ${({ theme }) => theme['green-500']};
  overflow: hidden;
`
