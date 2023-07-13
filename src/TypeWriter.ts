type QueueItem = () => Promise<void>

export default class TypeWriter {
    private queue: QueueItem[] = [];
    element: HTMLElement;
    loop: boolean;
    typingSpeed: number;
    deletingSpeed: number;

    constructor(parent: HTMLElement, { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}) {

        this.element = document.createElement("div");
        parent.append(this.element);
        this.loop = loop;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
    }

    typeString(text: string) {

        this.addToQueue((resolve) => {
            //~ Add String To Screen

            let i = 0;
            const interval = setInterval(() => {
                this.element.append(text[i]);
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, this.typingSpeed);
        });

        return this;
    }


    pauseFor(duration: number) {
        this.addToQueue((resolve) => {
            //~ Pause the string
            setTimeout(resolve, duration);
        });


        return this;
    }


    deleteChars(charsNumber: number) {

        this.addToQueue((resolve) => {
            //~ delete number of chars

            let i = 0;
            const interval = setInterval(() => {
                this.element.innerText = this.element.innerText.slice(0, this.element.innerText.length - 1)
                i++;
                if (i >= charsNumber) {
                    clearInterval(interval);
                    resolve();
                }
            }, this.deletingSpeed);
        });

        return this;
    }


    deleteAll(deleteSpeed = this.deletingSpeed) {
        this.addToQueue((resolve) => {
            //~ delete all string

            const interval = setInterval(() => {
                this.element.innerText = this.element.innerText.slice(0, this.element.innerText.length - 1)
                if (!this.element.innerText.length) {
                    clearInterval(interval);
                    resolve();
                }
            }, deleteSpeed);
        });

        return this;
    }


    async start() {
        let cb = this.queue.shift();
        while (cb != null) {
            await cb();
            if (this.loop) this.queue.push(cb);
            cb = this.queue.shift();
        }
        return this;
    }


    private addToQueue(cb: (resolve: () => void) => void) {
        this.queue.push(() => new Promise(cb))
    }

}

