export class TestClass {
    get prompt(): string { return "Hello World!" }

    printPrompt = (): Promise<void> => {
        console.log(this.prompt);
        return Promise.resolve();
    }
}

