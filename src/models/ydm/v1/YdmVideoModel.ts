export class YdmVideoModel {
    public id: string;
    public title: string;
    public description: string;
    public publishedAt: string;
    public channelId: string;

    // Other meta data
    public commentsCount: bigint;
}