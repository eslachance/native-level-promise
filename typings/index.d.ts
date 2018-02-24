declare module 'native-level-promise' {

	import { LevelDown } from 'leveldown';

	export class LevelPromise extends LevelDown {

		public constructor(location: string);
		public location: string;
		public level: Level;
		public destroy(): Promise<void>;
		public repair(): Promise<void>;
		private _hasParam(fn: Function, name: string): boolean;

	}

}
