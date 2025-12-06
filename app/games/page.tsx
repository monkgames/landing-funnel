// app/games/page.tsx
'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'
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

type GamesContent = {
	hero: {
		title: string
		subtitle: string
		badge: string
	}
	formats: {
		title: string
		blocks: FormatBlock[]
	}
	games: Game[]
	globalFeatures: {
		title: string
		items: GlobalFeature[]
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
	const { hero, formats, games, globalFeatures, faq } = content

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

				{/* SHARED ENGINE FEATURES */}
				<section className="games-section games-section--band">
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
			</main>
		</div>
	)
}
