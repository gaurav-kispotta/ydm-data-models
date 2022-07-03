import { YdmChannelModel } from '@ydm-data-models/ydm-models/v1';

export class YdmDashboard {
    // Basic dashboard information
    public id: string | undefined;
    public title: string | undefined;
    public description: string | undefined;
    public publishedAt: Date | undefined;

    // Statistics
    public totalChannels: number | undefined;
    public totalVideos: number | undefined;
    public totalViews: number | undefined;
    public totalLikes: number | undefined;
    public totalDislikes: number | undefined;
    public totalComments: number | undefined;
    public totalSubscribers: number | undefined;

    // Channels
    public Channels: YdmChannelModel[] | undefined;
}