import './Dashboard.css';
import React from 'react';
import Layout from '../Layout';
import Card from '../Card';

export default function Dashboard() {
	return (
		<Layout>
			<div className="flex justify-between h-full items-center">
				<Card
					image="/images/addToBlogImage.png"
					title="Add to Blog"
					buttonLabel="Add"
					path="/bloginputpage"
				/>
				<Card
					image="/images/seeYourStatsImage.png"
					title="See your Stats"
					buttonLabel="Stats"
					path=""
				/>
				<Card
					image="/images/recapBlogImage.png"
					title="Blog Recap"
					buttonLabel="Recap"
					path="/blogrecappage"
				/>
				<Card
					image="/images/toDoListImage.png"
					title="To do List"
					buttonLabel="Add"
					path=""
				/>
			</div>
		</Layout>
	);
}
