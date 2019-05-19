export class CounterHit {

    constructor(hitId: string, when: string) {
        this.hitId = hitId;
        this.when = when;
    }

    hitId: string;
    when: string;
}
