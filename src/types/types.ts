export interface MediaFormats {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}
export interface Media {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        thumbnail: MediaFormats
        large: MediaFormats
    }
}
export interface Article {
    id: number;
    title: string;
    Content: Array<{
        type: string;
        children: Array<{
            type: string;
            text: string;
        }>;
    }>;
    featureImage: Media;
    descriptions: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    date: string;
}