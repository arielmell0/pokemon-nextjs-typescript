import { DivCard, DivText, DivImg } from './styles'

interface Card {
    imgUrl: string,
    text: string
}

const Card = ({imgUrl, text}: Card) => {
  return (
    <DivCard>
      <DivImg img={imgUrl} />
      <DivText>{text}</DivText>
    </DivCard>
  )
}

export default Card
