import './App.css';
import ProductItem from './components/ProductItem';
import SortBar from './components/SortBar';
import Team from './components/Team';
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import {BottomNavigation} from "@mui/material"
import Favorite from '@mui/icons-material/Favorite';

function App() {

  const productList = [
    { name: "AKITA", price: "300", size: "Large", bestfor: "Hunting", description: "The Akita is a muscular, double-coated dog of ancient Japanese lineage famous for their dignity and loyalty.", image: "images/akita.png"},
    { name: "BEAGLE", price: "150", size: "Small", bestfor: "Hunting", description: "Beagles are muscular dogs with a slightly domed skull. Their muzzle is squarish. Ears are long and droopy.", image: "images/beagle.png"},
    { name: "DALMATION", price: "280", size: "Average", bestfor: "Guarding", description: "Dalmations are aloof with strangers and are dependable watchdogs. The coat is dense with brown or black spots.", image: "images/dalmation.png"},
    { name: "PUG", price: "120", size: "Small", bestfor: "Companionship", description: "The Pug has an even and stable temperament, great charm, and an outgoing, loving disposition.", image: "images/pug.png"},
    { name: "GOLDEN RETRIEVER", price: "200", size: "Large", bestfor: "Hunting", description: "Golden Retrievers are kind and gentle. Famous for the lustrous coat of gold that gives the breed its name.", image: "images/goldenretriever.png"},
    { name: "BICHON FRISE", price: "400", size: "Small", bestfor: "Companionship", description: "Known for their “powder puff” coat, the Bichon Frise hides easily in a sea of stuffed animals.", image: "images/bichonfrise.png"},
    { name: "ST.BERNARD", price: "420", size: "Large", bestfor: "Guarding", description: "Known as a gentle giant, the Saint Bernard is calm, patient, and sweet with children.", image: "images/stbernard.png"},
    { name: "DACHSHUND", price: "360", size: "Small", bestfor: "Hunting", description: "Dachshunds are lively, playful, and clever. They have a reputation for being on the stubborn side, too.", image: "images/dachshund.png"},
    { name: "TIBETAN MASTIFF", price: "450", size: "Large", bestfor: "Guarding", description: "Watchful, aloof, imposing, and intimidating: The ancient Tibetan Mastiff is the guardian dog supreme.", image: "images/tibetanmastiff.png"},
    { name: "CHIHUAHUA", price: "270", size: "Small", bestfor: "Companionship", description: "The Chihuahua is a balanced, graceful dog of terrier-like demeanor, weighing no more than 6 pounds.", image: "images/chihuahua.png"},
    { name: "CHOW CHOW", price: "300", size: "Average", bestfor: "Guarding", description: "The distinctive-looking Chow Chow dog breed has a proud, independent spirit that some describe as catlike.", image: "images/chowchow.png"},
    { name: "BORDER COLLIE", price: "410", size: "Average", bestfor: "Guarding", description: "This highly intelligent, graceful dog is born with an instinct to work and responds well to training.", image: "images/bordercollie.png"}
   ]
   
  const [total, setTotal] = useState(0);
  const [favorites, setFavorites] = useState([]);
  
  const [type, setType] = useState("All");
  const matchesFilterType = (item, eventKey) => {
    // all items should be shown when no filter is selected
    if (eventKey === "All") {
    return true 
    } else if (eventKey === item.size) {
    return true 
    } else if (eventKey === item.bestfor) {
    return true
    } else {
    return false
    }
    }

  function selectFilterType (eventKey) {
    setType(eventKey);
    const filteredData = productList.filter((item) => matchesFilterType(item, eventKey))
    setList(filteredData);
};
  
  const [currentList, setList] = useState(productList);

  const sortedArray = [...productList].sort((a, b) => {
    return a.price - b.price;
    })

  const [defaultState, setDefault] = useState(false);
  function handleClick() {
      setDefault(true);
      setList(sortedArray);
    };
    
  return (
    <div className="App">

      <h1>CHOOSE YOUR SIDEKICKS!</h1> 
      <h4>Build the perfect pack of dogs by clicking on the "Add to Team" button, and "Remove from Team" to remove.
        Watch your pack's total HP (Health Points) increase as you add them to your team! You can filter by size or specialty, and sort by HP.</h4> 

      <br></br>
      <br></br>

      <div className="Main-grid">

      <div className="Side-container">
      <div className="Top-side-bar">
      <Nav onSelect={selectFilterType}>
      <Nav.Item>
        <Nav.Link eventKey="All"> VIEW ALL </Nav.Link>
      </Nav.Item>
      </Nav>
      </div>

      <div className="Side-bar">
      <h3>SIZE</h3>
      <Nav onSelect={selectFilterType}>
      <Nav.Item>
        <Nav.Link eventKey="Large">Large</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Average">Average</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Small">Small</Nav.Link>
      </Nav.Item>
      </Nav>

      <br></br>

      <h3>SPECIALTY</h3>
        <Nav onSelect={selectFilterType}>
      <Nav.Item>
        <Nav.Link eventKey="Hunting">Hunting</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Guarding">Guarding</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Companionship">Companionship</Nav.Link>
      </Nav.Item>
      </Nav>

      </div>


      <div className="Side-bar">
        <h3>SORT BY</h3>
        <SortBar defaultState={defaultState} handleClick={handleClick} label="HP (Low to High)"></SortBar>
      </div>

      <div className="Team-bar">
        <h3>CURRENT TEAM</h3>
        <Team list={favorites}/>
        <div className="horizontal-line"></div>
        <h2>TOTAL: {<Favorite style={{verticalAlign:"middle", fontSize: 16, color: "rgb(181, 16, 16)"}}></Favorite>} {total}  HP</h2>
        </div>
      </div>

      <div className="Product-grid">
      {currentList.map((item, index) => ( 
        <ProductItem item={item} index={index} setTotal={setTotal} total={total} 
        setFavorites={setFavorites} favorites={favorites}/> 
      ))}
      </div>

      </div>

      <BottomNavigation>
        <p> pixel art credit: @sy0sa on twitter </p>
      </BottomNavigation>

    </div>
  );
}

export default App;
