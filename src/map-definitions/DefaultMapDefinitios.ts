import { IMapDefinition } from "@ydm-data-models/map-definitions";
import { YoutubeVideoResponse } from '@ydm-data-models/youtube-api/v3'
import { YdmVideoModel } from "@ydm-data-models/ydm-models/v1";

export const DefaultMapDefinitions: IMapDefinition = 
    {
        name: 'DefaultMapDefinitions',
        sourceClass: YoutubeVideoResponse,
        targetClass: YdmVideoModel,
        map: [
            {
                sourceProperty: '[].t1',
                targetProperty: '[].t2',
            },
            {
                both: 't3',
            }
        ]
    }