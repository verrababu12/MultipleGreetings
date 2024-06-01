import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Image,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {activeTabId: languageGreetingsList[0].id}

  onClickButton = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {activeTabId} = this.state
    const objDetails = languageGreetingsList.find(
      each => each.id === activeTabId,
    )
    // console.log(objDetails)
    return (
      <AppContainer>
        <ResponsiveContainer>
          <Heading>Multilingual Greetings</Heading>
          <UnorderedList>
            {languageGreetingsList.map(each => (
              <ListItem key={each.id}>
                <Button
                  type="button"
                  onClick={() => this.onClickButton(each.id)}
                  isSelectTab={each.id === activeTabId}
                >
                  {each.buttonText}
                </Button>
              </ListItem>
            ))}
          </UnorderedList>
          <Image src={objDetails.imageUrl} alt={objDetails.imageAltText} />
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default Greetings
