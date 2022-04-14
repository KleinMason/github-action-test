export class TestClass {
    get prompt(): string { return "Helo World!" }

    printPrompt = (): Promise<void> => {
        console.log(this.prompt);
        return Promise.resolve();
    }
}

