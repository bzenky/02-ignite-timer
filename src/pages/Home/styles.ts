import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme['gray-100']};
  font-weight: bold;
`

const BaseInput = styled.input`
  height: 2.5rem;
  padding: 0 0.5rem;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  color: ${({ theme }) => theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme['green-500']};
  }

  &::placeholder {
    color: ${({ theme }) => theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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

export const BaseCountdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-100']};

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${({ theme }) => theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`
