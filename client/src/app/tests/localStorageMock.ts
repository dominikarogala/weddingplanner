export class LocalStorageMock {
    store: any = {};

    set(key: string, value: string) {
        this.store[key] = value;
    }

    get(key: string) {
        if (!this.store.hasOwnProperty(key)) {
            return undefined;
        }

        return this.store[key];
    }
}
