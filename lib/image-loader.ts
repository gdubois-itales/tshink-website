export default function imageLoader({
                                        src,
                                        width,
                                    }: {
    src: string;
    width: number;
}) {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    return `${basePath}${src}?w=${width}`;
}