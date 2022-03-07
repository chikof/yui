import type { ChatUserstate } from 'tmi.js';
import type { YuiClient } from '../../YuiClient';
import type { YuiMessage } from './YuiMessage';

export declare namespace YuiUser {
	interface Options extends Pick<ChatUserstate, 'username'> {
		message: YuiMessage;
		client: YuiClient;
	}

	interface TimeoutOptions {
		/**
		 * The amount of time in milliseconds to wait before executing the callback.
		 * @since 0.0.1
		 */
		length?: number;

		/**
		 * The reason for the timeout.
		 * @since 0.0.1
		 */
		reason?: string;
	}

	interface SendOptions {
		/**
		 * The content of the message to send.
		 * @since 0.0.1
		 */
		content: string;
	}
}

export class YuiUser {
	public constructor(public options: YuiUser.Options) {}

	public timeout({ length, reason }: YuiUser.TimeoutOptions) {
		return this.options.client.timeout(this.options.message.channel.toString(), this.options.username!, length, reason);
	}

	public send({ content }: YuiUser.SendOptions) {
		return this.options.client.whisper(this.options.username!, content);
	}
}
