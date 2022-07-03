import { YdmVideoModel } from '@ydm-data-models/ydm-models/v1';

export class YdmChannelModel {
    // Basic channel information
    public id: string | undefined;
    public title: string | undefined;
    public description: string | undefined;
    public publishedAt: Date | undefined;

    // Channel specific information
    public videos: YdmVideoModel[] | undefined;
}