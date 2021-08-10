import ThemeToggle from "./components/ThemeToggle"
import useDarkMode from "./hooks/useDarkMode"
import { Card, CardSmall } from "./components/Card"

import { ReactComponent as Facebook } from "./images/icon-facebook.svg"
import { ReactComponent as Twitter } from "./images/icon-twitter.svg"
import { ReactComponent as Instagram } from "./images/icon-instagram.svg"
import { ReactComponent as YouTube } from "./images/icon-youtube.svg"
import Grid from "./components/Grid"
import Section from "./components/Section"

const socialMediaTop = [
	{
		for: {
			icon: <Facebook />,
			type: "facebook"
		},
		userName: "@nathanf",
		value: 1987,
		valueLabel: "Followers",
		meta: {
			metaStatus: "up",
			metaLabel: "12 Today"
		}
	},
	{
		for: {
			icon: <Twitter />,
			type: "twitter"
		},
		userName: "@nathanf",
		value: 1044,
		valueLabel: "Followers",
		meta: {
			metaStatus: "up",
			metaLabel: "99 Today"
		}
	},
	{
		for: {
			icon: <Instagram />,
			type: "instagram"
		},
		userName: "@realnathanf",
		value: "11k",
		valueLabel: "Followers",
		meta: {
			metaStatus: "up",
			metaLabel: "1099 Today"
		}
	},
	{
		for: {
			icon: <YouTube />,
			type: "youtube"
		},
		userName: "Nathan F.",
		value: 8239,
		valueLabel: "Subscribers",
		meta: {
			metaStatus: "down",
			metaLabel: "144 Today"
		}
	}
]

const overviewToday = [
	{
		icon: <Facebook />,
		valueLabel: "Page Views",
		value: 87,
		meta: {
			metaStatus: "up",
			metaLabel: "3%"
		}
	},
	{
		icon: <Facebook />,
		valueLabel: "Likes",
		value: 52,
		meta: {
			metaStatus: "down",
			metaLabel: "2%"
		}
	},
	{
		icon: <Instagram />,
		valueLabel: "Likes",
		value: 5462,
		meta: {
			metaStatus: "up",
			metaLabel: "2257%"
		}
	},
	{
		icon: <Instagram />,
		valueLabel: "Profile Views",
		value: "52k",
		meta: {
			metaStatus: "up",
			metaLabel: "1357%"
		}
	},
	{
		icon: <Twitter />,
		valueLabel: "Retweets",
		value: 117,
		meta: {
			metaStatus: "up",
			metaLabel: "303%"
		}
	},
	{
		icon: <Twitter />,
		valueLabel: "Likes",
		value: 507,
		meta: {
			metaStatus: "up",
			metaLabel: "553%"
		}
	},
	{
		icon: <YouTube />,
		valueLabel: "Likes",
		value: 107,
		meta: {
			metaStatus: "down",
			metaLabel: "19%"
		}
	},
	{
		icon: <YouTube />,
		valueLabel: "Total Views",
		value: 1407,
		meta: {
			metaStatus: "down",
			metaLabel: "12%"
		}
	}
]

function App() {
	const [darkMode, setDarkMode] = useDarkMode(true)

	return (
		<>
			<Section withBackground={true}>
				<header>
					<h1>Social Media Dashboard</h1>
					<h4>Total Followers: 23,004</h4>
					<ThemeToggle
						theme={darkMode}
						onClick={() => setDarkMode(!darkMode)}
					/>
				</header>
				<Grid>
					{socialMediaTop.map((item, index) => (
						<Card key={index} {...item} />
					))}
				</Grid>
			</Section>
			<Section>
				<header>
					<h2>Overview - Today</h2>
				</header>
				<Grid>
					{overviewToday.map((item, index) => {
						console.log(item)
						return <CardSmall key={index} {...item} />
					})}
				</Grid>
			</Section>
		</>
	)
}

export default App
