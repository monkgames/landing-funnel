// app/marketplace/page.tsx
'use client'

import type { CSSProperties } from 'react'
import '../styles/Home.css'

type Variant = 'primary' | 'secondary' | 'ghost'

type CTA = {
	label: string
	href?: string
	variant?: Variant
	external?: boolean
}

type Category = {
	title: string
	tag: string
	body: string
	bullets: string[]
}

type Audience = {
	title: string
	body: string
	bullets: string[]
}

type Step = {
	label: string
	title: string
	body: string
}

type UseCase = {
	title: string
	body: string
}

type MarketplaceContent = {
	hero: {
		badge: string
		title: string
		subtitle: string
		ctas: CTA[]
	}
	overview: {
		title: string
		subtitle: string
		body: string
	}
	categories: {
		title: string
		subtitle: string
		items: Category[]
	}
	audiences: {
		title: string
		subtitle: string
		items: Audience[]
	}
	howItWorks: {
		title: string
		subtitle: string
		stepsForOperators: Step[]
		stepsForCreators: Step[]
	}
	useCases: {
		title: string
		subtitle: string
		items: UseCase[]
	}
	trust: {
		title: string
		subtitle: string
		bullets: string[]
	}
	finalCta: {
		title: string
		subtitle: string
		ctas: CTA[]
	}
}

const content: MarketplaceContent = {
	hero: {
		badge: 'Marketplace · Themes, Worlds & Rituals',
		title: 'The marketplace where iGaming experiences are minted.',
		subtitle:
			'The MonkGames Marketplace is where operators discover culture-tuned themes and experiences for crash and instant-lotto — and where creators publish, license, and monetize their game worlds.',
		ctas: [
			{
				label: 'Browse as Operator',
				href: '/#partner',
				variant: 'primary',
			},
			{
				label: 'Build as Creator',
				href: '/docs',
				variant: 'secondary',
			},
		],
	},
	overview: {
		title: 'Not just skins — programmable experiences.',
		subtitle:
			'Each Marketplace listing is a structured experience: visual world, pacing, rituals, audio, and configuration metadata that Gamdock can understand and deploy.',
		body: 'Operators get a catalog of experiences they can switch on per brand, market, or campaign with a few clicks. Creators get rails, standards, and a monetization model that respects their IP. The Marketplace is where the two meet.',
	},
	categories: {
		title: 'What lives in the MonkGames Marketplace',
		subtitle:
			'Experiences are grouped by what they change: the feel of crash, the rhythm of lotto, or the entire ritual around play.',
		items: [
			{
				tag: 'Crash Experiences',
				title: 'Crossroad Escapables universes',
				body: 'Worlds that wrap the crash engine with new visual identities, soundscapes, motion systems, and emotional beats.',
				bullets: [
					'High-intensity, arcade-style crash themes.',
					'Slow-burn, ritual-inspired experiences.',
					'Festival / season-specific crash overlays.',
					'Brand-owned exclusive crash universes.',
				],
			},
			{
				tag: 'Instant-Lotto Experiences',
				title: 'Drawballz | Rushmore Classics themes',
				body: 'Instant-lotto worlds where drawings, reveals, and rituals are tuned to regional and cultural expectations.',
				bullets: [
					'Daily, weekly, and event-triggered draw packs.',
					'Visual and audio treatments per market.',
					'Themed draw sequences for festivals & sports.',
					'Branded lotto journeys for VIP segments.',
				],
			},
			{
				tag: 'Ritual & Meta Layers',
				title: 'Rituals, overlays & meta systems',
				body: 'Meta layers that sit across engines: progress bars, collectibles, events, and rituals that bind multiple titles together.',
				bullets: [
					'Journey systems that span crash and lotto.',
					'Event overlays tied to real-world calendars.',
					'Reward and collection frames designed for RG.',
					'Creator-built rituals tested on Gamdock rails.',
				],
			},
		],
	},
	audiences: {
		title: 'Marketplace value for both sides of the ecosystem',
		subtitle:
			'The Marketplace is where Gamdock and GamCore SDK become visible and monetizable.',
		items: [
			{
				title: 'For operators & platforms',
				body: 'You treat the Marketplace as your ever-growing catalog of plug-and-play experiences, backed by Gamdock.',
				bullets: [
					'Discover themes by region, festival, intensity, and risk profile.',
					'Preview how experiences feel before activation.',
					'Activate per brand, market, or segment without new code.',
					'Negotiate exclusivity for key themes and partners.',
				],
			},
			{
				title: 'For studios & creators',
				body: 'You treat the Marketplace as your storefront, powered by GamCore SDK and MonkGames rails.',
				bullets: [
					'Package worlds, rituals, and themes in a standard format.',
					'Publish to a catalog visible to serious operators.',
					'Earn from every activation, brand, and market.',
					'Offer exclusive deals to operators you resonate with.',
				],
			},
			{
				title: 'For the ecosystem',
				body: 'The Marketplace becomes a shared space where innovation compounds instead of being locked inside a single vendor.',
				bullets: [
					'New experiences launch faster and travel further.',
					'Operators reduce risk, creators increase upside.',
					'Gamdock stays at the center as the neutral rail.',
					'Fairness and compliance stay consistent across everything.',
				],
			},
		],
	},
	howItWorks: {
		title: 'How the Marketplace works',
		subtitle:
			'The same platform — two primary paths: operators activating, creators publishing.',
		stepsForOperators: [
			{
				label: 'Operator · Step 01',
				title: 'Connect via Gamdock',
				body: 'You integrate Gamdock Core and engines. Once live, your brands can see Marketplace experiences relevant to your markets.',
			},
			{
				label: 'Operator · Step 02',
				title: 'Browse & shortlist experiences',
				body: 'Filter by game type, region, festival, intensity, or performance profile. Shortlist experiences for internal review.',
			},
			{
				label: 'Operator · Step 03',
				title: 'Run controlled activations',
				body: 'Activate experiences for one brand, a single region, or a time-bounded campaign. Monitor impact through the console.',
			},
			{
				label: 'Operator · Step 04',
				title: 'Scale what works',
				body: 'Roll successful experiences out to more brands and markets, negotiate exclusivity when it makes sense.',
			},
		],
		stepsForCreators: [
			{
				label: 'Creator · Step 01',
				title: 'Build with GamCore SDK',
				body: 'Use GamCore SDK to design visuals, flows, sound, and rituals that wrap around MonkGames engines.',
			},
			{
				label: 'Creator · Step 02',
				title: 'Package & submit',
				body: 'Package your experience according to Marketplace standards: assets, config, variants, and documentation.',
			},
			{
				label: 'Creator · Step 03',
				title: 'Publish to Marketplace',
				body: 'Once reviewed, your experience appears in the catalog, with clear terms (public, semi-private, or exclusive).',
			},
			{
				label: 'Creator · Step 04',
				title: 'Earn from activations',
				body: 'You receive revenue shares, licensing fees, or one-off deals each time operators activate your work.',
			},
		],
	},
	useCases: {
		title: 'Examples of Marketplace-driven solutions',
		subtitle:
			'A few patterns we designed the Marketplace for — you will likely invent more.',
		items: [
			{
				title: 'Festival-first crash journeys',
				body: 'An India-focused operator activates Diwali, Navratri, or Onam-themed crash worlds each season, without touching the core crash integration.',
			},
			{
				title: 'Regional lotto calendars',
				body: 'A platform running across multiple countries layers local cultural motifs and rituals on top of Drawballz, aligned to each country’s events.',
			},
			{
				title: 'Creator-led brand worlds',
				body: 'A studio partners with a single operator group to build a shared universe that spans crash, instant-lotto, and rituals across multiple brands.',
			},
			{
				title: 'Experimental meta layers',
				body: 'Builders test new progression systems, overlays, and collection loops in the Marketplace, where operators can opt in and measure real impact.',
			},
		],
	},
	trust: {
		title: 'Curated, audited and aligned with fairness first.',
		subtitle:
			'This is not an “anything goes” marketplace. It sits on MonkGames fairness, review, and operator-grade standards.',
		bullets: [
			'All Marketplace experiences run on top of MonkGames engines and OpenRNG fairness.',
			'Creators are onboarded with clear criteria and technical review.',
			'Experiences are tested in sandbox and staging before being visible for activation.',
			'Optional lab and regulator documentation for sensitive markets.',
			'Clear commercial terms for operators, platforms, and creators.',
		],
	},
	finalCta: {
		title: 'Be early to the MonkGames Marketplace.',
		subtitle:
			'Whether you want to activate new experiences as an operator, or publish them as a creator — now is the best time to shape how this ecosystem grows.',
		ctas: [
			{
				label: 'I’m an Operator / Platform',
				href: '/#partner',
				variant: 'primary',
			},
			{
				label: 'I’m a Creator / Studio',
				href: '/docs',
				variant: 'secondary',
			},
		],
	},
}

function renderButton(cta: CTA, extraClass = '') {
	const variant: Variant = cta.variant ?? 'primary'
	const href = cta.href ?? '#'
	const isExternal = cta.external && href.startsWith('http')
	const className = `btn btn-${variant} ${extraClass}`.trim()

	return (
		<a
			key={cta.label}
			href={href}
			className={className}
			target={isExternal ? '_blank' : '_self'}
			rel={isExternal ? 'noreferrer' : undefined}>
			{cta.label}
		</a>
	)
}

export default function MarketplacePage() {
	const {
		hero,
		overview,
		categories,
		audiences,
		howItWorks,
		useCases,
		trust,
		finalCta,
	} = content

	return (
		<div className="home">
			{/* HEADER (same as other pages) */}
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
						{renderButton(
							{
								label: 'Become Partner',
								href: '/#partner',
								variant: 'secondary',
							},
							''
						)}
						{renderButton(
							{
								label: 'Operator Console',
								href: '/access',
								variant: 'primary',
							},
							''
						)}
					</div>
				</div>
			</header>

			<main className="home-main">
				{/* HERO */}
				<section className="hero">
					<div className="hero__layout">
						<div>
							<p className="hero__badge">{hero.badge}</p>
							<h1 className="hero__title">{hero.title}</h1>
							<p className="hero__subtitle">{hero.subtitle}</p>

							<div className="hero__ctas">
								{hero.ctas.map(cta => renderButton(cta))}
							</div>
						</div>

						{/* Simple device visual */}
						<div className="hero__visual" style={deviceWrapper}>
							<div style={deviceHeader}>
								<span style={deviceDot} />
								<span style={deviceDot} />
								<span style={deviceDot} />
							</div>
							<div style={deviceBody}>
								<p style={deviceTitle}>Marketplace Preview</p>
								<p style={deviceText}>
									Cards of crash and instant-lotto experiences
									organized by region, festival, intensity,
									and creator — ready for activation.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* OVERVIEW */}
				<section className="section">
					<h2 className="section__title">{overview.title}</h2>
					<p className="section__subtitle">{overview.subtitle}</p>
					<p className="section__subtitle">{overview.body}</p>
				</section>

				{/* CATEGORIES */}
				<section className="section">
					<h2 className="section__title">{categories.title}</h2>
					<p className="section__subtitle">{categories.subtitle}</p>

					<div className="grid grid--three">
						{categories.items.map(item => (
							<article key={item.title} className="card">
								<span
									style={{
										display: 'inline-flex',
										padding: '0.18rem 0.55rem',
										borderRadius: 999,
										border: '1px solid var(--border-subtle)',
										fontSize: '0.78rem',
										marginBottom: '0.35rem',
									}}>
									{item.tag}
								</span>
								<h3 className="card__title">{item.title}</h3>
								<p className="card__body">{item.body}</p>
								<ul className="card__list">
									{item.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				{/* AUDIENCES */}
				<section className="section">
					<h2 className="section__title">{audiences.title}</h2>
					<p className="section__subtitle">{audiences.subtitle}</p>

					<div className="grid grid--three">
						{audiences.items.map(item => (
							<article key={item.title} className="card">
								<h3 className="card__title">{item.title}</h3>
								<p className="card__body">{item.body}</p>
								<ul className="card__list">
									{item.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				{/* HOW IT WORKS */}
				<section className="section">
					<h2 className="section__title">{howItWorks.title}</h2>
					<p className="section__subtitle">{howItWorks.subtitle}</p>

					<div className="grid grid--two">
						<article className="card">
							<h3 className="card__title">
								Operator / Platform flow
							</h3>
							<div className="grid grid--two">
								{howItWorks.stepsForOperators.map(step => (
									<div
										key={step.title}
										className="card card--step">
										<div className="card-step__label">
											{step.label}
										</div>
										<h4 className="card__title">
											{step.title}
										</h4>
										<p className="card__body">
											{step.body}
										</p>
									</div>
								))}
							</div>
						</article>

						<article className="card">
							<h3 className="card__title">
								Creator / Studio flow
							</h3>
							<div className="grid grid--two">
								{howItWorks.stepsForCreators.map(step => (
									<div
										key={step.title}
										className="card card--step">
										<div className="card-step__label">
											{step.label}
										</div>
										<h4 className="card__title">
											{step.title}
										</h4>
										<p className="card__body">
											{step.body}
										</p>
									</div>
								))}
							</div>
						</article>
					</div>
				</section>

				{/* USE CASES */}
				<section className="section">
					<h2 className="section__title">{useCases.title}</h2>
					<p className="section__subtitle">{useCases.subtitle}</p>

					<div className="grid grid--two">
						{useCases.items.map(item => (
							<article key={item.title} className="card">
								<h3 className="card__title">{item.title}</h3>
								<p className="card__body">{item.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* TRUST & CURATION */}
				<section className="section">
					<h2 className="section__title">{trust.title}</h2>
					<p className="section__subtitle">{trust.subtitle}</p>

					<ul className="card__list">
						{trust.bullets.map(b => (
							<li key={b}>{b}</li>
						))}
					</ul>
				</section>

				{/* FINAL CTA */}
				<section className="section section--final-cta">
					<h3 className="section__title">{finalCta.title}</h3>
					<p className="section__subtitle">{finalCta.subtitle}</p>

					<div className="hero__ctas">
						{finalCta.ctas.map(cta => renderButton(cta))}
					</div>
				</section>
			</main>
		</div>
	)
}

/** Small inline styles for the fake device in the hero */
const deviceWrapper: CSSProperties = {
	padding: '0.9rem',
	borderRadius: 24,
	background:
		'radial-gradient(circle at top, rgba(249,115,22,0.6) 0, #111111 40%, #020617 100%)',
	boxShadow: '0 28px 80px rgba(0,0,0,0.95)',
}

const deviceHeader: CSSProperties = {
	display: 'flex',
	gap: 6,
	marginBottom: 10,
}

const deviceDot: CSSProperties = {
	width: 8,
	height: 8,
	borderRadius: '999px',
	backgroundColor: 'rgba(15,23,42,0.8)',
}

const deviceBody: CSSProperties = {
	borderRadius: 18,
	padding: '0.9rem 0.95rem 1.1rem',
	backgroundColor: 'rgba(15,15,23,0.95)',
}

const deviceTitle: CSSProperties = {
	fontSize: '0.95rem',
	fontWeight: 600,
	marginBottom: 6,
}

const deviceText: CSSProperties = {
	fontSize: '0.86rem',
	lineHeight: 1.6,
	color: '#e5e5e5',
}
