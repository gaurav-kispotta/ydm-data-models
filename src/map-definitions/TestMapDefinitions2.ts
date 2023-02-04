import { IMapDefinition } from "@ydm-data-models/map-definitions";
import { SourceTestClass, TargetTestClass } from "@ydm-data-models/map-definitions";

export const TestMapDefinitions: IMapDefinition[] = [
    {
        name: 'TestMapDefinitions',
        sourceClass: SourceTestClass,
        targetClass: TargetTestClass,
        map: [
            {
                sourceProperty: 't1',
                targetProperty: 't2',
            },
            {
                both: 't3',
            },
            {
                sourceProperty: 's4',
                targetProperty: 't4',
                transform: (value: any) => {
                    return value + '-transformed';
                }
            }
        ]
    },
    {
        name: 'TestMapDefinitionsWithDataTransofrmation',
        sourceClass: SourceTestClass,
        targetClass: TargetTestClass,
        map: [
            {
                sourceProperty: 'sourceDataTransormation',
                targetProperty: 'testDataTransormation',
                transform: (value: any) => {
                    return value + '-transformed';
                }
            }
        ]
    }
]