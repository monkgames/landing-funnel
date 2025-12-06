// app/games/[game]/demo/page.tsx
'use client'

import { useParams } from 'next/navigation'
import '../../../styles/Home.css'
import '../../../styles/Games.css'

type DemoConfig = {
	id: string
	name: string
	badge: string
	headline: string
	subheadline: string
	overview: string
	whatYouSee: string[]
	operatorView: string[]
	playerView: string[]
	sandbox: {
		title: string
		bullets: string[]
	}
}

const DEMO_CONFIG: Record<string, DemoConfig> = {
	'crossroad-escapables': {
		id: 'crossroad-escapables',
		name: 'Crossroad Escapables',
		badge: 'Crash Engine Demo',
		headline: 'Experience Crossroad Escapables in Action',
		subheadline:
			'Run a fully simulated crash session with fake balances, live curves, and OpenRNG-backed outcomes.',
		overview:
			'This demo environment shows how a typical operator integrates the Crossroad Escapables crash engine. Balances, wagers, and player IDs are sandbox-only — no real money, no real KYC.',
		whatYouSee: [
			'Real-time crash curves using the same engine as production.',
			'Configurable round speed and volatility presets.',
			'Example UI for desktop and mobile layouts.',
			'Debug view of OpenRNG round hashes and crash points.',
		],
		operatorView: [
			'Inspect sample API requests and responses alongside the UI.',
			'Toggle between Web2 and Web3-style integration flows.',
			'See how webhooks drive settlement and history.',
			'Review example logging and audit trails.',
		],
		playerView: [
			'Join rounds with play money balances.',
			'Practice timing cash-outs at different multipliers.',
			'Switch between a few example regional themes.',
			'See how fairness proofs appear in an advanced info panel.',
		],
		sandbox: {
			title: 'Crash Sandbox Environment',
			bullets: [
				'No signup required — demo accounts and balances are pre-configured.',
				'All activity runs against a dedicated demo cluster, separate from production.',
				'Each reload resets balances so you can replay scenarios from scratch.',
				'For custom demos with your own branding and numbers, talk to the MonkGames team.',
			],
		},
	},

	'drawballz-rushmore': {
		id: 'drawballz-rushmore',
		name: 'Drawballz | Rushmore Classics',
		badge: 'Instant-Lotto Demo',
		headline: 'Test-Drive Drawballz | Rushmore Classics',
		subheadline:
			'Spin up instant and scheduled draws with sandbox tickets, pools, and prize ladders.',
		overview:
			'This demo environment simulates a typical Drawballz integration: players buy tickets with play balances, draws run on a schedule, and results are backed by the same OpenRNG engine used in production.',
		whatYouSee: [
			'Instant-draw and scheduled pools running side by side.',
			'Winning numbers, prize tiers, and ticket views for multiple players.',
			'Example festival and neutral themes mapped to different pools.',
			'Debug view of draw metadata and RNG proofs.',
		],
		operatorView: [
			'Create example tickets from a pseudo ‘cashier’ screen.',
			'Watch how pools close, draw, and settle across the day.',
			'Inspect prize ladders and margin assumptions per pool.',
			'Review webhook-style events for draw.completed and ticket.settled.',
		],
		playerView: [
			'Pick numbers or quick-pick tickets with play money.',
			'Join different rooms (daily, hourly, festival) from a single lobby.',
			'Follow results across multiple tickets and draws.',
			'See how results, winning numbers, and proofs are surfaced in the UI.',
		],
		sandbox: {
			title: 'Draw Engine Sandbox Environment',
			bullets: [
				'Pre-configured pools simulating daily, hourly, and festival schedules.',
				'Tickets, balances, and results are sandbox-only and reset frequently.',
				'Operators can map what they see here to their own ticketing flows.',
				'For region-specific prize ladders and themes, we’ll create a tailored demo.',
			],
		},
	},
}

export default function GameDemoPage() {
	const params = useParams<{ game: string }>()
	const gameKey = params.game
	const demo = DEMO_CONFIG[gameKey]

	if (!demo) {
		return (
			<div className="demo-page">
				<header className="home-header">
					<div className="home-header__inner">
						<div className="home-header__brand">
							<a href="/">MonkGames</a>
						</div>
					</div>
				</header>
				<main className="game-demo">
					<section>
						<h1 className="game-detail__title">Demo not found</h1>
						<p className="game-detail__description">
							We couldn&apos;t find a demo for this game. Go back
							to <a href="/games">Games</a>.
						</p>
					</section>
				</main>
			</div>
		)
	}

	return (
		<div className="demo-page">
			{/* HEADER */}
			<header className="home-header">
				<div className="home-header__inner">
					<div className="home-header__brand">
						<a href="/">MonkGames</a>
					</div>

					<nav className="home-header__nav">
						<ul>
							<li>
								<a href="/platform">Platform</a>
							</li>
							<li>
								<a href="/solutions">Solutions</a>
							</li>
							<li>
								<a href="/games">Games</a>
							</li>

							<li>
								<a href="/marketplace">Marketplace</a>
							</li>
							<li>
								<a href="/resources">Resources</a>
							</li>
						</ul>
					</nav>

					<div className="home-header__actions">
						<a href="/partner" className="btn btn-primary">
							Become Partner
						</a>
						<a href="/access" className="btn btn-secondary">
							Operator Console
						</a>
					</div>
				</div>
			</header>

			<main className="game-demo">
				{/* HERO */}
				<section className="game-demo__hero">
					<div className="game-demo__hero-left">
						<p className="game-demo__badge">{demo.badge}</p>
						<h1 className="game-demo__title">{demo.headline}</h1>
						<p className="game-demo__subtitle">
							{demo.subheadline}
						</p>
						<p className="game-demo__overview">{demo.overview}</p>

						<div className="game-demo__cta-row">
							<a
								href="/partner"
								className="mg-btn mg-btn-primary">
								Get Sandbox Access
							</a>
							<a
								href={`/docs/${demo.id}`}
								className="mg-btn mg-btn-secondary">
								View Integration Docs
							</a>
							<a
								href={`/games/${demo.id}`}
								className="mg-btn mg-btn-ghost">
								Back to Game Page
							</a>
						</div>
					</div>

					{/* Fake device / placeholder for future embed */}
					<div className="game-demo__hero-right">
						<div className="game-demo__device">
							<div className="game-demo__device-header">
								<span className="game-demo__device-dot" />
								<span className="game-demo__device-dot" />
								<span className="game-demo__device-dot" />
							</div>
							<div className="game-demo__device-body">
								<p className="game-demo__device-title">
									{demo.name}
								</p>
								<p className="game-demo__device-text">
									Demo viewport placeholder. Embed your future
									Unity/Web client or iframe here.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* WHAT YOU SEE */}
				<section className="game-demo__section">
					<div className="game-demo__section-header">
						<h2>What This Demo Shows</h2>
						<p>
							Use this environment to understand how the engine
							feels in real play, and how it connects to your
							backend.
						</p>
					</div>

					<div className="game-demo__grid">
						<article className="game-demo__card">
							<h3>Engine Behaviour</h3>
							<ul className="game-demo__list">
								{demo.whatYouSee.map(item => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>

						<article className="game-demo__card">
							<h3>Operator View</h3>
							<ul className="game-demo__list">
								{demo.operatorView.map(item => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>

						<article className="game-demo__card">
							<h3>Player View</h3>
							<ul className="game-demo__list">
								{demo.playerView.map(item => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					</div>
				</section>

				{/* SANDBOX INFO */}
				<section className="game-demo__section">
					<div className="game-demo__sandbox">
						<div className="game-demo__sandbox-inner">
							<h2>{demo.sandbox.title}</h2>
							<ul className="game-demo__list">
								{demo.sandbox.bullets.map(b => (
									<li key={b}>{b}</li>
								))}
							</ul>

							<div className="game-demo__sandbox-cta">
								<a
									href="/partner"
									className="mg-btn mg-btn-primary">
									Schedule Guided Demo
								</a>
								<a
									href={`/docs/${demo.id}`}
									className="mg-btn mg-btn-secondary">
									Self-Serve Integration
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="game-detail__final-cta">
					<div className="game-detail__final-cta-inner">
						<h2>Ready to try {demo.name} with your numbers?</h2>
						<p>
							Share your target markets, player volumes, and tech
							stack. We&apos;ll spin up a private demo with your
							own settings and projections.
						</p>

						<div className="game-detail__final-cta-actions">
							<a
								href="/partner"
								className="mg-btn mg-btn-primary">
								Talk to the Team
							</a>
							<a
								href={`/docs/${demo.id}`}
								className="mg-btn mg-btn-secondary">
								Jump to Integration Docs
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
