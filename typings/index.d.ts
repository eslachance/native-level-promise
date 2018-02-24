declare module 'native-level-promise' {

	import {
		LevelDown,
		OpenOptions,
		ErrCallback,
		ErrBufferCallback,
		ErrStringCallback,
		Bytes,
		Batch,
		WriteOptions,
		BufferReadOptions,
		StringReadOptions,
		KeyAsStringIteratorOptions,
		ValueAsStringIteratorOptions,
		KeyAndValueAsStringIteratorOptions,
		KeyAndValueAsBufferIteratorOptions,
		KeyAsStringIterator,
		ValueAsStringIterator,
		KeyAndValueAsStringIterator,
		KeyAndValueAsBufferIterator
	} from 'leveldown';

	export class LevelPromise implements LevelDown {

		public constructor(location: string);
		public location: string;
		public level: LevelDown;
		public open(options: OpenOptions): Promise<void>;
		public close(): Promise<void>;
		public put(key: Bytes, value: Bytes, options?: WriteOptions): Promise<void>;
		public get(key: Bytes, options?: BufferReadOptions): Promise<Buffer>;
		public get(key: Bytes, options: StringReadOptions): Promise<string>;
		public del(key: Bytes, options?: WriteOptions): Promise<void>;
		public batch(operations: Batch[], options?: WriteOptions): Promise<void>;
		public approximateSize(start: Bytes, end: Bytes): Promise<number>;
		public compactRange(start: Bytes, end: Bytes): Promise<void>;
		public getProperty(property: string): string;
		public iterator(options?: KeyAsStringIteratorOptions): KeyAsStringIterator;
		public iterator(options?: ValueAsStringIteratorOptions): ValueAsStringIterator;
		public iterator(options?: KeyAndValueAsStringIteratorOptions): KeyAndValueAsStringIterator;
		public iterator(options?: KeyAndValueAsBufferIteratorOptions): KeyAndValueAsBufferIterator;
		public destroy(): Promise<void>;
		public repair(): Promise<void>;
		private _hasParam(fn: Function, name: string): boolean;

		open(callback: ErrCallback): void;
		open(options: OpenOptions, callback: ErrCallback): void;
		put(key: Bytes, value: Bytes, callback: ErrCallback): void;
		put(key: Bytes, value: Bytes, options: WriteOptions, callback: ErrCallback): void;
		get(key: Bytes, callback: ErrBufferCallback): void;
		get(key: Bytes, options: BufferReadOptions, callback: ErrBufferCallback): void;
		get(key: Bytes, options: StringReadOptions, callback: ErrStringCallback): void;
		del(key: Bytes, callback?: ErrCallback): void;
		del(key: Bytes, options: WriteOptions, callback?: ErrCallback): void;
		batch(operations: Batch[], callback?: ErrCallback): void;
		batch(operations: Batch[], options?: WriteOptions, callback?: ErrCallback): void;

	}

}
