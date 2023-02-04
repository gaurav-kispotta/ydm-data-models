import { Type } from "typescript";

export interface IMapDefinition {
    name: string;
    sourceClass: unknown;
    targetClass: unknown;
    map: IMapDefinitionMapItem[];
}

export interface IMapDefinitionMapItem {
    sourceProperty?: string;
    targetProperty?: string;
    both?: string;
    transform?: (value: any) => any;
}