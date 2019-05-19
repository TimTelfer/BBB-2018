export class GuestbookMessage {
    public messageId: string;
    public name: string;
    public message: string;
    public giphyId: string;
    public when: string;
    public whenDate: Date;

    constructor(messageId: string, name: string, message: string, giphyId: string, when: string) {
        this.messageId = messageId;
        this.name = name;
        this.message = message;
        this.giphyId = giphyId;
        this.when = when;
        this.whenDate = new Date(when);
    }
}
