// app/games/[game]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import '../../styles/Home.css'
import '../../styles/Games.css'
import '../../styles/Docs.css'

type StatChip = {
	label: string
	caption: string
}

type Badge = {
	label: string
}

type Benefit = {
	title: string
	description: string
}

type LoopStep = {
	title: string
	description: string
}

type BusinessImpactItem = {
	metric: string
	label: string
	note: string
}

type RoiRow = {
	label: string
	value: string
	hint: string
}

type Testimonial = {
	quote: string
	source: string
	role: string
}

type ThemePreview = {
	name: string
	region: string
	description: string
}

type GameDetail = {
	id: string
	name: string
	badge: string
	subtitle: string
	description: string
	typeBadges: Badge[]
	statChips: StatChip[]
	operatorHighlights: Benefit[]
	playerHighlights: Benefit[]
	loopTitle: string
	loopSteps: LoopStep[]
	docsUrl: string
	businessImpact: {
		title: string
		subtitle: string
		items: BusinessImpactItem[]
	}
	roi: {
		title: string
		subtitle: string
		rows: RoiRow[]
	}
	architecture: {
		title: string
		subtitle: string
		bullets: string[]
	}
	compliance: {
		title: string
		subtitle: string
		bullets: string[]
	}
	themes: {
		title: string
		subtitle: string
		items: ThemePreview[]
	}
	testimonials: {
		title: string
		items: Testimonial[]
	}
}

const GAME_DETAILS: Record<string, GameDetail> = {
	'crossroad-escapables': {
		id: 'crossroad-escapables',
		name: 'Crossroad Escapables',
		badge: 'Crash Engine',
		subtitle: 'High–energy crash rounds with OpenRNG fairness.',
		description:
			'Crossroad Escapables powers streamer–ready crash experiences with transparent multipliers, fast round resolution, and regional themes layered on top. Operators run the same underlying math while re–skinning the universe for each market.',
		typeBadges: [
			{ label: 'Crash Game' },
			{ label: 'Streamer-Friendly' },
			{ label: 'Real-Time Multipliers' },
		],
		statChips: [
			{ label: 'x10,000+', caption: 'Max supported multiplier' },
			{ label: '< 200ms', caption: 'Round resolution' },
			{ label: 'Multi-theme', caption: 'Skins per engine' },
		],
		operatorHighlights: [
			{
				title: 'One Engine, Many Skins',
				description:
					'Run multiple regionally tuned crash experiences on the same underlying engine, each with its own lobby presence and theme.',
			},
			{
				title: 'Streamer & Community Ready',
				description:
					'Spectator modes and clear round states make it easy to embed into live streams, influencer hubs, and community tournaments.',
			},
			{
				title: 'Provably Fair by Design',
				description:
					'Crash logic is backed by OpenRNG with verifiable rounds and optional on–chain proofs.',
			},
		],
		playerHighlights: [
			{
				title: 'Instantly Understandable',
				description:
					'Simple ‘cash-out before the crash’ loop that feels familiar even to new players.',
			},
			{
				title: 'Tuned for High Energy',
				description:
					'Short rounds, clear win moments, and optional side-UI for multipliers, streaks, and leaderboards.',
			},
			{
				title: 'Localized Presentation',
				description:
					'Audio, visuals, and pacing can be tuned per market without changing the math or fairness model.',
			},
		],
		loopTitle: 'Crash Round Flow at a Glance',
		loopSteps: [
			{
				title: '1. Player joins a round',
				description:
					'Your frontend collects wager and currency, then your backend calls MonkGames to create a crash round.',
			},
			{
				title: '2. Curve runs in real time',
				description:
					'You subscribe to round updates and animate the multiplier curve. Players can cash out at any time before the crash.',
			},
			{
				title: '3. Round completes & settles',
				description:
					'When the crash point is reached, winners are paid out based on their cash-out multiplier. Webhooks provide the final, auditable outcome.',
			},
		],
		docsUrl: '/docs/crossroad-escapables',
		businessImpact: {
			title: 'Business Impact for Crash Portfolios',
			subtitle:
				'What partners typically see after replacing generic crash titles with Crossroad Escapables.',
			items: [
				{
					metric: '+18–32%',
					label: 'Session length',
					note: 'Longer sessions from higher perceived fairness and theme variety.',
				},
				{
					metric: '+12–20%',
					label: 'Crash GGR',
					note: 'Uplift from better retention and higher average round volume.',
				},
				{
					metric: '-30–50%',
					label: 'Fairness disputes',
					note: 'OpenRNG proofs and transparent outcomes reduce support load.',
				},
			],
		},
		roi: {
			title: 'Crash Engine Revenue Snapshot (Illustrative)',
			subtitle:
				'Use your own numbers here — this is an example of how a single crash title can perform in a mid-sized market.',
			rows: [
				{
					label: 'Daily active crash players',
					value: '2,500–5,000',
					hint: 'Medium operator across web + mobile.',
				},
				{
					label: 'Avg rounds per player / day',
					value: '35–55',
					hint: 'Short, repeatable rounds tuned for streamers.',
				},
				{
					label: 'Avg GGR per player / day',
					value: '$1.40–$2.80',
					hint: 'Before bonuses, assuming responsible limits.',
				},
				{
					label: 'Theming uplift',
					value: '+8–15% GGR',
					hint: 'Region-specific skins & events vs single global theme.',
				},
			],
		},
		architecture: {
			title: 'How Crossroad Escapables Fits Your Stack',
			subtitle:
				'MonkGames stays in the logic and fairness layer. You keep custody, compliance, and player relationships.',
			bullets: [
				'Your frontend renders the crash UI and talks only to your backend (no direct calls from client → MonkGames).',
				'Your backend creates crash rounds and cashouts via MonkGames APIs using your internal player IDs.',
				'MonkGames runs the OpenRNG crash logic and returns sealed, auditable outcomes.',
				'Webhooks push final results back to your backend, which updates balances, loyalty, and CRM.',
				'Themes are managed via the Theme Studio and applied at presentation time without touching the math.',
			],
		},
		compliance: {
			title: 'Fairness, Compliance & Ops',
			subtitle:
				'Crash engines are often the hardest to explain to regulators. OpenRNG plus on-chain proofs make it easier.',
			bullets: [
				'OpenRNG-backed engines with round hashes and seed provenance available to auditors.',
				'Optional on-chain publication of round proofs for markets that require external verification.',
				'Operator-controlled limits and volatility profiles per market, configured outside player-facing UI.',
				'Clear audit endpoints for reconstructing historical rounds, wagers, and outcomes.',
				'Separation of concerns: MonkGames never touches player funds, only game outcomes.',
			],
		},
		themes: {
			title: 'Theme Ideas for Crossroad Escapables',
			subtitle:
				'Each theme is a skin on the same engine — different IP, same fairness and math.',
			items: [
				{
					name: 'Desert Mirage Crash',
					region: 'MENA',
					description:
						'Heat-haze skyline, caravan trails, and local musical cues tuned for GCC audiences.',
				},
				{
					name: 'Neon Overpass',
					region: 'APAC',
					description:
						'Neo–Tokyo freeway visuals, synthwave sound design, and high-energy streamer overlays.',
				},
				{
					name: 'Bollywood Skyfall',
					region: 'India',
					description:
						'Festival lights, drum rises before the crash, and callouts in region-specific Hindi/English mixes.',
				},
				{
					name: 'Euro Night Run',
					region: 'EU',
					description:
						'Modern stadium lighting, neutral soundscape, and tournament-ready overlays for regulated markets.',
				},
			],
		},
		testimonials: {
			title: 'What Early Partners Say',
			items: [
				{
					quote: 'Crossroad Escapables was the first crash product our compliance team actually felt comfortable approving.',
					source: 'Head of Product',
					role: 'Tier-2 EU Operator',
				},
				{
					quote: 'Streamer communities loved the localized themes. Retention on crash sessions went up without changing our promos.',
					source: 'Co-founder',
					role: 'Crypto Casino Studio',
				},
			],
		},
	},

	'drawballz-rushmore': {
		id: 'drawballz-rushmore',
		name: 'Drawballz | Rushmore Classics',
		badge: 'Instant-Lotto Engine',
		subtitle: 'Festival-ready instant & scheduled draw formats.',
		description:
			'Drawballz reimagines classic draw and ritual lotto formats as modern instant and scheduled experiences. Tickets, rooms, mascots, and festival themes are all swappable layers on top of a transparent draw engine.',
		typeBadges: [
			{ label: 'Instant-Lotto' },
			{ label: 'Festival-Ready' },
			{ label: 'Multi-Region' },
		],
		statChips: [
			{ label: 'Up to 6 + Bonus', caption: 'Balls per draw' },
			{ label: '5–30s', caption: 'Average draw time' },
			{ label: 'Tickets • Rooms • Mascots', caption: 'Theme layers' },
		],
		operatorHighlights: [
			{
				title: 'Daily, Hourly, or Festival Calendars',
				description:
					'Configure pools for daily draws, hourly events, or limited–time festival calendars tied to real-world rituals.',
			},
			{
				title: 'Flexible Prize Ladders',
				description:
					'Design prize tables, bonus balls, and consolation tiers for each pool while keeping math auditable.',
			},
			{
				title: 'Built for Market-Specific IP',
				description:
					'Use tickets, rooms, and mascots to create IP that feels truly native to your target culture or region.',
			},
		],
		playerHighlights: [
			{
				title: 'Familiar, Not Intimidating',
				description:
					'Classic ‘pick your numbers and wait for the draw’ flow with modern UX and instant-draw options.',
			},
			{
				title: 'Community Moments',
				description:
					'Scheduled draws create shareable moments for communities, streamers, and real-world venues.',
			},
			{
				title: 'Transparent Results',
				description:
					'OpenRNG-backed draws, clear winning number displays, and optional proof surfaces for advanced users.',
			},
		],
		loopTitle: 'Draw & Ticket Flow at a Glance',
		loopSteps: [
			{
				title: '1. Ticket is created',
				description:
					'Your backend calls MonkGames to create a ticket for the selected pool, returning ticketId (and drawId for scheduled games).',
			},
			{
				title: '2. Draw runs',
				description:
					'For instant games, results come back immediately. For scheduled pools, you listen for draw.completed and ticket.settled events.',
			},
			{
				title: '3. Prizes settle',
				description:
					'You credit winners based on prize tier and matched balls, while MonkGames provides an auditable record of each draw.',
			},
		],
		docsUrl: '/docs/drawballz-rushmore',
		businessImpact: {
			title: 'Business Impact for Lotto & Ritual Games',
			subtitle:
				'Where Drawballz typically moves the needle after replacing generic instant-lotto content.',
			items: [
				{
					metric: '+10–22%',
					label: 'Draw participation',
					note: 'Festival and ritual themes increase ticket purchases around key dates.',
				},
				{
					metric: '+15–25%',
					label: 'Return play within 7 days',
					note: 'Shorter draw cycles and instant variants keep players engaged between big events.',
				},
				{
					metric: '-20–35%',
					label: 'Support friction',
					note: 'Transparent winning numbers and proofs reduce confusion around prize tiers.',
				},
			],
		},
		roi: {
			title: 'Draw Engine Revenue Snapshot (Illustrative)',
			subtitle:
				'One mid-sized operator running daily + hourly Drawballz pools.',
			rows: [
				{
					label: 'Tickets per day (all pools)',
					value: '85,000–140,000',
					hint: 'Mix of daily, hourly, and event-based rituals.',
				},
				{
					label: 'Avg stake per ticket',
					value: '$0.75–$1.20',
					hint: 'Varies by market and currency.',
				},
				{
					label: 'Effective margin after prizes',
					value: '9–14%',
					hint: 'Depends on your prize ladder configuration.',
				},
				{
					label: 'Theming uplift on key dates',
					value: '+12–18% ticket volume',
					hint: 'Festival and ritual themes vs plain-brand lotto.',
				},
			],
		},
		architecture: {
			title: 'How Drawballz Fits Your Stack',
			subtitle:
				'You keep ticketing, KYC, and payout control. MonkGames runs the draw logic.',
			bullets: [
				'Your lobby or cashier creates tickets via MonkGames APIs using your internal player IDs and pool configuration.',
				'Draws can be configured as instant (result in response) or scheduled (result via webhooks).',
				'MonkGames generates winning numbers using OpenRNG and publishes them alongside round metadata.',
				'Your backend maps prize tiers to your promotion, jackpot, and loyalty systems.',
				'Theme layers (tickets, rooms, mascots) are applied in your UX or via Theme Studio widgets.',
			],
		},
		compliance: {
			title: 'Fairness, Compliance & Ops',
			subtitle:
				'Designed to fit regulated lotto and instant-win environments.',
			bullets: [
				'Configurable prize ladders and payout percentages per jurisdiction.',
				'Full audit trail of every draw, including seed material and winning numbers.',
				'Stateless API design – you control ticket issuance and payment flows.',
				'Optional on-chain publication for high-transparency, web3-native markets.',
				'RNG and draw logic separate from presentation, simplifying certifications.',
			],
		},
		themes: {
			title: 'Theme Ideas for Drawballz | Rushmore Classics',
			subtitle:
				'Ritual, festival, and venue-based themes layered on top of the same draw engine.',
			items: [
				{
					name: 'Rushmore Nights',
					region: 'North America',
					description:
						'Classic roadside attractions, neon signage, and soundtrack tuned to US players.',
				},
				{
					name: 'Diwali Draw Rooms',
					region: 'India',
					description:
						'Festival lamps, fireworks reveals, and special mega-draw calendars around the season.',
				},
				{
					name: 'Carnaval Cascades',
					region: 'LATAM',
					description:
						'Parade routes, mask motifs, and big-prize events scheduled around carnival dates.',
				},
				{
					name: 'Euro Metro Millions',
					region: 'EU',
					description:
						'Clean, neutral brand style that fits into existing EU lotto ecosystems and affiliates.',
				},
			],
		},
		testimonials: {
			title: 'What Early Partners Say',
			items: [
				{
					quote: 'Drawballz gave us a way to make national festivals feel special inside the product, not just in banners.',
					source: 'VP Product',
					role: 'Regional Lottery Operator',
				},
				{
					quote: 'We used the same underlying pool for three markets with different mascots and prize ladders. Operations loved it.',
					source: 'Director of Gaming',
					role: 'Multi-region Operator',
				},
			],
		},
	},
}

export default function GameDetailPage() {
	const params = useParams<{ game: string }>()
	const gameKey = params.game
	const game = GAME_DETAILS[gameKey]

	if (!game) {
		return (
			<div className="game-detail-page">
				<header className="home-header">
					<div className="home-header__inner">
						<div className="home-header__brand">
							<a href="/">MonkGames</a>
						</div>
					</div>
				</header>
				<main className="game-detail">
					<section>
						<h1 className="game-detail__title">Game not found</h1>
						<p className="game-detail__description">
							We couldn&apos;t find this game. Go back to{' '}
							<a href="/games">Games</a> to explore available
							titles.
						</p>
					</section>
				</main>
			</div>
		)
	}

	return (
		<div className="game-detail-page">
			{/* HEADER */}
			<header className="home-header">
				<div className="home-header__inner">
					<div className="home-header__brand">
						<a href="/">MonkGames</a>
					</div>

					<nav className="home-header__nav">
						<ul>
							<li className="home-header__nav-item--active">
								<a href="/games">Games</a>
							</li>
							<li>
								<a href="/solutions">Solutions</a>
							</li>
							<li>
								<a href="/marketplace">Marketplace</a>
							</li>
							<li>
								<a href="/docs">Resources</a>
							</li>
						</ul>
					</nav>

					<div className="home-header__actions">
						<a href="/partner" className="btn btn-primary">
							Partner With Us
						</a>
						<a href="/access" className="btn btn-secondary">
							Operator Console
						</a>
					</div>
				</div>
			</header>

			<main className="game-detail">
				{/* HERO */}
				<section className="game-detail__hero">
					<div className="game-detail__hero-left">
						<p className="game-detail__badge">{game.badge}</p>
						<h1 className="game-detail__title">{game.name}</h1>
						<p className="game-detail__subtitle">{game.subtitle}</p>
						<p className="game-detail__description">
							{game.description}
						</p>

						<div className="game-detail__type-badges">
							{game.typeBadges.map(b => (
								<span
									key={b.label}
									className="game-detail__type-pill">
									{b.label}
								</span>
							))}
						</div>

						<div className="game-detail__stats">
							{game.statChips.map(s => (
								<div
									key={s.label}
									className="game-detail__stat-chip">
									<div className="game-detail__stat-label">
										{s.label}
									</div>
									<div className="game-detail__stat-caption">
										{s.caption}
									</div>
								</div>
							))}
						</div>

						<div className="game-detail__cta-row">
							<a
								href="/partner"
								className="mg-btn mg-btn-primary">
								Talk to the Team
							</a>
							<a
								href={game.docsUrl}
								className="mg-btn mg-btn-secondary">
								View Integration Docs
							</a>
							<a href="/contact" className="mg-btn mg-btn-ghost">
								Request Demo Access
							</a>
						</div>
					</div>

					<div className="game-detail__hero-right">
						<div className="game-detail__hero-card">
							<span className="game-detail__hero-card-label">
								Powered by MonkGames
							</span>
							<h2>{game.name}</h2>
							<p>
								OpenRNG • On-chain proofs • Theme-ready engine
							</p>
						</div>
					</div>
				</section>

				{/* LOOP OVERVIEW */}
				<section className="game-detail__section">
					<div className="game-detail__section-header">
						<h2>{game.loopTitle}</h2>
						<p>
							This is the typical round or ticket lifecycle used
							by most operators. All calls happen server–to–server
							from your backend to MonkGames.
						</p>
					</div>

					<div className="game-detail__loop">
						{game.loopSteps.map(step => (
							<article
								key={step.title}
								className="game-detail__loop-card">
								<h3>{step.title}</h3>
								<p>{step.description}</p>
							</article>
						))}
					</div>
				</section>

				{/* OPERATOR BENEFITS */}
				<section className="game-detail__section">
					<div className="game-detail__section-header">
						<h2>Why Operators Choose {game.name}</h2>
						<p>
							Built for real-money ecosystems that need both
							provable fairness and deep cultural flexibility.
						</p>
					</div>

					<div className="game-detail__grid">
						{game.operatorHighlights.map(item => (
							<article
								key={item.title}
								className="game-detail__info-card">
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</section>

				{/* PLAYER EXPERIENCE */}
				<section className="game-detail__section">
					<div className="game-detail__section-header">
						<h2>Player Experience Highlights</h2>
						<p>
							The same underlying math can power very different
							worlds — from local festivals to global streams.
						</p>
					</div>

					<div className="game-detail__grid">
						{game.playerHighlights.map(item => (
							<article
								key={item.title}
								className="game-detail__info-card">
								<h3>{item.title}</h3>
								<p>{item.description}</p>
							</article>
						))}
					</div>
				</section>

				{/* BUSINESS IMPACT */}
				<section className="game-detail__section">
					<div className="game-detail__section-header">
						<h2>{game.businessImpact.title}</h2>
						<p>{game.businessImpact.subtitle}</p>
					</div>

					<div className="game-detail__business">
						{game.businessImpact.items.map(item => (
							<article
								key={item.label}
								className="game-detail__business-card">
								<div className="game-detail__business-metric">
									{item.metric}
								</div>
								<div className="game-detail__business-label">
									{item.label}
								</div>
								<p className="game-detail__business-note">
									{item.note}
								</p>
							</article>
						))}
					</div>
				</section>

				{/* ROI SNAPSHOT */}
				<section className="game-detail__section">
					<div className="game-detail__roi">
						<div className="game-detail__roi-inner">
							<h2>{game.roi.title}</h2>
							<p>{game.roi.subtitle}</p>

							<div className="game-detail__roi-rows">
								{game.roi.rows.map(row => (
									<div
										key={row.label}
										className="game-detail__roi-row">
										<div className="game-detail__roi-label">
											{row.label}
										</div>
										<div className="game-detail__roi-value">
											{row.value}
										</div>
										<div className="game-detail__roi-hint">
											{row.hint}
										</div>
									</div>
								))}
							</div>

							<div className="game-detail__roi-cta">
								<a
									href="/partner"
									className="mg-btn mg-btn-primary">
									Model This with Our Team
								</a>
								<a
									href={game.docsUrl}
									className="mg-btn mg-btn-secondary">
									See Technical Limits
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* ARCHITECTURE & COMPLIANCE */}
				<section className="game-detail__section">
					<div className="game-detail__arch-grid">
						<div>
							<div className="game-detail__section-header">
								<h2>{game.architecture.title}</h2>
								<p>{game.architecture.subtitle}</p>
							</div>
							<ul className="game-detail__bullets">
								{game.architecture.bullets.map(b => (
									<li key={b}>{b}</li>
								))}
							</ul>
						</div>

						<div>
							<div className="game-detail__section-header">
								<h2>{game.compliance.title}</h2>
								<p>{game.compliance.subtitle}</p>
							</div>
							<ul className="game-detail__bullets">
								{game.compliance.bullets.map(b => (
									<li key={b}>{b}</li>
								))}
							</ul>
						</div>
					</div>
				</section>

				{/* THEME PREVIEWS */}
				<section className="game-detail__section">
					<div className="game-detail__section-header">
						<h2>{game.themes.title}</h2>
						<p>{game.themes.subtitle}</p>
					</div>

					<div className="game-detail__themes">
						{game.themes.items.map(theme => (
							<article
								key={theme.name}
								className="game-detail__theme-card">
								<div className="game-detail__theme-meta">
									<span className="game-detail__theme-tag">
										{theme.region}
									</span>
								</div>
								<h3>{theme.name}</h3>
								<p>{theme.description}</p>
							</article>
						))}
					</div>
				</section>

				{/* TESTIMONIALS */}
				<section className="game-detail__section">
					<div className="game-detail__section-header">
						<h2>{game.testimonials.title}</h2>
						<p>
							Early partners using MonkGames engines in production
							or controlled pilots.
						</p>
					</div>

					<div className="game-detail__testimonials">
						{game.testimonials.items.map((t, idx) => (
							<article
								key={t.quote + idx}
								className="game-detail__testimonial-card">
								<p className="game-detail__testimonial-quote">
									“{t.quote}”
								</p>
								<p className="game-detail__testimonial-source">
									{t.source} · <span>{t.role}</span>
								</p>
							</article>
						))}
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="game-detail__final-cta">
					<div className="game-detail__final-cta-inner">
						<h2>Ready to launch {game.name}?</h2>
						<p>
							Share your target markets, compliance needs, and
							theme ideas. We&apos;ll help you scope the fastest
							path from sandbox to live deployment.
						</p>

						<div className="game-detail__final-cta-actions">
							<a
								href={game.docsUrl}
								className="mg-btn mg-btn-secondary">
								Browse Integration Docs
							</a>
							<a
								href="/partner"
								className="mg-btn mg-btn-primary">
								Book Integration Call
							</a>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
