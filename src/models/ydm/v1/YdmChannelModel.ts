import { YdmVideoModel } from '@ydm-data-models/ydm-models/v1';

export class YdmChannelModel {
    // Basic channel information
    public id: string;
    public title: string;
    public description: string;
    public publishedAt: Date;

    // Channel specific information
    public videos: YdmVideoModel[];
}