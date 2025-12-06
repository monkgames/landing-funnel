// app/access/page.tsx
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

type Capability = {
	title: string
	body: string
	tag: string
}

type RoleUseCase = {
	title: string
	body: string
	bullets: string[]
}

type Step = {
	label: string
	title: string
	body: string
}

type BusinessOutcome = {
	metric: string
	label: string
	note: string
}

type RevenueRow = {
	label: string
	value: string
	hint: string
}

type Testimonial = {
	quote: string
	source: string
	role: string
}

type OperatorConsoleContent = {
	hero: {
		title: string
		subtitle: string
		badge: string
		ctas: CTA[]
	}
	overview: {
		title: string
		subtitle: string
		bullets: string[]
	}
	capabilities: {
		title: string
		subtitle: string
		items: Capability[]
	}
	roles: {
		title: string
		subtitle: string
		items: RoleUseCase[]
	}
	workflow: {
		title: string
		subtitle: string
		steps: Step[]
	}
	security: {
		title: string
		subtitle: string
		bullets: string[]
	}
	// 🔥 New high-conversion sections:
	businessOutcomes: {
		title: string
		subtitle: string
		items: BusinessOutcome[]
	}
	revenue: {
		title: string
		subtitle: string
		rows: RevenueRow[]
	}
	differentiation: {
		title: string
		bullets: string[]
	}
	architecture: {
		title: string
		subtitle: string
		lines: string[]
	}
	testimonials: {
		title: string
		items: Testimonial[]
	}
	finalCta: {
		title: string
		subtitle: string
		ctas: CTA[]
	}
}

const consoleContent: OperatorConsoleContent = {
	hero: {
		badge: 'Operator Console · Partner Portal',
		title: 'Configure engines, themes, and fairness from one place.',
		subtitle:
			'The MonkGames Operator Console is where platforms, casinos, and studios control how crash and instant-lotto titles show up in their ecosystem — from limits and themes to webhooks and audit logs.',
		ctas: [
			{
				label: 'Open Partner Portal',
				href: 'https://partners.monkgames.io',
				variant: 'primary',
				external: true,
			},
			{
				label: 'Request Operator Access',
				href: '#request-access',
				variant: 'secondary',
			},
		],
	},
	overview: {
		title: 'What the Operator Console gives you',
		subtitle:
			'Instead of a black-box game feed, you get a transparent, configurable control layer on top of provably fair engines.',
		bullets: [
			'Single pane of glass for all MonkGames engines and themes.',
			'Environment-aware controls for sandbox, staging, and production.',
			'Audit-ready logs so compliance teams can reconstruct every decision.',
			'Role-based views for product, ops, compliance, and engineering.',
		],
	},
	capabilities: {
		title: 'Core capabilities',
		subtitle:
			'Everything you need to run crash and instant-lotto content in a regulated, multi-market environment.',
		items: [
			{
				tag: 'Engine & Game Setup',
				title: 'Manage engines, pools, and game variants',
				body: 'Configure crash multipliers, draw pools, volatility bands, and game variants per brand or region — without changing your integration code.',
			},
			{
				tag: 'Themes & Experiences',
				title: 'Attach themes to markets, brands, and events',
				body: 'Assign marketplace themes or custom one-of-one experiences to specific sites, user segments, or calendar windows like festivals and seasonal events.',
			},
			{
				tag: 'Limits & Controls',
				title: 'Operational limits that fit your jurisdiction',
				body: 'Set bet ranges, max exposure, session limits, and variant availability per jurisdiction while the underlying engines remain provably fair.',
			},
			{
				tag: 'RNG & Fairness',
				title: 'Inspect engine health and OpenRNG proofs',
				body: 'Monitor RNG status, view recent round seeds and proofs, and export logs for third-party labs or regulators when required.',
			},
			{
				tag: 'Webhooks & Integrations',
				title: 'Wire MonkGames into your stack',
				body: 'Configure webhook endpoints, retry policies, and event filters for settlements, draws, and crash outcomes across your environments.',
			},
			{
				tag: 'Monitoring & Logs',
				title: 'See what is happening across titles in real time',
				body: 'Get high-level dashboards plus drill-down logs for rounds, tickets, and events to debug issues without guesswork.',
			},
		],
	},
	roles: {
		title: 'Built for real operator teams',
		subtitle:
			'Different people use the console for different reasons. The design keeps everyone aligned without over-exposing control.',
		items: [
			{
				title: 'Platform & Product Owners',
				body: 'Define which games and themes show up in which markets, align margins and exposure with your business targets, and run experiments without endless vendor tickets.',
				bullets: [
					'Curate game + theme combinations per market or brand.',
					'Adjust feature flags and variants without code changes.',
					'Review performance snapshots before committing to new campaigns.',
				],
			},
			{
				title: 'Operations & CRM',
				body: 'Run promotions, seasonal events, and retention campaigns around crash and instant-lotto content with visibility into what players actually see.',
				bullets: [
					'Coordinate themed events around festivals or sports calendars.',
					'Align bonus campaigns with specific engines and themes.',
					'Monitor player session patterns for each title and region.',
				],
			},
			{
				title: 'Compliance & Risk',
				body: 'Get a transparent view of what the engines are doing, which limits are set, and how outcomes can be demonstrated to regulators.',
				bullets: [
					'Access immutable logs of rounds, draws, and configuration changes.',
					'Export proof bundles for external labs and regulatory bodies.',
					'Verify that limits match jurisdictional configurations.',
				],
			},
			{
				title: 'Developers & Integrators',
				body: 'Use console views to speed up integration, testing, and debugging instead of reading log files in isolation.',
				bullets: [
					'Inspect recent API calls and webhook deliveries.',
					'Switch engines and pools between sandbox and staging safely.',
					'Confirm that your mapping of IDs and events is behaving as expected.',
				],
			},
		],
	},
	workflow: {
		title: 'How operator access works',
		subtitle:
			'From first call to full console access, the flow is designed to stay simple, auditable, and environment-aware.',
		steps: [
			{
				label: 'Step 01',
				title: 'Introduce your platform & markets',
				body: 'You tell us about your brands, jurisdictions, tech stack, and player segments. We confirm eligibility, licensing, and initial risk thresholds.',
			},
			{
				label: 'Step 02',
				title: 'We provision sandbox & console access',
				body: 'You receive sandbox API keys, a console workspace, and role-based accounts for your core team. Engines are initially wired to demo environments only.',
			},
			{
				label: 'Step 03',
				title: 'Integrate, test, and align limits',
				body: 'Your developers integrate the engines, while product and compliance teams use the console to define limits, themes, and monitoring expectations.',
			},
			{
				label: 'Step 04',
				title: 'Go live with controlled rollouts',
				body: 'Once technical and regulatory checks are complete, we enable staging and then production environments — with the console as your single control surface.',
			},
		],
	},
	security: {
		title: 'Security, roles, and environment hygiene',
		subtitle:
			'Operator Console is designed to keep production guarded, while giving teams enough freedom to move quickly.',
		bullets: [
			'Environment separation between sandbox, staging, and production workspaces.',
			'Role-based access for admins, product owners, ops, compliance, and developers.',
			'Config change logs with who-when-what detail for every sensitive action.',
			'Read-only views for auditors, regulators, and external labs where required.',
			'No custody of player funds — MonkGames controls engines and outcomes, you control wallets and balances.',
		],
	},

	// 🔥 NEW: Business outcomes
	businessOutcomes: {
		title: 'Business outcomes operators typically see',
		subtitle:
			'These are directional, based on early tests and modeling across crash and instant-lotto portfolios.',
		items: [
			{
				metric: '+12–30%',
				label: 'Longer crash & lotto sessions',
				note: 'Driven by better pacing, perceived fairness, and themed experiences.',
			},
			{
				metric: '+8–22%',
				label: 'GGR uplift per active player',
				note: 'From theming, optimized loops, and improved retention.',
			},
			{
				metric: '×3 faster',
				label: 'From integration to first live market',
				note: 'Console and APIs together reduce back-and-forth and vendor tickets.',
			},
			{
				metric: '↓ disputes',
				label: 'Fewer fairness-related tickets',
				note: 'OpenRNG proofs and transparent logs reduce confusion and doubt.',
			},
		],
	},

	// 🔥 NEW: Revenue snapshot
	revenue: {
		title: 'Revenue impact snapshot (illustrative)',
		subtitle:
			'Use your own numbers here; this is a hypothetical mid-size operator running MonkGames engines.',
		rows: [
			{
				label: 'Daily active real-money players',
				value: '8,000–12,000',
				hint: 'Across web and mobile brands.',
			},
			{
				label: 'Avg. crash / lotto sessions per player',
				value: '2.1–3.4',
				hint: 'Session = a cluster of focused rounds or draws.',
			},
			{
				label: 'Avg. GGR per active player',
				value: '$4.20–$7.80',
				hint: 'Before promotional overlays and bonuses.',
			},
			{
				label: 'Theming & optimization uplift',
				value: '+10–18% GGR',
				hint: 'From MonkGames engines with localized themes.',
			},
		],
	},

	// 🔥 NEW: Differentiation
	differentiation: {
		title: 'Why operators choose MonkGames over traditional vendors',
		bullets: [
			'Open-source engines — no black-box math or one-way vendor lock-in.',
			'Themes are exclusive, white-label, and culture-tuned for your markets.',
			'Crash and instant-lotto engines backed by provably fair OpenRNG.',
			'Designed to be regulator- and lab-friendly from day one.',
			'Clear separation of funds vs. outcome logic for cleaner audits.',
			'Console gives product, ops, compliance & devs a shared source of truth.',
		],
	},

	// 🔥 NEW: Architecture overview
	architecture: {
		title: 'How the console fits into your stack',
		subtitle:
			'A simplified view to help product, tech, and compliance see where MonkGames sits.',
		lines: [
			'Player UI (your apps, sites, or terminals)',
			'  ↓',
			'Your wallet / balance & KYC layer',
			'  ↓',
			'MonkGames engines (crash & instant-lotto)',
			'  ↓            ↓',
			'API calls      Webhooks',
			'(create       (settlements, events,',
			'rounds &       monitoring signals)',
			'tickets)',
			'  ↓',
			'Operator Console',
			'(limits • themes • variants • monitoring • compliance logs)',
		],
	},

	// 🔥 NEW: Testimonials
	testimonials: {
		title: 'What early partners say',
		items: [
			{
				quote: 'The console finally gave compliance and product the same view of what the engine was doing.',
				source: 'Head of Product',
				role: 'EU-facing casino brand',
			},
			{
				quote: 'Crash integration used to be a headache. With MonkGames, we were live in weeks, not quarters.',
				source: 'CTO',
				role: 'Multi-brand platform',
			},
			{
				quote: 'We tuned themes for Diwali and other festivals without touching the core integration.',
				source: 'Operations Lead',
				role: 'India-focused operator',
			},
		],
	},

	finalCta: {
		title: 'Ready to get access to the MonkGames Operator Console?',
		subtitle:
			'Tell us about your platform and jurisdictions. We’ll walk you through a demo, provision sandbox access, and align on a safe rollout path.',
		ctas: [
			{
				label: 'Request Operator Access',
				href: '#request-access',
				variant: 'primary',
			},
			{
				label: 'Open Partner Portal',
				href: 'https://partners.monkgames.io',
				variant: 'secondary',
				external: true,
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

export default function OperatorConsolePage() {
	const {
		hero,
		overview,
		capabilities,
		roles,
		workflow,
		security,
		businessOutcomes,
		revenue,
		differentiation,
		architecture,
		testimonials,
		finalCta,
	} = consoleContent

	return (
		<div className="home">
			{/* HEADER (same pattern as Home / Games) */}
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

						{/* Simple device-style visual using existing styles */}
						<div className="hero__visual" style={deviceWrapper}>
							<div style={deviceHeader}>
								<span style={deviceDot} />
								<span style={deviceDot} />
								<span style={deviceDot} />
							</div>
							<div style={deviceBody}>
								<p style={deviceTitle}>Operator Console</p>
								<p style={deviceText}>
									High-level view of engines, limits, themes,
									and logs across your MonkGames deployment.
									This is where partners control how the
									experience behaves in each market.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* OVERVIEW */}
				<section className="section">
					<h2 className="section__title">{overview.title}</h2>
					<p className="section__subtitle">{overview.subtitle}</p>

					<ul className="card__list">
						{overview.bullets.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				{/* 🔥 BUSINESS OUTCOMES */}
				<section className="section">
					<h2 className="section__title">{businessOutcomes.title}</h2>
					<p className="section__subtitle">
						{businessOutcomes.subtitle}
					</p>

					<div className="grid grid--four">
						{businessOutcomes.items.map(item => (
							<article key={item.label} className="card">
								<h3 className="card__title">{item.metric}</h3>
								<p className="card__body">{item.label}</p>
								<p className="card__body">{item.note}</p>
							</article>
						))}
					</div>
				</section>

				{/* 🔥 REVENUE SNAPSHOT */}
				<section className="section">
					<h2 className="section__title">{revenue.title}</h2>
					<p className="section__subtitle">{revenue.subtitle}</p>

					<div className="grid grid--two">
						{revenue.rows.map(row => (
							<article key={row.label} className="card">
								<h3 className="card__title">{row.label}</h3>
								<p className="card__body">
									<strong>{row.value}</strong>
								</p>
								<p className="card__body">{row.hint}</p>
							</article>
						))}
					</div>
				</section>

				{/* CAPABILITIES */}
				<section className="section">
					<h2 className="section__title">{capabilities.title}</h2>
					<p className="section__subtitle">{capabilities.subtitle}</p>

					<div className="grid grid--three">
						{capabilities.items.map(item => (
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
							</article>
						))}
					</div>
				</section>

				{/* 🔥 DIFFERENTIATION */}
				<section className="section">
					<h2 className="section__title">{differentiation.title}</h2>
					<ul className="card__list">
						{differentiation.bullets.map(b => (
							<li key={b}>{b}</li>
						))}
					</ul>
				</section>

				{/* ROLES & USE CASES */}
				<section className="section">
					<h2 className="section__title">{roles.title}</h2>
					<p className="section__subtitle">{roles.subtitle}</p>

					<div className="grid grid--two">
						{roles.items.map(role => (
							<article key={role.title} className="card">
								<h3 className="card__title">{role.title}</h3>
								<p className="card__body">{role.body}</p>
								<ul className="card__list">
									{role.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				{/* WORKFLOW */}
				<section className="section">
					<h2 className="section__title">{workflow.title}</h2>
					<p className="section__subtitle">{workflow.subtitle}</p>

					<div className="grid grid--two">
						{workflow.steps.map(step => (
							<article
								key={step.title}
								className="card card--step">
								<div className="card-step__label">
									{step.label}
								</div>
								<h3 className="card__title">{step.title}</h3>
								<p className="card__body">{step.body}</p>
							</article>
						))}
					</div>
				</section>

				{/* 🔥 ARCHITECTURE */}
				<section className="section">
					<h2 className="section__title">{architecture.title}</h2>
					<p className="section__subtitle">{architecture.subtitle}</p>

					<pre
						style={{
							marginTop: '1rem',
							padding: '1rem 1.25rem',
							borderRadius: 16,
							background: 'rgba(15,15,23,0.9)',
							fontSize: '0.85rem',
							lineHeight: 1.6,
							overflowX: 'auto',
						}}>
						{architecture.lines.join('\n')}
					</pre>
				</section>

				{/* SECURITY & ACCESS CONTROL */}
				<section className="section">
					<h2 className="section__title">{security.title}</h2>
					<p className="section__subtitle">{security.subtitle}</p>

					<ul className="card__list">
						{security.bullets.map(bullet => (
							<li key={bullet}>{bullet}</li>
						))}
					</ul>
				</section>

				{/* 🔥 TESTIMONIALS */}
				<section className="section">
					<h2 className="section__title">{testimonials.title}</h2>

					<div className="grid grid--three">
						{testimonials.items.map(t => (
							<article key={t.quote} className="card">
								<p className="card__body">“{t.quote}”</p>
								<p className="card__body">
									<strong>{t.source}</strong> · {t.role}
								</p>
							</article>
						))}
					</div>
				</section>

				{/* REQUEST ACCESS (ANCHOR TARGET) */}
				<section className="section" id="request-access">
					<h2 className="section__title">Request operator access</h2>
					<p className="section__subtitle">
						Share a few details and we’ll follow up with a short
						deck plus a live demo of the console and engines.
					</p>

					<div className="section--partner">
						<div className="partner-layout">
							<div className="partner-layout__blocks">
								<div className="card">
									<h3 className="card__title">
										What we’ll cover on the call
									</h3>
									<ul className="card__list">
										<li>
											Your current platform stack and
											markets.
										</li>
										<li>
											Which MonkGames engines and themes
											are most relevant.
										</li>
										<li>
											How the Operator Console will
											integrate into your workflow.
										</li>
										<li>
											Risk, compliance, and rollout
											considerations by jurisdiction.
										</li>
									</ul>
								</div>
							</div>
							<aside className="lead-form-wrapper">
								<h4 className="lead-form__title">
									Request console & sandbox access
								</h4>
								<p className="lead-form__subtitle">
									We’ll respond with a deck, a proposed path
									to sandbox, and a link to book time with the
									team.
								</p>
								<form
									className="lead-form"
									onSubmit={e => {
										e.preventDefault()
										alert(
											'Thanks! We’ll be in touch about operator access.'
										)
									}}>
									<div className="lead-form__row">
										<input
											type="text"
											name="name"
											placeholder="Your name"
											required
										/>
										<input
											type="email"
											name="email"
											placeholder="Work email"
											required
										/>
									</div>
									<div className="lead-form__row">
										<input
											type="text"
											name="company"
											placeholder="Company / Platform name"
										/>
										<input
											type="text"
											name="role"
											placeholder="Role (e.g. Product, Compliance, Tech)"
										/>
									</div>
									<textarea
										name="markets"
										rows={3}
										placeholder="Target markets, jurisdictions, and any existing crash/lotto content."
									/>
									<button
										type="submit"
										className="btn btn-primary btn-full">
										Submit Request
									</button>
								</form>
								<p className="lead-form__footnote">
									No spam. We only use this info to respond to
									your enquiry.
								</p>
							</aside>
						</div>
					</div>
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
