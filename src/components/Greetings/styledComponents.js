import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 50px;
`

export const UnorderedList = styled.ul`
  display: flex;
  margin-bottom: 20px;
  padding: 0;
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const Button = styled.button`
  color: ${props => (props.isSelectTab ? '#ffffff' : '#db1c48')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  background-color: ${props => (props.isSelectTab ? '#db1c48' : 'transparent')};
  border: 2px solid #db1c48;
  border-radius: 16px;
  margin: 4px 12px;
  padding: 6px 12px;
  outline: none;
  cursor: pointer;
`

export const Image = styled.img`
  width: 60%;
  height: 45vh;
  margin-top: 50px;
`
