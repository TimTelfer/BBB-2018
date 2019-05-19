export class GuestbookMessageResponse {
    public Count: number;
    public Items: Array<GuestbookMessageResponseItem>;
    public ScannedCount: number;
}

export class GuestbookMessageResponseItem {
    public name: GuestbookMessageResponseItemDetails;
    public message: GuestbookMessageResponseItemDetails;
    public giphyId: GuestbookMessageResponseItemDetails;
    public when: GuestbookMessageResponseItemDetails;
}

export class GuestbookMessageResponseItemDetails {
    public S: string;
}
