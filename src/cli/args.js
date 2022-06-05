import { argv } from 'process';


export const parseArgs = () => {
		const flags = argv.slice(2).filter(x => x.slice(0, 2) === '--');
		const result = [];
		for (let flag of flags) {
			let flagIndex = argv.indexOf(flag);
			let value = argv[flagIndex+1];
			result.push(`${flag.slice(2)} is ${value}`);
		}
	console.log(result.join(', '));
};

parseArgs();