import styled from "styled-components";

const objects = ["🚗", "☕️", "📱", "🛩️", "📚", "⚽️", "📷", "🌠"];

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #f2f2f2;
  position: relative;
`;

const Object = styled.div`
  font-size: ${(props) => props.size}px;
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;

function generateRandomSize() {
  return Math.floor(Math.random() * 50) + 25;
}

function Game({ size }) {
  const objectsToShow = [];
  const radius = 70;
  const center = 100;

  // Ajouter un objet au centre
  const centerIndex = Math.floor(Math.random() * objects.length);
  const centerSize = size;
  objectsToShow.push(
    <Object key="center" size={centerSize} x={center} y={center}>
      {objects[0]}
    </Object>
  );
  
  // Ajouter les autres objets autour
  for (let i = 1; i < 8; i++) {

    const size = generateRandomSize();
    const angle = ((i + 1) / 8) * 2 * Math.PI;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    objectsToShow.push(
      <Object key={i} size={size} x={x} y={y}>
        {objects[i]}
      </Object>
    );
  }

  return <Card>{objectsToShow}</Card>;
}

Game.getInitialProps = async () => {
  return { size: generateRandomSize() };
};

export default Game;
