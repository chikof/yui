import { YuiChannel } from './YuiChannel';
import { YuiUser } from './YuiUser';

export declare namespace YuiMessage {
	interface Options extends YuiChannel.Options {
		content: string;
		username: string;
	}
}

export class YuiMessage {
	public constructor(public options: YuiMessage.Options) {}

	public get channel(): YuiChannel {
		return new YuiChannel(this.options);
	}

	public get user(): YuiUser {
		return new YuiUser({
			username: this.options.username,
			message: this,
			client: this.options.client
		});
	}

	public get content(): string {
		return this.options.content;
	}

	public toString(): string {
		return this.content;
	}
}
