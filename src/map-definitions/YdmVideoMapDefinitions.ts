import { YoutubeVideoResponse } from "@ydm-data-models/youtube-api/v3";
import { YdmVideoModel } from "@ydm-data-models/ydm-models/v1";
import { IMapDefinition } from "./IMapDefinition";

export const YdmVideoMapDefinitions: IMapDefinition = {
        name: "YdmVideoModelMapDef",
        sourceClass: YoutubeVideoResponse,
        targetClass: YdmVideoModel,
        map: [
            {
                sourceProperty: 'items[].id',
                targetProperty: '[].id'
            },
            {
                sourceProperty: 'items[].snippet.title',
                targetProperty: '[].title'
            },
            {
                sourceProperty: 'items[].snippet.description',
                targetProperty: '[].description'
            },
        ]
    };