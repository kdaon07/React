import React, { useState } from 'react';
import Draggable from 'react-draggable';

const snapToGrid = (x, y, gridSize) => {
  const snappedX = Math.round(x / gridSize) * gridSize;
  const snappedY = Math.round(y / gridSize) * gridSize;
  return { x: snappedX, y: snappedY };
};

const checkOverlap = (position, boxes, gridSize) => {
  const tolerance = gridSize / 10; // tolerance for overlap detection
  return boxes.some(box => 
    Math.abs(box.position.x - position.x) < tolerance && 
    Math.abs(box.position.y - position.y) < tolerance
  );
};

function DraggableBox({ id, initialPosition, onStop, boxes }) {
  const [position, setPosition] = useState(initialPosition);

  const handleStop = (e, data) => {
    let newPosition = snapToGrid(data.x, data.y, 100); // assuming grid size is 100px

    // Check for overlap and adjust position if necessary
    while (checkOverlap(newPosition, boxes.filter(box => box.id !== id), 100)) {
      newPosition.x += 100; // move to the right by 100px if overlapping
    }

    setPosition(newPosition);
    onStop(id, newPosition);
  };

  return (
    <Draggable
      position={position}
      onStop={handleStop}
    >
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'skyblue',
          cursor: 'move',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
        }}
      >
        Box {id}
      </div>
    </Draggable>
  );
}

function DraggableContainer() {
  const [boxes, setBoxes] = useState([
    { id: 1, position: { x: 0, y: 0 } },
    { id: 2, position: { x: 200, y: 0 } },
    { id: 3, position: { x: 0, y: 200 } },
  ]);

  const handleStop = (id, position) => {
    setBoxes(prevBoxes =>
      prevBoxes.map(box => (box.id === id ? { ...box, position } : box))
    );
  };

  return (
    <div style={{ position: 'relative', width: '600px', height: '600px', border: '1px solid black' }}>
      <div
        style={{
          position: 'absolute',
          top: '100px',
          left: '100px',
          width: '100px',
          height: '100px',
          border: '2px dashed red',
          pointerEvents: 'none'
        }}
      />
      {boxes.map(box => (
        <DraggableBox
          key={box.id}
          id={box.id}
          initialPosition={box.position}
          onStop={handleStop}
          boxes={boxes}
        />
      ))}
    </div>
  );
}

export default DraggableContainer;
