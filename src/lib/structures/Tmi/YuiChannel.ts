import type { YuiClient } from '../../YuiClient';

export declare namespace YuiChannel {
	interface Options {
		client: YuiClient;
		channel: string;
	}
	interface MessageOptions {
		content: string;
	}
}

export class YuiChannel {
	public constructor(public options: YuiChannel.Options) {}

	public send(options: YuiChannel.MessageOptions): Promise<[string]> {
		return this.options.client.say(this.options.channel, options.content);
	}

	public toString(): string {
		return this.options.channel;
	}
}
