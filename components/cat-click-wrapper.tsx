'use client';

import { kittyPop } from 'cats-are-love-cats-are-life';

export function CatClickWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div
			onClick={(e) => {
				kittyPop(e, {
					emoji: '🐈',
					fontSize: '2rem',
					durationMs: 800,
					animation: 'parabola',
				});
			}}
		>
			{children}
		</div>
	);
}
