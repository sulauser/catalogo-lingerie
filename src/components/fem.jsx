import { Container, MainImgs } from "./fem";
import itemFem from "../../itemfem.json";

export default function Fem() {

  return (
    <Container>
      <MainImgs>
        {itemFem.map((item) => (
          <img key={item.id} src={item.img} alt={item.id} />
        ))}
      </MainImgs>
    </Container>
  );
}
