'use client';

import { kittyPop } from 'cats-are-love-cats-are-life';

export function CatClickWrapper({ children }: { children: React.ReactNode }) {
	return (
		<div
			onClick={(e) => {
				const _clientX = e.clientX;
				const _clientY = e.clientY;
				kittyPop(
					{ clientX: _clientX, clientY: _clientY },
					{
						emoji: '🐈',
						fontSize: '2rem',
						durationMs: 800,
						animation: 'parabola',
					},
				);
			}}
		>
			{children}
		</div>
	);
}
