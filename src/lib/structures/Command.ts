export declare namespace Command {
	interface Options {}
	interface RunContext {}
}

export class Command {
	public constructor(public options: Command.Options) {}
}
