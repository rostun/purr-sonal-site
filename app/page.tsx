export default function Home() {
	return (
		<main className='min-h-screen bg-stone-50 text-stone-900'>
			<div className='mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24'>
				<div className='space-y-24'>
					<section aria-labelledby='hero-heading'>
						<h1
							id='hero-heading'
							className='text-4xl font-semibold tracking-tight md:text-6xl'
						>
							Rosa Tung
						</h1>
						<p className='mt-4 max-w-2xl text-lg leading-8 text-stone-700'>
							Staff Software Engineer focused on frontend and fullstack
							development.
						</p>
					</section>

					<section aria-labelledby='work-heading'>
						<h2
							id='work-heading'
							className='text-2xl font-semibold tracking-tight md:text-3xl'
						>
							Selected Work
						</h2>
						<p className='mt-4 text-stone-700'>
							Project cards will go here.
						</p>
					</section>

					<section aria-labelledby='about-heading'>
						<h2
							id='about-heading'
							className='text-2xl font-semibold tracking-tight md:text-3xl'
						>
							About
						</h2>
						<p className='mt-4 max-w-3xl text-stone-700'>
							I like building thoughtful user experiences, fast applications,
							and systems that make sense.
						</p>
					</section>

					<section aria-labelledby='links-heading'>
						<h2
							id='links-heading'
							className='text-2xl font-semibold tracking-tight md:text-3xl'
						>
							Links
						</h2>
						<p className='mt-4 text-stone-700'>
							GitHub, LinkedIn, resume, and contact info will live here.
						</p>
					</section>

					<footer className='border-t border-stone-200 pt-6 text-sm text-stone-600'>
						Built once, deployed twice.
					</footer>
				</div>
			</div>
		</main>
	);
}