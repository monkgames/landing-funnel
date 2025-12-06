// app/platform/page.tsx
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

type Step = {
	label: string
	title: string
	body: string
}

type Tier = {
	name: string
	tag: string
	body: string
	bullets: string[]
	note?: string
}

type FAQItem = {
	question: string
	answer: string
}

type PlatformContent = {
	hero: {
		badge: string
		title: string
		subtitle: string
		ctas: CTA[]
	}
	problem: {
		title: string
		subtitle: string
		bullets: string[]
	}
	pillars: {
		title: string
		subtitle: string
		items: Pillar[]
	}
	architecture: {
		title: string
		subtitle: string
		lines: string[]
	}
	audiences: {
		title: string
		subtitle: string
		items: Audience[]
	}
	howItWorks: {
		title: string
		subtitle: string
		steps: Step[]
	}
	pricing: {
		title: string
		subtitle: string
		tiers: Tier[]
	}
	roadmap: {
		title: string
		subtitle: string
		bullets: string[]
	}
	faq: {
		title: string
		items: FAQItem[]
	}
	finalCta: {
		title: string
		subtitle: string
		ctas: CTA[]
	}
}

const content: PlatformContent = {
	hero: {
		badge: 'Gamdock · MonkGames Platform Layer',
		title: 'Gamdock is the WordPress of iGaming.',
		subtitle:
			'One integrated platform where operators plug in once, creators ship games and themes with GamCore SDK, and everyone escapes legacy monopolies.',
		ctas: [
			{
				label: 'Request Platform Demo',
				href: '/#partner',
				variant: 'primary',
			},
			{
				label: 'View Games',
				href: '/games',
				variant: 'secondary',
			},
		],
	},
	problem: {
		title: 'What Gamdock is fixing in iGaming',
		subtitle:
			'Today’s ecosystem is controlled by a small set of closed vendors. Gamdock opens that up.',
		bullets: [
			'Multiple, brittle integrations for every game provider.',
			'Black-box engines with limited fairness visibility.',
			'No real creator economy — studios build for vendors, not for themselves.',
			'Localization reduced to language files, not true cultural experiences.',
			'Monopolies dictating pace of innovation, pricing, and access.',
		],
	},
	pillars: {
		title: 'The Gamdock platform in five layers',
		subtitle:
			'Think of it as a modern CMS + engine stack for iGaming, powered by open standards and creator-friendly rails.',
		items: [
			{
				tag: 'Core Platform',
				title: 'Gamdock Core — one integration, many surfaces',
				body: 'The foundation: a single API and configuration layer that connects your wallet, accounts, and brands to the entire MonkGames universe.',
				bullets: [
					'Single integration powering crash, instant-lotto and future engines.',
					'Brand, market, and environment-aware configuration.',
					'Backwards-compatible as new content types are added.',
				],
			},
			{
				tag: 'Engines',
				title: 'Engine Layer — crash & instant-lotto',
				body: 'Provably fair engines like Crossroad Escapables and Drawballz | Rushmore Classics, managed centrally through Gamdock.',
				bullets: [
					'Crash, instant-lotto, and future ritual games.',
					'OpenRNG-backed outcomes and verifiable logs.',
					'Easy mapping to your wallets and settlement flows.',
				],
			},
			{
				tag: 'Themes',
				title: 'Theme Layer — culture-tuned experiences',
				body: 'Swap visuals, sound, pacing, and rituals without changing integrations. Themes wrap engines in locally relevant experiences.',
				bullets: [
					'Festival and region-specific theme packs.',
					'Exclusive, one-of-one white-label themes.',
					'Runnable A/B tests per segment, brand, or market.',
				],
			},
			{
				tag: 'Console',
				title: 'Operator Console — control, limits, visibility',
				body: 'A control surface where product, ops, compliance, and tech teams share the same view and configure Gamdock safely.',
				bullets: [
					'Limits, risk, exposures, sessions, and variants per jurisdiction.',
					'Environment separation for sandbox, staging, production.',
					'Monitoring, logs, and config history for audits and debugging.',
				],
			},
			{
				tag: 'GamCore SDK',
				title: 'GamCore SDK — the builder layer',
				body: 'The SDK that lets studios and independent creators build worlds, themes, and even new game expressions on top of Gamdock.',
				bullets: [
					'APIs and tooling to build themes and frontends.',
					'Creator-first packaging, publishing, and versioning.',
					'Revenue share, licensing, and exclusive deals via Gamdock.',
				],
			},
		],
	},
	architecture: {
		title: 'How Gamdock fits into your stack',
		subtitle:
			'High-level view for product, tech, and compliance teams to see where responsibilities sit.',
		lines: [
			'          [ Players / Frontends / Channels ]',
			'                 (your apps & sites)',
			'                          │',
			'                          ▼',
			'             [ Wallet, KYC, Accounts ]',
			'                          │',
			'                          ▼',
			'                  [ Gamdock Core ]',
			'          (single integration, config, routing)',
			'          ┌──────────────┼──────────────┐',
			'          ▼              ▼              ▼',
			'   [ Engines ]     [ Theme Layer ]   [ Console ]',
			' Crash / Lotto     Visuals, audio    Limits, logs,',
			' OpenRNG           pacing, rituals   monitoring',
			'          └──────────────┼──────────────┘',
			'                          ▼',
			'                     [ GamCore SDK ]',
			'                (creators & studios build)',
			'                          ▼',
			'               [ Marketplace & Deploys ]',
		],
	},
	audiences: {
		title: 'Who Gamdock is built for',
		subtitle:
			'A single platform, but very different value depending on where you stand in the ecosystem.',
		items: [
			{
				title: 'Operators & casinos',
				body: 'You want differentiated content, fair math, and a clear path to launch — without building a game studio.',
				bullets: [
					'Integrate Gamdock once, access engines and themes as they ship.',
					'Apply region-specific experiences for each brand.',
					'Use the console to keep risk, limits, and compliance in check.',
				],
			},
			{
				title: 'Platforms & aggregators',
				body: 'You need content that makes your offering compelling to downstream brands, without fragmenting your own tech stack.',
				bullets: [
					'Offer crash and instant-lotto as a first-class vertical.',
					'Expose Gamdock content through your own APIs.',
					'Give your operators a path to themes and creators.',
				],
			},
			{
				title: 'Studios & independent builders',
				body: 'You care about art, ritual, sound, motion, and emotion — not standing up RNG clusters and compliance infrastructure.',
				bullets: [
					'Use GamCore SDK to build worlds on stable rails.',
					'Publish themes and experiences into Gamdock.',
					'Earn from every activation across operators and markets.',
				],
			},
		],
	},
	howItWorks: {
		title: 'How Gamdock works in practice',
		subtitle:
			'From the first technical conversation to creators monetizing their work.',
		steps: [
			{
				label: 'Step 01',
				title: 'Integrate Gamdock Core',
				body: 'Connect your wallet, accounts, and brands to Gamdock APIs. We typically start with crash or lotto engines as a first vertical.',
			},
			{
				label: 'Step 02',
				title: 'Map brands, markets & limits',
				body: 'Use the console to map which content runs where, set jurisdiction-specific limits, and define exposure rules.',
			},
			{
				label: 'Step 03',
				title: 'Activate themes & experiences',
				body: 'Apply off-the-shelf theme packs or exclusive experiences to your brands, campaigns, seasons, and events.',
			},
			{
				label: 'Step 04',
				title: 'Invite builders & studios',
				body: 'Bring your own creative partners or work with the Gamdock ecosystem. Builders ship new worlds, you switch them on.',
			},
		],
	},
	pricing: {
		title: 'Platform building blocks & commercial model',
		subtitle:
			'Tiers are indicative and designed to be combined. Final commercials depend on markets, volumes, and roadmap.',
		tiers: [
			{
				name: 'Gamdock Core Platform',
				tag: 'Foundation',
				body: 'Single integration, configuration layer, routing, and brand/market management.',
				bullets: [
					'Per-operator or per-platform license.',
					'Includes environment separation (sandbox/staging/prod).',
					'Best for operators or platforms standardizing on Gamdock.',
				],
				note: 'Typical model: monthly/annual + light volume component.',
			},
			{
				name: 'Engines Pack',
				tag: 'Crash & Lotto',
				body: 'Access to Crossroad Escapables (crash) and Drawballz | Rushmore Classics (instant-lotto), with room for future engines.',
				bullets: [
					'Crash, instant-lotto, and future ritual experiences.',
					'OpenRNG-backed outcomes and exportable proof logs.',
					'Optional lab and regulator support add-ons.',
				],
				note: 'Typical model: rev-share or hybrid per engine & market.',
			},
			{
				name: 'Theme Marketplace Access',
				tag: 'Experiences',
				body: 'Enable your brands to use marketplace themes, seasonal packs, and regional experiences on top of the engines.',
				bullets: [
					'Pay-per-theme, bundles, or subscription access.',
					'Exclusive white-label options for key brands.',
					'Festival, event, and sports-calendar ready.',
				],
				note: 'Typical model: per-activation / per-brand pricing.',
			},
			{
				name: 'GamCore SDK',
				tag: 'Builders',
				body: 'Licensing for studios and creators to build themes, frontends, and new expressions across engines.',
				bullets: [
					'Creator or studio-level licensing.',
					'Tooling, docs, and review processes.',
					'Revenue share on marketplace activations.',
				],
				note: 'Typical model: small base + generous rev-share.',
			},
			{
				name: 'Analytics & Console Suite',
				tag: 'Control',
				body: 'Enhanced visibility, dashboards, logs, and alerts for larger platforms and multi-market operators.',
				bullets: [
					'Advanced reporting and data export.',
					'Alerting hooks for events and anomalies.',
					'Read-only access for compliance and auditors.',
				],
				note: 'Typical model: add-on to core, per-operator.',
			},
			{
				name: 'Enterprise & Co-Creation',
				tag: 'Custom',
				body: 'For groups that want to shape parts of the roadmap, co-own experiences, or run large-scale deployments.',
				bullets: [
					'Joint IP creation and long-term theme portfolios.',
					'Custom deployment models (region, infra, compliance).',
					'Priority support and roadmap influence.',
				],
				note: 'Typical model: custom scope, custom pricing.',
			},
		],
	},
	roadmap: {
		title: 'Where Gamdock is headed next',
		subtitle:
			'You are not buying a static platform; you are joining a moving ecosystem.',
		bullets: [
			'More ritual game types built on the same Gamdock and GamCore rails.',
			'Deeper creator tools for analytics, playtesting, and live ops.',
			'Expanded marketplace for verticalized verticals (sports, festivals, pop-culture).',
			'Optional Web3 anchoring and cross-rail settlement models, for markets where it makes sense.',
			'Closer collaboration with regulators and labs to formalize open fairness standards.',
		],
	},
	faq: {
		title: 'Questions we usually get about Gamdock',
		items: [
			{
				question:
					'Is Gamdock a games provider, a platform, or a marketplace?',
				answer: 'All three in layers. At the core, Gamdock is a platform and API layer. On top of that, engines provide provably fair crash and lotto content. On top of that, themes and creators form a marketplace. You can consume only the parts you need.',
			},
			{
				question:
					'Do we have to change our existing wallet or KYC systems?',
				answer: 'No. Gamdock expects you to remain in control of wallets, identity, and responsible gaming. You connect Gamdock to your existing account and wallet systems via APIs.',
			},
			{
				question:
					'Can we start only with engines first and add themes later?',
				answer: 'Yes. Many partners start with the engine layer, validate performance and fairness, then progressively unlock themes and creators once the economics are proven.',
			},
			{
				question: 'Who owns the IP of themes built with GamCore SDK?',
				answer: 'Creators and studios own their creative IP. Operators license it under clear commercial terms. Exclusive white-label deals are possible when negotiated.',
			},
			{
				question: 'Is Gamdock suitable for heavily regulated markets?',
				answer: 'Yes. The platform is designed to be regulator and lab friendly, with OpenRNG, exportable logs, environment separation, and clear separation of funds from outcome generation.',
			},
		],
	},
	finalCta: {
		title: 'Bring your brand, platform, or studio into the Gamdock ecosystem.',
		subtitle:
			'Tell us who you are in the iGaming world — operator, platform, studio, or creator — and we’ll map out how Gamdock fits your next 12–24 months.',
		ctas: [
			{
				label: 'Request Platform Demo',
				href: '/#partner',
				variant: 'primary',
			},
			{
				label: 'Talk About GamCore SDK',
				href: '/docs',
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

export default function PlatformPage() {
	const {
		hero,
		problem,
		pillars,
		architecture,
		audiences,
		howItWorks,
		pricing,
		roadmap,
		faq,
		finalCta,
	} = content

	return (
		<div className="home">
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

						{/* Enhanced hero visual */}
						<div className="hero__visual" style={deviceWrapper}>
							<div style={deviceHeader}>
								<span style={deviceDot} />
								<span style={deviceDot} />
								<span style={deviceDot} />
							</div>
							<div style={deviceBody}>
								<p style={deviceTitle}>Gamdock Overview</p>
								<p style={deviceText}>
									Operators integrate once. Gamdock routes
									traffic to engines, applies themes, and
									gives creators a place to publish.
								</p>
								<hr
									style={{
										border: 'none',
										height: 1,
										margin: '0.6rem 0',
										background:
											'linear-gradient(to right, rgba(248,153,72,0.9), transparent)',
									}}
								/>
								<p
									style={{
										fontSize: '0.8rem',
										opacity: 0.85,
									}}>
									Slots today: crash & instant-lotto. Slots
									tomorrow: whatever builders imagine on
									GamCore.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* PROBLEM / WHY NOW */}
				<section className="section">
					<h2 className="section__title">{problem.title}</h2>
					<p className="section__subtitle">{problem.subtitle}</p>
					<ul className="card__list">
						{problem.bullets.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>

				{/* PILLARS */}
				<section className="section">
					<h2 className="section__title">{pillars.title}</h2>
					<p className="section__subtitle">{pillars.subtitle}</p>

					<div className="grid grid--three">
						{pillars.items.map(item => (
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

				{/* ARCHITECTURE */}
				<section className="section">
					<h2 className="section__title">{architecture.title}</h2>
					<p className="section__subtitle">{architecture.subtitle}</p>

					<pre
						style={{
							marginTop: '1.1rem',
							padding: '1rem 1.25rem',
							borderRadius: 16,
							background: 'rgba(15,15,23,0.96)',
							fontSize: '0.85rem',
							lineHeight: 1.6,
							overflowX: 'auto',
							whiteSpace: 'pre',
						}}>
						{architecture.lines.join('\n')}
					</pre>
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
						{howItWorks.steps.map(step => (
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

				{/* PRICING / TIERS */}
				<section className="section">
					<h2 className="section__title">{pricing.title}</h2>
					<p className="section__subtitle">{pricing.subtitle}</p>

					<div className="grid grid--three">
						{pricing.tiers.map(tier => (
							<article key={tier.name} className="card">
								<span
									style={{
										display: 'inline-flex',
										padding: '0.16rem 0.5rem',
										borderRadius: 999,
										border: '1px solid var(--border-subtle)',
										fontSize: '0.76rem',
										marginBottom: '0.35rem',
										textTransform: 'uppercase',
										letterSpacing: '0.07em',
									}}>
									{tier.tag}
								</span>
								<h3 className="card__title">{tier.name}</h3>
								<p className="card__body">{tier.body}</p>
								<ul className="card__list">
									{tier.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
								{tier.note && (
									<p className="card__body">
										<em>{tier.note}</em>
									</p>
								)}
							</article>
						))}
					</div>
				</section>

				{/* ROADMAP */}
				<section className="section">
					<h2 className="section__title">{roadmap.title}</h2>
					<p className="section__subtitle">{roadmap.subtitle}</p>
					<ul className="card__list">
						{roadmap.bullets.map(b => (
							<li key={b}>{b}</li>
						))}
					</ul>
				</section>

				{/* FAQ */}
				<section className="section">
					<h2 className="section__title">{faq.title}</h2>

					<div className="grid grid--two">
						{faq.items.map(item => (
							<article key={item.question} className="card">
								<h3 className="card__title">{item.question}</h3>
								<p className="card__body">{item.answer}</p>
							</article>
						))}
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

/** Hero visual styles */
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
