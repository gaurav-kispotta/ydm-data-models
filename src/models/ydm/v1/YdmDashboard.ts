import { YdmChannelModel } from '@ydm-data-models/ydm-models/v1';

export class YdmDashboard {
    // Basic dashboard information
    public id: string;
    public title: string;
    public description: string;
    public publishedAt: Date;

    // Statistics
    public totalChannels: bigint;
    public totalVideos: bigint;
    public totalViews: bigint;
    public totalLikes: bigint;
    public totalDislikes: bigint;
    public totalComments: bigint;
    public totalSubscribers: bigint;

    // Channels
    public Channels: YdmChannelModel[];
}