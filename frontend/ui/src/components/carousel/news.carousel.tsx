import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from '@mantine/hooks';
import { Button, Paper, Text, Title, useMantineTheme, rem } from "@mantine/core";
import classes from './news.carousel.module.css';

interface CardProps {
	image: string;
	title: string;
	category: string;
}

function Card({ image, title, category }: CardProps) {
	return (
		<Paper
			shadow="md"
			p="xl"
			radius="md"
			style={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		>
			<div>
				<Text className={classes.category} size="xs">
					{category}
				</Text>
				<Title order={3} className={classes.title}>
					{title}
				</Title>
			</div>
			<Button variant="white" color="dark">
				Read
			</Button>
		</Paper>
	);
}

const data = [
	{
		image:
			'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best forests to visit in North America',
		category: 'Premier League',
	},
	{
		image:
			'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Hawaii beaches review: better than you think',
		category: 'Chelsea',
	},
	{
		image:
			'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Mountains at night: 12 best locations to enjoy the view',
		category: 'Real Madrid',
	},
	{
		image:
			'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Aurora in Norway: when to visit for best experience',
		category: 'Serie A',
	},
	{
		image:
			'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Best places to visit this winter',
		category: 'PSG',
	},
	{
		image:
			'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
		title: 'Active volcanos reviews: travel at your own risk',
		category: 'Champions League',
	},
];

export function NewsCarousel() {
	const theme = useMantineTheme();
	const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const slides = data.map((item) => (
		<Carousel.Slide key={item.title}>
			<Card {...item} />
		</Carousel.Slide>
	));

	return (
		<Carousel
			slideSize={mobile ? '100%' : '25%'}
			slideGap="md"
			align="start"
			loop
			slidesToScroll={mobile ? 1 : 4} // Show 4 slides at a time on larger screens, 1 at a time on mobile
		>
			{slides}
		</Carousel>
	);
}
