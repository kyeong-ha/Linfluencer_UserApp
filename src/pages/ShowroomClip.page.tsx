import Header from "@/components/Showroom/ShowroomHeader";
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components'

// red
const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

`;
// red
const ClipPlayer = styled.div`
  width: 100%;
  height: 218px;

  background-color: #FFA3A3;
`;

//red
const ProductsWrapper = styled.div`
  width: 100%;
  height: 340px;

  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > div {
    width: 85%;  }
`;

// orange
const CategoryToggle = styled.div`
  height: 24px;
  background-color: #FFE0A3;
`;

// orange
const Products = styled.div`
  height: 250px;
  background-color: #FFE0A3;

  display: flex;
  position: relative;
`;

// green
const ProductMenu =  styled.div`
  width: 34px;
  height: 100%;

  background-color: #C0FFA3;

  position: absolute;
  left: 7.5%;
  transform: translateX(-7.5%);
`;

// green
const SelectedProduct = styled.div`
  width: 150px;
  height: 100%;

  background-color: #C0FFA3;
  
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

// blue
const ProductMenuElement = styled.div``;

// blue
const SelectedProductInfo = styled.div``;

// blue
const SelectedProductPurchase = styled.div``;

// pupple
const SelectedProductSliderBar = styled.div``;

export default function ClipPage(){
  return (
    <>
      <Header />

      <Container>
        <ClipPlayer/>

        <ProductsWrapper>

          <CategoryToggle/>

          <Products>
              <ProductMenu/>

              <SelectedProduct>

                <SelectedProductInfo>
                  <SelectedProductSliderBar/>
                </SelectedProductInfo>
                
                <SelectedProductPurchase/>

              </SelectedProduct>

          </Products>

        </ProductsWrapper>
      </Container>

      <div id='clip--slider-bar'>

      </div>
    </>
  );
}