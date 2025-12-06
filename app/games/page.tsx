// app/games/page.tsx
'use client'

import { useState } from 'react'
import gamesContent from '../../API/gamesContent.json'

// reuse header + global styles from home
import '../styles/Home.css'
import '../styles/Games.css'

type Variant = 'primary' | 'secondary' | 'ghost'

type CTA = {
	label: string
	href: string
	variant?: Variant
}

type GameMetric = {
	label: string
	value: string
}

type Game = {
	id: string
	name: string
	format: string
	label: string
	tagline: string
	description: string
	image: string
	tags: string[]
	metrics: GameMetric[]
	features: string[]
	ctas: CTA[]
}

type FormatBlock = {
	id: string
	title: string
	badge: string
	description: string
	bullets: string[]
}

type GlobalFeature = {
	title: string
	description: string
}

type FAQItem = {
	question: string
	answer: string
}

type OperatorBenefit = {
	title: string
	description: string
	icon?: string
}

type PreviewItem = {
	label: string
	description: string
	image: string
}

type IntegrationStep = {
	step: string
	title: string
	description: string
}

type MetricItem = {
	label: string
	value: string
	description: string
}

type Testimonial = {
	quote: string
	author: string
	role: string
}

type ComparisonRow = {
	feature: string
	monkgames: string
	traditional: string
}

type GamesContent = {
	hero: {
		title: string
		subtitle: string
		badge: string
	}
	operatorBenefits: {
		title: string
		subtitle: string
		items: OperatorBenefit[]
	}
	samplePreviews: {
		title: string
		subtitle: string
		items: PreviewItem[]
	}
	formats: {
		title: string
		blocks: FormatBlock[]
	}
	games: Game[]
	integration: {
		title: string
		steps: IntegrationStep[]
	}
	metricsRow: {
		title: string
		items: MetricItem[]
	}
	useCases: {
		title: string
		items: string[]
	}
	globalFeatures: {
		title: string
		items: GlobalFeature[]
	}
	testimonials: {
		title: string
		items: Testimonial[]
	}
	comparison: {
		title: string
		subtitle: string
		rows: ComparisonRow[]
	}
	finalCta: {
		title: string
		subtitle: string
		primaryCta: CTA
		secondaryCta: CTA
	}
	faq: {
		title: string
		items: FAQItem[]
	}
}

const content = gamesContent as GamesContent

type SmartImageProps = {
	src?: string
	alt: string
	className?: string
}

function SmartImage({ src, alt, className }: SmartImageProps) {
	const [failed, setFailed] = useState(false)

	const finalSrc =
		!src || failed
			? 'https://placehold.co/640x360/050506/ffffff?text=MonkGames'
			: src

	return (
		<img
			src={finalSrc}
			alt={alt}
			className={className}
			loading="lazy"
			onError={() => setFailed(true)}
		/>
	)
}

function renderButton(cta: CTA, extraClass = '') {
	const variant: Variant = cta.variant ?? 'primary'
	const className = `mg-btn mg-btn-${variant} ${extraClass}`.trim()
	return (
		<a key={cta.label} href={cta.href} className={className}>
			{cta.label}
		</a>
	)
}

export default function GamesPage() {
	const {
		hero,
		operatorBenefits,
		samplePreviews,
		formats,
		games,
		integration,
		metricsRow,
		useCases,
		globalFeatures,
		testimonials,
		comparison,
		finalCta,
		faq,
	} = content

	return (
		<div className="games-page">
			{/* SHARED HEADER (same structure as Home) */}
			<header className="home-header">
				<div className="home-header__inner">
					<div className="home-header__brand">
						<a href="/">MonkGames</a>
					</div>

					<nav className="home-header__nav">
						<ul>
							<li>
								<a href="/games">Games</a>
							</li>
							<li>
								<a href="/solutions">Solutions</a>
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
							Partner With Us
						</a>
						<a href="/access" className="btn btn-secondary">
							Operator Console
						</a>
					</div>
				</div>
			</header>

			<main className="games">
				{/* PAGE HERO */}
				<section className="games-hero">
					<div className="games-hero__inner">
						<div className="games-hero__content">
							<p className="games-hero__badge">{hero.badge}</p>
							<h1 className="games-hero__title">{hero.title}</h1>
							<p className="games-hero__subtitle">
								{hero.subtitle}
							</p>
							<div className="games-hero__cta-row">
								<a
									href="#games-list"
									className="mg-btn mg-btn-primary">
									Explore Titles
								</a>
								<a
									href="#formats"
									className="mg-btn mg-btn-secondary">
									Learn About Formats
								</a>
							</div>
						</div>

						<div className="games-hero__visual">
							<SmartImage
								src="https://source.unsplash.com/featured/880x540/?gaming,neon,arcade"
								alt="MonkGames flagship experiences"
							/>
						</div>
					</div>
				</section>

				{/* OPERATOR BENEFITS */}
				<section
					className="games-section games-section--band"
					id="benefits">
					<div className="games-section__header">
						<h2 className="games-section__title">
							{operatorBenefits.title}
						</h2>
						<p className="games-section__subtitle">
							{operatorBenefits.subtitle}
						</p>
					</div>

					<div className="mg-grid mg-grid-three mg-benefits-grid">
						{operatorBenefits.items.map(item => (
							<article
								key={item.title}
								className="mg-card mg-card-benefit">
								{item.icon && (
									<div className="mg-card-benefit__icon">
										{item.icon}
									</div>
								)}
								<h3 className="mg-card__title">{item.title}</h3>
								<p className="mg-card__body">
									{item.description}
								</p>
							</article>
						))}
					</div>
				</section>

				{/* SAMPLE PREVIEWS */}
				<section className="games-section" id="previews">
					<div className="games-section__header">
						<h2 className="games-section__title">
							{samplePreviews.title}
						</h2>
						<p className="games-section__subtitle">
							{samplePreviews.subtitle}
						</p>
					</div>

					<div className="mg-previews">
						{samplePreviews.items.map(item => (
							<article
								key={item.label}
								className="mg-preview-card">
								<div className="mg-preview-card__media">
									<SmartImage
										src={item.image}
										alt={item.label}
									/>
								</div>
								<div className="mg-preview-card__body">
									<h3>{item.label}</h3>
									<p>{item.description}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* FORMATS / GAME TYPES */}
				<section className="games-section" id="formats">
					<div className="games-section__header">
						<h2 className="games-section__title">
							{formats.title}
						</h2>
						<p className="games-section__subtitle">
							Two high-energy formats power the MonkGames
							universe, both backed by the same provably fair,
							open-engine foundation.
						</p>
					</div>

					<div className="mg-grid mg-grid-two">
						{formats.blocks.map(block => (
							<article
								key={block.id}
								className="mg-card mg-card-format">
								<div className="mg-card-format__header">
									<span className="mg-card-format__badge">
										{block.badge}
									</span>
									<h3 className="mg-card__title">
										{block.title}
									</h3>
								</div>
								<p className="mg-card__body">
									{block.description}
								</p>
								<ul className="mg-card__list">
									{block.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</article>
						))}
					</div>
				</section>

				{/* GAMES LIST */}
				<section className="games-section" id="games-list">
					<div className="games-section__header">
						<h2 className="games-section__title">
							Flagship Titles
						</h2>
						<p className="games-section__subtitle">
							Start with our core engines, then layer in
							marketplace themes or commission one-of-one
							experiences tuned to your audience.
						</p>
					</div>

					<div className="mg-stack">
						{games.map(game => (
							<article key={game.id} className="mg-game">
								<div className="mg-game__visual">
									<SmartImage
										src={game.image}
										alt={game.name}
									/>
									<span className="mg-game__format">
										{game.format}
									</span>
								</div>

								<div className="mg-game__content">
									<h3 className="mg-game__title">
										{game.name}
									</h3>
									<p className="mg-game__label">
										{game.label}
									</p>
									<p className="mg-game__tagline">
										{game.tagline}
									</p>
									<p className="mg-game__description">
										{game.description}
									</p>

									<div className="mg-game__tags">
										{game.tags.map(tag => (
											<span key={tag} className="mg-tag">
												{tag}
											</span>
										))}
									</div>

									<div className="mg-game__metrics">
										{game.metrics.map(metric => (
											<div
												key={metric.label}
												className="mg-metric">
												<span className="mg-metric__value">
													{metric.value}
												</span>
												<span className="mg-metric__label">
													{metric.label}
												</span>
											</div>
										))}
									</div>

									<div className="mg-game__features">
										<h4>Engine Highlights</h4>
										<ul>
											{game.features.map(f => (
												<li key={f}>{f}</li>
											))}
										</ul>
									</div>

									<div className="mg-game__actions">
										{game.ctas.map(cta =>
											renderButton(cta)
										)}
									</div>
								</div>
							</article>
						))}
					</div>
				</section>

				{/* INTEGRATION STEPS */}
				<section className="games-section" id="integration">
					<div className="games-section__header">
						<h2 className="games-section__title">
							{integration.title}
						</h2>
						<p className="games-section__subtitle">
							From first conversation to production launch, we
							keep the process simple and transparent.
						</p>
					</div>

					<div className="mg-steps">
						{integration.steps.map(step => (
							<article key={step.step} className="mg-step">
								<div className="mg-step__number">
									{step.step}
								</div>
								<h3 className="mg-step__title">{step.title}</h3>
								<p className="mg-step__body">
									{step.description}
								</p>
							</article>
						))}
					</div>
				</section>

				{/* METRICS + USE CASES */}
				<section
					className="games-section games-section--band"
					id="metrics">
					<div className="games-section__header">
						<h2 className="games-section__title">
							{metricsRow.title}
						</h2>
					</div>

					<div className="mg-metrics-row">
						{metricsRow.items.map(item => (
							<div
								key={item.label}
								className="mg-metric mg-metric--wide">
								<span className="mg-metric__value">
									{item.value}
								</span>
								<span className="mg-metric__label">
									{item.label}
								</span>
								<p className="mg-metric__desc">
									{item.description}
								</p>
							</div>
						))}
					</div>

					<div className="mg-usecases">
						<h3 className="mg-usecases__title">{useCases.title}</h3>
						<div className="mg-usecases__chips">
							{useCases.items.map(item => (
								<span key={item} className="mg-usecase-chip">
									{item}
								</span>
							))}
						</div>
					</div>
				</section>

				{/* SHARED ENGINE FEATURES */}
				<section className="games-section games-section--band-soft">
					<div className="games-section__header">
						<h2 className="games-section__title">
							Built on the MonkGames Engine Stack
						</h2>
						<p className="games-section__subtitle">
							{globalFeatures.title}
						</p>
					</div>

					<div className="mg-grid mg-grid-three">
						{globalFeatures.items.map(item => (
							<article
								key={item.title}
								className="mg-card mg-card-feature">
								<h3 className="mg-card__title">{item.title}</h3>
								<p className="mg-card__body">
									{item.description}
								</p>
							</article>
						))}
					</div>
				</section>

				{/* TESTIMONIALS */}
				<section className="games-section" id="testimonials">
					<div className="games-section__header">
						<h2 className="games-section__title">
							{testimonials.title}
						</h2>
					</div>

					<div className="mg-testimonials">
						{testimonials.items.map(item => (
							<article
								key={item.quote}
								className="mg-testimonial">
								<p className="mg-testimonial__quote">
									“{item.quote}”
								</p>
								<p className="mg-testimonial__author">
									{item.author} · <span>{item.role}</span>
								</p>
							</article>
						))}
					</div>
				</section>

				{/* COMPARISON STRIP */}
				<section className="games-section" id="comparison">
					<div className="games-section__header">
						<h2 className="games-section__title">
							{comparison.title}
						</h2>
						<p className="games-section__subtitle">
							{comparison.subtitle}
						</p>
					</div>

					<div className="mg-compare">
						<div className="mg-compare__header">
							<span>Feature</span>
							<span>MonkGames</span>
							<span>Traditional Studios</span>
						</div>
						{comparison.rows.map(row => (
							<div key={row.feature} className="mg-compare__row">
								<span className="mg-compare__feature">
									{row.feature}
								</span>
								<span className="mg-compare__mg">
									{row.monkgames}
								</span>
								<span className="mg-compare__trad">
									{row.traditional}
								</span>
							</div>
						))}
					</div>
				</section>

				{/* FAQ */}
				<section className="games-section" id="faq">
					<div className="games-section__header">
						<h2 className="games-section__title">{faq.title}</h2>
						<p className="games-section__subtitle">
							A quick overview for operators, platforms, and
							builders considering MonkGames.
						</p>
					</div>

					<div className="mg-faq">
						{faq.items.map(item => (
							<details
								key={item.question}
								className="mg-faq__item">
								<summary>{item.question}</summary>
								<p>{item.answer}</p>
							</details>
						))}
					</div>
				</section>

				{/* FINAL CTA */}
				<section className="games-final-cta">
					<div className="games-final-cta__inner">
						<h2 className="games-final-cta__title">
							{finalCta.title}
						</h2>
						<p className="games-final-cta__subtitle">
							{finalCta.subtitle}
						</p>
						<div className="games-final-cta__actions">
							{renderButton(finalCta.primaryCta)}
							{renderButton(
								finalCta.secondaryCta,
								'mg-btn-ghost'
							)}
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
