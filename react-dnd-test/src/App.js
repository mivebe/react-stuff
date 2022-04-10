import { useState, useCallback } from 'react';
import { Container } from './components/Container';
import CustomDragLayer from './components/CustomDragLayer';

const App = () => {
    const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false);
    const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false);
	const [showGrid, setShowGrid] = useState(false);
    
    const handleSnapToGridAfterDropChange = useCallback(() => {
        setSnapToGridAfterDrop(!snapToGridAfterDrop);
    }, [snapToGridAfterDrop]);

    const handleSnapToGridWhileDraggingChange = useCallback(() => {
        setSnapToGridWhileDragging(!snapToGridWhileDragging);
    }, [snapToGridWhileDragging]);

	const handleShowGrid = useCallback(() => {
		setShowGrid(!showGrid);
	},[showGrid]);

    return (
		<div>
			<Container snapToGrid={snapToGridAfterDrop}/>
			<CustomDragLayer snapToGrid={snapToGridWhileDragging}/>
			<p>
				<label htmlFor="snapToGridWhileDragging">
					<input id="snapToGridWhileDragging" type="checkbox" checked={snapToGridWhileDragging} onChange={handleSnapToGridWhileDraggingChange}/>
					<small>Snap to grid while dragging</small>
				</label>
				<br />
				<label htmlFor="snapToGridAfterDrop">
					<input id="snapToGridAfterDrop" type="checkbox" checked={snapToGridAfterDrop} onChange={handleSnapToGridAfterDropChange}/>
					<small>Snap to grid after drop</small>
				</label>
				<br />
				<label htmlFor="showGrid">
					<input id="showGrid" type="checkbox" checked={showGrid} onChange={handleShowGrid}/>
					<small>Show Grid</small>
				</label>
			</p>
		</div>
	)
};
export default App;