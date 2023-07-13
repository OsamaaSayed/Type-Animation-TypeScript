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

        this.queue.push(() => {
            return new Promise((resolve, _) => {
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
            })
        })

        return this;
    }


    pauseFor(duration: number) {
        console.log(duration);

        return this;
    }


    deleteChars(charsNumber: number) {
        console.log(charsNumber);

        return this;
    }


    deleteAll(deleteSpeed = this.deletingSpeed) {
        console.log(deleteSpeed);

        return this;
    }


    async start() {

        for (const callback of this.queue) {
            await callback();
        }

        return this;
    }

}

