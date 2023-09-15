import styled from 'styled-components'

const DefaultButton = styled.button`
  width: fit-content;
  cursor: pointer;
`

const Button = () => {
  return (
    <DefaultButton>버튼</DefaultButton>
  )
}

export default Button