import type { StoreRegistry } from '@sapphire/pieces';
import { Client } from 'tmi.js';
import type { ArgumentStore } from './structures/ArgumentStore';

export class YuiClient extends Client {}

declare module '@sapphire/pieces' {
	interface Container {
		stores: StoreRegistry;
	}

	interface StoreRegistryEntries {
		arguments: ArgumentStore;
	}
}
