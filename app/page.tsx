import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
	return (
		<main className="min-h-screen bg-stone-50 text-stone-900">
			<div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
				<div className="space-y-28">
					<section aria-labelledby="hero-heading" className="space-y-6">
						<div className="space-y-4">
							<Badge
								variant="outline"
								className="border-rose-200 bg-rose-50 text-rose-700"
							>
								Frontend / Fullstack Engineer
							</Badge>

							<div className="space-y-4">
								<h1
									id="hero-heading"
									className="text-5xl font-semibold tracking-tight text-stone-950 md:text-7xl"
								>
									Rosa Tung
								</h1>

								<p className="max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
									I build thoughtful frontend and fullstack products
									with a focus on performance, usability,
									accessibility, and actual pragmatism.
								</p>

								<p className="max-w-2xl text-base leading-7 text-stone-600">
									This site is also a small side project: one Next.js
									app, deployed to both Vercel and Cloudflare.
								</p>
							</div>
						</div>

						<div className="flex flex-wrap gap-3">
							<Button
								asChild
								className="bg-stone-900 text-stone-50 hover:bg-stone-800"
							>
								<Link
									href="https://github.com/rostun"
									target="_blank"
									rel="noreferrer"
								>
									View GitHub
								</Link>
							</Button>

							<Button
								asChild
								variant="outline"
								className="border-stone-300 bg-white text-stone-900 hover:bg-stone-100"
							>
								<Link
									href="/resume.pdf"
									target="_blank"
									rel="noreferrer"
								>
									Resume
								</Link>
							</Button>
						</div>
					</section>

					<Separator className="bg-stone-200" />

					<section aria-labelledby="work-heading" className="space-y-6">
						<div className="space-y-2">
							<h2
								id="work-heading"
								className="text-2xl font-semibold tracking-tight md:text-3xl"
							>
								Selected Work
							</h2>
							<p className="text-stone-600">
								A few projects and areas of work worth highlighting.
							</p>
						</div>

						<div className="grid gap-6 md:grid-cols-3">
							<Card className="border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
								<CardHeader>
									<CardTitle>Next.js Migration</CardTitle>
									<CardDescription>
										Leading the migration of a major production page
										to a modern Next.js stack.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-sm leading-6 text-stone-600">
										Focused on performance, maintainability, and
										accessibility while moving from older frontend
										patterns to App Router, TypeScript, and a more
										scalable UI foundation.
									</p>
									<div className="flex flex-wrap gap-2">
										<Badge variant="secondary">Next.js</Badge>
										<Badge variant="secondary">TypeScript</Badge>
										<Badge variant="secondary">Tailwind</Badge>
									</div>
								</CardContent>
							</Card>

							<Card className="border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
								<CardHeader>
									<CardTitle>Colorful Life</CardTitle>
									<CardDescription>
										A small indie game project built in MonoGame.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-sm leading-6 text-stone-600">
										An experiment in clean game architecture,
										progression systems, and playful worldbuilding,
										with an emphasis on building the project in small,
										intentional steps.
									</p>
									<div className="flex flex-wrap gap-2">
										<Badge variant="secondary">MonoGame</Badge>
										<Badge variant="secondary">C#</Badge>
										<Badge variant="secondary">Game Dev</Badge>
									</div>
								</CardContent>
							</Card>

							<Card className="border-stone-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
								<CardHeader>
									<CardTitle>purr-sonal-site</CardTitle>
									<CardDescription>
										A personal site that also doubles as a deployment
										experiment.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<p className="text-sm leading-6 text-stone-600">
										Built as one Next.js app deployed to both Vercel
										and Cloudflare to compare platform tradeoffs,
										deployment workflows, and runtime behavior.
									</p>
									<div className="flex flex-wrap gap-2">
										<Badge variant="secondary">Next.js</Badge>
										<Badge variant="secondary">Vercel</Badge>
										<Badge variant="secondary">Cloudflare</Badge>
									</div>
								</CardContent>
							</Card>
						</div>
					</section>

					<Separator className="bg-stone-200" />

					<section aria-labelledby="about-heading" className="space-y-4">
						<h2
							id="about-heading"
							className="text-2xl font-semibold tracking-tight md:text-3xl"
						>
							About
						</h2>
						<div className="max-w-3xl space-y-4 text-base leading-7 text-stone-700">
							<p>
								I’m a Staff Software Engineer with a frontend and
								fullstack background, and I tend to care a lot about the
								parts of software people actually feel: usability,
								performance, accessibility, and whether a product feels
								thoughtful to use.
							</p>
							<p>
								I like practical engineering, clean UI, and systems that
								make sense without being overcomplicated. I’m also drawn
								to side projects that are a little playful, a little
								polished, and useful for learning something new.
							</p>
						</div>
					</section>

					<Separator className="bg-stone-200" />

					<section aria-labelledby="links-heading" className="space-y-4">
						<h2
							id="links-heading"
							className="text-2xl font-semibold tracking-tight md:text-3xl"
						>
							Links
						</h2>
						<div className="flex flex-wrap gap-3">
							<Button
								asChild
								variant="outline"
								className="border-stone-300 bg-white text-stone-900 hover:bg-stone-100"
							>
								<Link
									href="https://github.com/rostun"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</Link>
							</Button>

							<Button
								asChild
								variant="outline"
								className="border-stone-300 bg-white text-stone-900 hover:bg-stone-100"
							>
								<Link
									href="https://www.linkedin.com/in/rosa-tung-4b484958/"
									target="_blank"
									rel="noreferrer"
								>
									LinkedIn
								</Link>
							</Button>

							<Button
								asChild
								variant="outline"
								className="border-stone-300 bg-white text-stone-900 hover:bg-stone-100"
							>
								<Link
									href="/resume.pdf"
									target="_blank"
									rel="noreferrer"
								>
									Resume
								</Link>
							</Button>

							<Button
								asChild
								variant="outline"
								className="border-stone-300 bg-white text-stone-900 hover:bg-stone-100"
							>
								<Link href="mailto:rosa.m.tung@gmail.com">Email</Link>
							</Button>
						</div>
					</section>

					<footer className="border-t border-stone-200 pt-6 text-sm text-stone-500">
						Built once, deployed twice.
					</footer>
				</div>
			</div>
		</main>
	);
}
