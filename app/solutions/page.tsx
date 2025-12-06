// app/solutions/page.tsx
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

type Pillar = {
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

type IntegrationModel = {
	title: string
	body: string
	bullets: string[]
}

type Playbook = {
	title: string
	body: string
}

type SolutionsContent = {
	hero: {
		badge: string
		title: string
		subtitle: string
		ctas: CTA[]
	}
	pillars: {
		title: string
		subtitle: string
		items: Pillar[]
	}
	audiences: {
		title: string
		subtitle: string
		items: Audience[]
	}
	integrationModels: {
		title: string
		subtitle: string
		items: IntegrationModel[]
	}
	playbooks: {
		title: string
		subtitle: string
		items: Playbook[]
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

const solutionsContent: SolutionsContent = {
	hero: {
		badge: 'Solutions for Operators, Platforms & Studios',
		title: 'Crash & Instant-Lotto solutions built for real-money ecosystems.',
		subtitle:
			'MonkGames gives you provably fair engines, culture-tuned themes, and an operator console that fits into regulated iGaming stacks — without turning your team into a games studio.',
		ctas: [
			{
				label: 'Explore Games',
				href: '/games',
				variant: 'primary',
			},
			{
				label: 'Talk to the Team',
				href: '/#partner',
				variant: 'secondary',
			},
		],
	},
	pillars: {
		title: 'Three layers, one MonkGames platform',
		subtitle:
			'Pick only what you need today — engines, themes, or console — and add more as your roadmap evolves.',
		items: [
			{
				tag: 'Engines',
				title: 'Provably fair crash & instant-lotto engines',
				body: 'Battle-tested game engines with OpenRNG at the core, wired for high-energy play and clean integrations.',
				bullets: [
					'Crash engine: Crossroad Escapables.',
					'Instant-lotto engine: Drawballz | Rushmore Classics.',
					'Round, draw, and ticket lifecycles exposed via API & webhooks.',
					'RNG proofs and logs ready for labs and regulators.',
				],
			},
			{
				tag: 'Themes',
				title: 'Culture-tuned themes & one-of-one experiences',
				body: 'A library of marketplace themes plus custom, exclusive experiences designed around real festivals, rituals, and aesthetics.',
				bullets: [
					'Pre-built themes for MENA, India, EU, LATAM and more.',
					'One-of-one custom themes you fully own as white-label.',
					'Visuals, pacing, sound, and rituals tuned for each region.',
					'A/B test themes per brand or segment without new code.',
				],
			},
			{
				tag: 'Console',
				title: 'Operator Console & observability',
				body: 'A unified console where product, ops, tech, and compliance see the same reality — and control it safely.',
				bullets: [
					'Per-market limits, exposure controls, and variants.',
					'Environment separation: sandbox, staging, production.',
					'Real-time logs and dashboards for events and outcomes.',
					'Config change history for full auditability.',
				],
			},
		],
	},
	audiences: {
		title: 'Solutions tuned to how you operate',
		subtitle:
			'MonkGames is built for different types of partners inside the iGaming ecosystem — not just a single operator archetype.',
		items: [
			{
				title: 'Casino & sportsbook operators',
				body: 'Drop-in content that feels native to your brand, with economics and controls that match your jurisdictional reality.',
				bullets: [
					'Launch crash & instant-lotto without building a studio in-house.',
					'Map engines to existing wallet, KYC, and RG systems.',
					'Use themes to differentiate brands that share the same platform.',
				],
			},
			{
				title: 'Aggregator & platform providers',
				body: 'Offer MonkGames content as part of your catalogue, while keeping your platform’s API model and settlement flows intact.',
				bullets: [
					'Single integration powering multiple downstream brands.',
					'Flexible theming for each brand and region you serve.',
					'Console and logs that make your own support team faster.',
				],
			},
			{
				title: 'Studios & creators',
				body: 'Bring your own art direction and creative worlds, while MonkGames handles the engine, fairness, and ops.',
				bullets: [
					'Use crash & lotto engines as a base layer for your IP.',
					'Own your theme variants as white-label experiences.',
					'Partner with operators and platforms through MonkGames.',
				],
			},
		],
	},
	integrationModels: {
		title: 'Integration models that match your stack',
		subtitle:
			'Whether you are Web2-only, exploring Web3 rails, or running kiosks and terminals, the integration patterns stay predictable.',
		items: [
			{
				title: 'Web2-first operators',
				body: 'The simplest route: REST APIs and webhooks that speak the same language as your existing wallet, session, and bonus systems.',
				bullets: [
					'Server-side round & ticket creation from your backend.',
					'Webhooks for settlements, results, and event streams.',
					'No changes required to your cashier or KYC flows.',
				],
			},
			{
				title: 'Web3-enabled & hybrid stacks',
				body: 'Keep settlement and custody on your side, while using OpenRNG and optional on-chain proofs to serve the next wave of players.',
				bullets: [
					'Optional on-chain anchoring of results and proofs.',
					'Wallet and identity remain under your control.',
					'Same console, different rails and compliance posture.',
				],
			},
			{
				title: 'Kiosk, retail & terminals',
				body: 'Use the same engines to power physical or semi-physical experiences in venues, shops, or retail networks.',
				bullets: [
					'Simple APIs suitable for low-bandwidth environments.',
					'Themes designed for large displays and shared spaces.',
					'Console controls that still apply per location or network.',
				],
			},
		],
	},
	playbooks: {
		title: 'Common MonkGames solution playbooks',
		subtitle:
			'Some of the most frequent patterns we see when operators and platforms go live with crash and instant-lotto content.',
		items: [
			{
				title: '“Crash as a flagship engagement loop”',
				body: 'Use Crossroad Escapables as the heartbeat of your lobby, with tailored themes per region and strict limits per jurisdiction.',
			},
			{
				title: '“Festival-first lotto calendar”',
				body: 'Run Drawballz with festival, sports, or cultural overlays mapped to your annual calendar, mixing instant and scheduled draws.',
			},
			{
				title: '“Multi-brand, shared engines”',
				body: 'One set of engines powering multiple brands, each with its own theme stack, limits, and positioning controlled via console.',
			},
			{
				title: '“Studio-led experiences on proven rails”',
				body: 'Creative studios focus on world-building and assets, while MonkGames provides crash & lotto rails, fairness, and operations.',
			},
		],
	},
	trust: {
		title: 'Fairness, compliance & long-term alignment',
		subtitle:
			'We design solutions so that compliance teams, regulators, and labs can understand exactly how outcomes are generated and controlled.',
		bullets: [
			'OpenRNG-backed engines where every outcome is mathematically verifiable.',
			'Immutable configuration logs and environment separation by default.',
			'Export-ready proofs for labs and regulatory review.',
			'Clear separation of funds, wallets, and outcome generation.',
			'Roadmaps aligned with long-term partners, not short-term reskins.',
		],
	},
	finalCta: {
		title: 'Which MonkGames solution fits your roadmap?',
		subtitle:
			'Tell us about your platforms, markets, and timelines. We’ll map a solution — engines, themes, and console — that fits where you are now and where you want to go.',
		ctas: [
			{
				label: 'Talk to the Team',
				href: '/#partner',
				variant: 'primary',
			},
			{
				label: 'Explore Games',
				href: '/games',
				variant: 'secondary',
			},
		],
	},
}

function renderButton(cta: CTA, extraClass = '') {
	const variant: Variant = cta.variant ?? 'primary'
	const className = `btn btn-${variant} ${extraClass}`.trim()
	const href = cta.href ?? '#'
	const isExternal = cta.external && href.startsWith('http')

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

export default function SolutionsPage() {
	const {
		hero,
		pillars,
		audiences,
		integrationModels,
		playbooks,
		trust,
		finalCta,
	} = solutionsContent

	return (
		<div className="home">
			{/* HEADER (same pattern as /access) */}
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
								<a href="/docs">Resources</a>
							</li>
						</ul>
					</nav>

					<div className="home-header__actions">
						{renderButton(
							{
								label: 'Partner With Us',
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

						{/* Simple visual device to mirror other pages */}
						<div className="hero__visual" style={deviceWrapper}>
							<div style={deviceHeader}>
								<span style={deviceDot} />
								<span style={deviceDot} />
								<span style={deviceDot} />
							</div>
							<div style={deviceBody}>
								<p style={deviceTitle}>Solution Overview</p>
								<p style={deviceText}>
									Engines, themes, and console stitched
									together so your team can launch high-energy
									content in regulated environments without
									guesswork.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* PILLARS */}
				<section className="section">
					<h2 className="section__title">{pillars.title}</h2>
					<p className="section__subtitle">{pillars.subtitle}</p>

					<div className="grid grid--three">
						{pillars.items.map(item => (
							<article key={item.title} className="card">
								<div className="card__title">
									<span
										style={{
											display: 'inline-flex',
											padding: '0.18rem 0.55rem',
											borderRadius: 999,
											fontSize: '0.78rem',
											border: '1px solid var(--border-subtle)',
											marginBottom: '0.35rem',
										}}>
										{item.tag}
									</span>
								</div>
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

				{/* INTEGRATION MODELS */}
				<section className="section">
					<h2 className="section__title">
						{integrationModels.title}
					</h2>
					<p className="section__subtitle">
						{integrationModels.subtitle}
					</p>

					<div className="grid grid--three">
						{integrationModels.items.map(item => (
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

				{/* PLAYBOOKS */}
				<section className="section">
					<h2 className="section__title">{playbooks.title}</h2>
					<p className="section__subtitle">{playbooks.subtitle}</p>

					<div className="grid grid--two">
						{playbooks.items.map(item => (
							<article key={item.title} className="card">
								<h3 className="card__title">{item.title}</h3>
								<p className="card__body">{item.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* TRUST / COMPLIANCE */}
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
