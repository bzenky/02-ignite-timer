import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme['gray-100']};
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }

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

  @media screen and (max-width: 425px) {
    max-width: 7rem;
  }

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  @media screen and (max-width: 768px) {
    width: 2.5rem;
  }
`
