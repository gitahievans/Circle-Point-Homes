
import * as React from 'react';

const Houses = () => {
	const houseURL = 'https://api-bright.herokuapp.com/homes';
	const [houses, setHouses] = React.useState([]);
	const [view, setView] = React.useState('houses');

	const AddHouseForm = () => {
    const [imageURL, setImageURL] = React.useState('');
    const [title, setTitle] = React.useState('');
		const [category, setCategory] = React.useState('');
		const [price, setPrice] = React.useState('');
		const [location, setLocation] = React.useState('');
    const [landlord, setLandlord] = React.useState('');
    const [description, setDescription] = React.useState('');
		const style = {
			margin: '5px'
		};

		const handleSubmit = () => {
			// add functionality to hit api and submit data and correct url
			const payload = {
				imageURL,
        title,
        category,
        price,
        location,
        landlord,
        description
			};
			// delete this, just mimicks behaviour
			if (payload) {
				setView('houses');
			}
		};

		return (
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'table-caption'
				}}
			>
				<h2>Add House Form</h2>
        <label style={style}>
					Paste your image URL
					<input
						type="text"
						value={imageURL}
						style={style}
						onChange={(event) => setImageURL(event.target.value)}
					/>
				</label>
				<label style={style}>
					Enter house Title
					<input
						type="text"
						style={style}
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
				</label>
        <label style={style}>
					Enter house Category
					<input
						type="text"
						style={style}
						value={category}
						onChange={(event) => setCategory(event.target.value)}
					/>
				</label>
        <label style={style}>
					Enter house Price
					<input
						type="text"
						style={style}
						value={price}
						onChange={(event) => setPrice(event.target.value)}
					/>
				</label>
        <label style={style}>
					Enter house location
					<input
						type="text"
						style={style}
						value={location.city}
						onChange={(event) => setLocation(event.target.value)}
					/>
          </label>
				<label style={style}>
					Enter hoouse owner
					<input
						type="text"
						style={style}
						value={landlord}
						onChange={(event) => setLandlord(event.target.value)}
					/>
					</label>
				
				<label style={style}>
					Enter house description
					<input
						type="text"
						style={style}
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
					</label>
			
				<input type="submit" style={style} value="Add House" />
			</form>
		);
	};

	React.useEffect(() => {
		const housesFetcher = () => {
			//fetches particulars of the houses
			fetch(houseURL)
				.then((response) => response.json())
				.then((data) => {
					console.log(data);
					if (data.length > 0) {
						setHouses(data);
						}
				});
		};

		if (houseURL) {
			housesFetcher();
		}
	}, [houseURL]);

	const deleteHouse = (house) => {
		// add functionality to delete a house. Call fetch function and pass an id

		// ignore and delete this
		alert(`House ${house.title} successfully deleted`);
	};

	return houses.length === 0 ? (
		'Loading.........'
	) : view === 'add' ? (
		<AddHouseForm />
	) : (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between'
					}}
			>
				<h1 id="house-title">Current houses </h1>
				<button
					onClick={() => {
						setView('add');
					}}
					style={{
						height: 'fit-content'
					}}
				>
					Add House
				</button>
			</div>
			{houses.map((house) => (
				<div className="grid" key={house.id}>
					<img src={house.image} alt=""></img>
					<div className="cards">
						<h5>title:{house.title}</h5>
            <h5>Category:{house.category}</h5>
            <h5>Price:{house.price[0]}</h5>
						<h5>Location:{house.location.city}</h5>
            <h5>Landlord:{house.owner[1]}</h5>
						
						<p>{house.description}</p>
						<button
						onClick={() => {
								deleteHouse(house);
							}}
							style={{
								marginBottom: '4px'
							}}
						>
							Delete House
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Houses;