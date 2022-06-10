import { YdmChannelModel } from '@ydm-data-models/ydm-models/v1';

export class YdmDashboard {
    // Basic dashboard information
    public id: string;
    public title: string;
    public description: string;
    public publishedAt: Date;

    // Statistics
    public totalChannels: number;
    public totalVideos: number;
    public totalViews: number;
    public totalLikes: number;
    public totalDislikes: number;
    public totalComments: number;
    public totalSubscribers: number;

    // Channels
    public Channels: YdmChannelModel[];
}