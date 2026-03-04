import React from "react";
import {AbsoluteFill} from "remotion";

const Chip: React.FC<{label: string}> = ({label}) => {
	return (
		<div
			style={{
				padding: "12px 22px",
				borderRadius: 999,
				background: "rgba(255,255,255,0.92)",
				boxShadow: "0 1px 0 rgba(0,0,0,0.02)",
				color: "#1b1f28",
				fontSize: 22,
				lineHeight: 1,
				letterSpacing: 0.1,
				whiteSpace: "nowrap",
			}}
		>
			{label}
		</div>
	);
};

const IconPaperclip: React.FC = () => (
	<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
		<path
			d="M9.5 7.5v8.2c0 2 1.6 3.6 3.6 3.6 2.1 0 3.7-1.7 3.7-3.7V6.7c0-1.8-1.5-3.2-3.3-3.2-1.8 0-3.3 1.4-3.3 3.2v9.1c0 1 0.8 1.8 1.8 1.8s1.8-0.8 1.8-1.8V8"
			stroke="#6f7783"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const IconMic: React.FC = () => (
	<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
		<path
			d="M12 14.5a3 3 0 0 0 3-3V7.2a3 3 0 1 0-6 0v4.3a3 3 0 0 0 3 3Z"
			stroke="#6f7783"
			strokeWidth="1.8"
			strokeLinejoin="round"
		/>
		<path
			d="M7 11.5c0 3 2.2 5.4 5 5.4s5-2.4 5-5.4"
			stroke="#6f7783"
			strokeWidth="1.8"
			strokeLinecap="round"
		/>
		<path
			d="M12 16.9V20"
			stroke="#6f7783"
			strokeWidth="1.8"
			strokeLinecap="round"
		/>
	</svg>
);

const IconWand: React.FC = () => (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
		<path
			d="M4.7 19.3 15.7 8.3"
			stroke="#12151b"
			strokeWidth="2"
			strokeLinecap="round"
		/>
		<path
			d="M13.9 6.5 17.5 10.1"
			stroke="#12151b"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M7.2 6.8h2.2M8.3 5.7v2.2M16.8 4.7h2.2M17.9 3.6v2.2"
			stroke="#12151b"
			strokeWidth="1.7"
			strokeLinecap="round"
		/>
	</svg>
);

const IconArrowUp: React.FC = () => (
	<svg width="22" height="22" viewBox="0 0 24 24" fill="none">
		<path
			d="M12 19V6"
			stroke="#ffffff"
			strokeWidth="2.2"
			strokeLinecap="round"
		/>
		<path
			d="M7 10.5 12 5.5l5 5"
			stroke="#ffffff"
			strokeWidth="2.2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

export const BuildPromptScreen: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				background:
					"radial-gradient(1100px 520px at 50% 22%, rgba(255,247,235,0.85) 0%, rgba(255,247,235,0.45) 34%, rgba(255,247,235,0.0) 60%), radial-gradient(900px 650px at 12% 28%, rgba(224,191,255,0.70) 0%, rgba(224,191,255,0.25) 35%, rgba(224,191,255,0.0) 64%), radial-gradient(950px 700px at 92% 38%, rgba(197,165,255,0.65) 0%, rgba(197,165,255,0.20) 36%, rgba(197,165,255,0.0) 65%), linear-gradient(180deg, rgba(247,239,255,1) 0%, rgba(250,244,255,1) 55%, rgba(247,239,255,1) 100%)",
				fontFamily:
					"ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji','Segoe UI Emoji'",
			}}
		>
			<div
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						width: 1200,
						height: 520,
						position: "relative",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 70,
							textAlign: "center",
							fontSize: 56,
							fontWeight: 800,
							letterSpacing: -0.6,
							color: "#0f141a",
						}}
					>
						It's time to build.
					</div>

					<div
						style={{
							position: "absolute",
							left: 60,
							right: 60,
							top: 170,
							height: 210,
							background: "#ffffff",
							borderRadius: 22,
							border: "1px solid rgba(17,24,39,0.10)",
							boxShadow:
								"0 12px 22px rgba(17, 24, 39, 0.10), 0 2px 2px rgba(17, 24, 39, 0.06)",
						}}
					>
						<div
							style={{
								position: "absolute",
								left: 34,
								top: 26,
								fontSize: 26,
								color: "#667085",
								fontWeight: 500,
								letterSpacing: -0.2,
							}}
						>
							Build unique and beautiful apps
						</div>

						<div
							style={{
								position: "absolute",
								left: 28,
								top: 112,
								display: "flex",
								alignItems: "center",
								gap: 12,
								padding: "14px 22px",
								borderRadius: 999,
								background:
									"linear-gradient(180deg, rgba(255,207,232,0.95) 0%, rgba(255,192,227,0.95) 50%, rgba(255,186,226,0.95) 100%)",
								boxShadow: "0 6px 14px rgba(255, 124, 184, 0.20)",
							}}
						>
							<IconWand />
							<div
								style={{
									fontSize: 22,
									fontWeight: 700,
									color: "#141821",
									letterSpacing: -0.2,
								}}
							>
								Build apps
							</div>
						</div>

						<div
							style={{
								position: "absolute",
								right: 34,
								top: 118,
								display: "flex",
								alignItems: "center",
								gap: 18,
							}}
						>
							<div style={{opacity: 0.9}}>
								<IconPaperclip />
							</div>
							<div style={{opacity: 0.9}}>
								<IconMic />
							</div>
							<div
								style={{
									width: 62,
									height: 62,
									borderRadius: 999,
									background: "linear-gradient(180deg, #9db6ff 0%, #88a3ff 100%)",
									boxShadow: "0 10px 18px rgba(77, 128, 255, 0.32)",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<IconArrowUp />
							</div>
						</div>
					</div>

					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 420,
							display: "flex",
							justifyContent: "center",
							gap: 26,
						}}
					>
						<Chip label="Minimalistic blog site" />
						<Chip label="Habit tracking app" />
						<Chip label="B2B SaaS dashboard" />
					</div>

					<div
						style={{
							position: "absolute",
							left: 0,
							right: 0,
							top: 494,
							display: "flex",
							justifyContent: "center",
							gap: 28,
						}}
					>
						<Chip label="Photographer portfolio" />
						<Chip label="Design agency website" />
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
};