// app/docs/[engine]/page.tsx
'use client'

import { useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import engineDocsRaw from '../../../API/engineDocs.json'
import '../../styles/Home.css'
import '../../styles/Docs.css'

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'

type EndpointExample = {
	label: string
	language: string
	code: string
}

type Endpoint = {
	method: Method
	path: string
	summary: string
	description: string
	examples: EndpointExample[]
}

type Param = {
	name: string
	type: string
	location: 'path' | 'query' | 'body'
	required: boolean
	description: string
}

type QuickStep = {
	step: string
	title: string
	description: string
}

type IntegrationModel = {
	title: string
	subtitle: string
	bullets: string[]
}

type EngineDocs = {
	id: string
	name: string
	badge: string
	heroTitle: string
	heroSubtitle: string
	tags: string[]
	quickStart: {
		title: string
		steps: QuickStep[]
	}
	models: {
		title: string
		web2: IntegrationModel
		web3: IntegrationModel
	}
	endpoints: {
		title: string
		items: Endpoint[]
	}
	parameters: {
		title: string
		items: Param[]
	}
	webhooks: {
		title: string
		subtitle: string
		events: {
			event: string
			description: string
		}[]
		samplePayload: string
	}
	notes: {
		title: string
		bullets: string[]
	}
}

type EngineDocsMap = {
	[key: string]: EngineDocs
}

const engineDocsList: EngineDocs[] = Array.isArray(engineDocsRaw)
	? (engineDocsRaw as EngineDocs[])
	: Object.values(engineDocsRaw as EngineDocsMap)

type CodeBlockProps = {
	label: string
	language: string
	code: string
}

function CodeBlock({ label, language, code }: CodeBlockProps) {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code)
			setCopied(true)
			setTimeout(() => setCopied(false), 1400)
		} catch {
			// ignore
		}
	}

	return (
		<div className="docs-code">
			<div className="docs-code__header">
				<span>
					{label} ·{' '}
					<span className="docs-code__lang">{language}</span>
				</span>
				<button type="button" onClick={handleCopy}>
					{copied ? 'Copied' : 'Copy'}
				</button>
			</div>
			<pre>
				<code>{code}</code>
			</pre>
		</div>
	)
}

export default function EngineDocsPage() {
	const params = useParams<{ engine: string }>()
	const engineId = params.engine

	const docs = useMemo(
		() => engineDocsList.find(e => e.id === engineId),
		[engineId]
	)

	if (!docs) {
		return (
			<div className="docs-page">
				<header className="home-header">
					<div className="home-header__inner">
						<div className="home-header__brand">
							<a href="/">MonkGames</a>
						</div>
					</div>
				</header>
				<main className="docs">
					<section className="docs-section">
						<h1 className="docs-hero__title">
							Engine docs not found
						</h1>
						<p className="docs-hero__subtitle">
							We couldn&apos;t find documentation for this engine.
							Return to <a href="/docs">Docs home</a> or{' '}
							<a href="/games">Games</a>.
						</p>
					</section>
				</main>
			</div>
		)
	}

	const { badge, heroTitle, heroSubtitle, tags } = docs

	return (
		<div className="docs-page">
			{/* SHARED HEADER */}
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

			<main className="docs engine-docs">
				{/* HERO */}
				<section className="docs-hero">
					<div className="docs-hero__inner docs-hero__inner--engine">
						<div>
							<p className="docs-hero__badge">
								{badge} · Engine Integration Guide
							</p>
							<h1 className="docs-hero__title">{heroTitle}</h1>
							<p className="docs-hero__subtitle">
								{heroSubtitle}
							</p>

							<div className="engine-docs__tag-row">
								{tags.map(tag => (
									<span key={tag} className="engine-tag">
										{tag}
									</span>
								))}
							</div>

							<div className="docs-hero__cta-row">
								<a
									href={`/games#${docs.id}`}
									className="mg-btn mg-btn-secondary">
									View in Games Page
								</a>
								<a href="/docs" className="mg-btn mg-btn-ghost">
									Back to Docs Home
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* QUICK START */}
				<section className="docs-section" id="quickstart">
					<div className="docs-section__header">
						<h2 className="docs-section__title">
							{docs.quickStart.title}
						</h2>
					</div>

					<div className="docs-steps">
						{docs.quickStart.steps.map(step => (
							<article key={step.step} className="docs-step-card">
								<div className="docs-step-card__number">
									{step.step}
								</div>
								<h3 className="docs-step-card__title">
									{step.title}
								</h3>
								<p className="docs-step-card__body">
									{step.description}
								</p>
							</article>
						))}
					</div>
				</section>

				{/* INTEGRATION MODELS: WEB2 & WEB3 */}
				<section className="docs-section" id="models">
					<div className="docs-section__header">
						<h2 className="docs-section__title">
							{docs.models.title}
						</h2>
						<p className="docs-section__subtitle">
							Choose the model that matches how you manage
							identity, balances, and compliance. The same engine
							works for both.
						</p>
					</div>

					<div className="integration-models">
						<article className="integration-model-card">
							<span className="integration-model-card__pill">
								Web2 / Custodial
							</span>
							<h3>{docs.models.web2.title}</h3>
							<p className="integration-model-card__subtitle">
								{docs.models.web2.subtitle}
							</p>
							<ul>
								{docs.models.web2.bullets.map(b => (
									<li key={b}>{b}</li>
								))}
							</ul>
						</article>

						<article className="integration-model-card">
							<span className="integration-model-card__pill">
								Web3 / Wallet-Based
							</span>
							<h3>{docs.models.web3.title}</h3>
							<p className="integration-model-card__subtitle">
								{docs.models.web3.subtitle}
							</p>
							<ul>
								{docs.models.web3.bullets.map(b => (
									<li key={b}>{b}</li>
								))}
							</ul>
						</article>
					</div>
				</section>

				{/* ENDPOINTS */}
				<section className="docs-section" id="endpoints">
					<div className="docs-section__header">
						<h2 className="docs-section__title">
							{docs.endpoints.title}
						</h2>
					</div>

					<div className="engine-endpoints">
						{docs.endpoints.items.map(ep => (
							<article
								key={ep.path + ep.method}
								className="endpoint-card">
								<div className="endpoint-card__meta">
									<span
										className={`endpoint-card__method endpoint-card__method--${ep.method.toLowerCase()}`}>
										{ep.method}
									</span>
									<span className="endpoint-card__path">
										{ep.path}
									</span>
								</div>
								<h3 className="endpoint-card__summary">
									{ep.summary}
								</h3>
								<p className="endpoint-card__desc">
									{ep.description}
								</p>

								<div className="endpoint-card__examples">
									{ep.examples.map(ex => (
										<CodeBlock
											key={ex.label}
											label={ex.label}
											language={ex.language}
											code={ex.code}
										/>
									))}
								</div>
							</article>
						))}
					</div>
				</section>

				{/* PARAMETERS */}
				<section className="docs-section" id="parameters">
					<div className="docs-section__header">
						<h2 className="docs-section__title">
							{docs.parameters.title}
						</h2>
					</div>

					<div className="engine-params">
						<div className="engine-params__header">
							<span>Name</span>
							<span>Type</span>
							<span>Location</span>
							<span>Required</span>
							<span>Description</span>
						</div>
						{docs.parameters.items.map(p => (
							<div key={p.name} className="engine-params__row">
								<span>{p.name}</span>
								<span>{p.type}</span>
								<span>{p.location}</span>
								<span>{p.required ? 'Yes' : 'No'}</span>
								<span>{p.description}</span>
							</div>
						))}
					</div>
				</section>

				{/* WEBHOOKS */}
				<section className="docs-section" id="webhooks">
					<div className="docs-section__header">
						<h2 className="docs-section__title">
							{docs.webhooks.title}
						</h2>
						<p className="docs-section__subtitle">
							{docs.webhooks.subtitle}
						</p>
					</div>

					<div className="engine-webhooks">
						<div className="engine-webhooks__events">
							{docs.webhooks.events.map(w => (
								<article
									key={w.event}
									className="docs-webhook-card">
									<h3>{w.event}</h3>
									<p>{w.description}</p>
								</article>
							))}
						</div>

						<div className="engine-webhooks__code">
							<CodeBlock
								label="Sample webhook payload"
								language="json"
								code={docs.webhooks.samplePayload}
							/>
						</div>
					</div>
				</section>

				{/* NOTES */}
				<section className="docs-section" id="notes">
					<div className="docs-section__header">
						<h2 className="docs-section__title">
							{docs.notes.title}
						</h2>
					</div>

					<ul className="docs-bullets">
						{docs.notes.bullets.map(b => (
							<li key={b}>{b}</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	)
}
